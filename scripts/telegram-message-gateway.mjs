import { createServer } from "node:http";
import { URL } from "node:url";

const host = process.env.MESSAGE_GATEWAY_HOST || "127.0.0.1";
const port = Number.parseInt(process.env.MESSAGE_GATEWAY_PORT || "8787", 10);
const token =
  process.env.TELEGRAM_BOT_TOKEN || process.env.HERMES_TELEGRAM_BOT_TOKEN || "";
const chatId =
  process.env.TELEGRAM_CHAT_ID || process.env.HERMES_TELEGRAM_CHAT_ID || "";
const maxMessages = Number.parseInt(process.env.MESSAGE_GATEWAY_LIMIT || "30", 10);
const allowedOrigin = process.env.MESSAGE_GATEWAY_ALLOWED_ORIGIN || "*";
const selfTest = process.argv.includes("--self-test");

let lastUpdateId = Number.parseInt(process.env.TELEGRAM_START_OFFSET || "0", 10) || 0;
let lastSyncAt = null;
let lastError = "";
let cachedMessages = [];

const configured = Boolean(token && chatId);

const server = createServer(async (request, response) => {
  try {
    setCorsHeaders(response);

    if (request.method === "OPTIONS") {
      response.writeHead(204);
      response.end();
      return;
    }

    const url = new URL(request.url || "/", `http://${request.headers.host}`);

    if (url.pathname === "/health" && request.method === "GET") {
      sendJson(response, configured ? 200 : 503, getHealth());
      return;
    }

    if (url.pathname === "/messages" && request.method === "GET") {
      if (!configured) {
        sendJson(response, 503, {
          ...getHealth(),
          error: "TELEGRAM_BOT_TOKEN and TELEGRAM_CHAT_ID are required.",
        });
        return;
      }

      await syncTelegramUpdates();
      sendJson(response, 200, {
        ok: true,
        source: "telegram-bot",
        storage: "telegram-bot",
        lastSyncAt,
        messages: cachedMessages,
      });
      return;
    }

    if (url.pathname === "/messages" && request.method === "POST") {
      if (!configured) {
        sendJson(response, 503, {
          ...getHealth(),
          error: "TELEGRAM_BOT_TOKEN and TELEGRAM_CHAT_ID are required.",
        });
        return;
      }

      const body = await readJsonBody(request);
      const text = typeof body.text === "string" ? body.text.trim() : "";

      if (!text) {
        sendJson(response, 400, { ok: false, error: "text is required." });
        return;
      }

      const saved = await sendTelegramMessage(text, body.author);
      cachedMessages = [saved, ...cachedMessages].slice(0, maxMessages);
      sendJson(response, 201, {
        ok: true,
        source: "telegram-bot",
        storage: "telegram-bot",
        message: saved,
      });
      return;
    }

    sendJson(response, 404, { ok: false, error: "Not found." });
  } catch (error) {
    lastError = error instanceof Error ? error.message : "Unknown gateway error";
    sendJson(response, 500, { ok: false, error: lastError, ...getHealth() });
  }
});

server.listen(port, host, () => {
  const status = configured ? "running" : "not-configured";
  console.log(
    `[message-gateway] ${status} storage=telegram-bot url=http://${host}:${port}`,
  );

  if (selfTest) {
    runSelfTest();
  }
});

server.on("error", (error) => {
  console.error(`[message-gateway] failed: ${error.message}`);
  process.exitCode = 1;
});

async function syncTelegramUpdates() {
  const params = new URLSearchParams({
    limit: "100",
    timeout: "0",
    allowed_updates: JSON.stringify([
      "message",
      "channel_post",
      "edited_message",
      "edited_channel_post",
    ]),
  });

  if (lastUpdateId > 0) {
    params.set("offset", String(lastUpdateId + 1));
  }

  const payload = await telegramRequest(`getUpdates?${params.toString()}`);
  const updates = Array.isArray(payload.result) ? payload.result : [];
  const normalized = updates
    .map(normalizeUpdate)
    .filter((message) => message && String(message.chatId) === String(chatId));

  for (const update of updates) {
    if (typeof update.update_id === "number") {
      lastUpdateId = Math.max(lastUpdateId, update.update_id);
    }
  }

  if (normalized.length) {
    cachedMessages = [...normalized.reverse(), ...cachedMessages]
      .filter(uniqueById)
      .slice(0, maxMessages);
  }

  lastSyncAt = new Date().toISOString();
  lastError = "";
}

async function sendTelegramMessage(text, author) {
  const prefix = typeof author === "string" && author.trim() ? `${author.trim()}: ` : "";
  const payload = await telegramRequest("sendMessage", {
    method: "POST",
    body: JSON.stringify({
      chat_id: chatId,
      text: `${prefix}${text}`,
      disable_web_page_preview: true,
    }),
    headers: {
      "content-type": "application/json",
    },
  });

  const message = payload.result;
  return normalizeMessage(message) || {
    id: String(Date.now()),
    author: "Hermes Agent",
    text,
    date: new Date().toISOString(),
    chatTitle: "Telegram Bot",
  };
}

async function telegramRequest(method, init) {
  const response = await fetch(`https://api.telegram.org/bot${token}/${method}`, init);
  const payload = await response.json().catch(() => null);

  if (!response.ok || !payload?.ok) {
    const description =
      payload && typeof payload.description === "string"
        ? payload.description
        : `Telegram request failed with ${response.status}`;
    throw new Error(description);
  }

  return payload;
}

function normalizeUpdate(update) {
  if (!update || typeof update !== "object") {
    return null;
  }

  const message =
    update.message ||
    update.channel_post ||
    update.edited_message ||
    update.edited_channel_post;
  const normalized = normalizeMessage(message);

  if (!normalized) {
    return null;
  }

  return {
    ...normalized,
    id: String(update.update_id ?? normalized.id),
  };
}

function normalizeMessage(message) {
  if (!message || typeof message !== "object") {
    return null;
  }

  const text =
    typeof message.text === "string"
      ? message.text
      : typeof message.caption === "string"
        ? message.caption
        : getMediaFallback(message);

  if (!text) {
    return null;
  }

  const chat = message.chat || {};
  const from = message.from || {};
  const firstName = typeof from.first_name === "string" ? from.first_name : "";
  const lastName = typeof from.last_name === "string" ? from.last_name : "";
  const username = typeof from.username === "string" ? from.username : "";
  const chatTitle = typeof chat.title === "string" ? chat.title : "Telegram Bot";

  return {
    id: String(message.message_id ?? Date.now()),
    chatId: chat.id,
    author:
      [firstName, lastName].filter(Boolean).join(" ") ||
      (username ? `@${username}` : chatTitle),
    text,
    date:
      typeof message.date === "number"
        ? new Date(message.date * 1000).toISOString()
        : new Date().toISOString(),
    chatTitle,
  };
}

function getMediaFallback(message) {
  if (message.photo) {
    return "Photo message";
  }

  if (message.video) {
    return "Video message";
  }

  if (message.voice) {
    return "Voice message";
  }

  if (message.document) {
    return "Document message";
  }

  return null;
}

function getHealth() {
  return {
    ok: configured,
    status: configured ? "running" : "not-configured",
    source: "telegram-bot",
    storage: "telegram-bot",
    configured,
    lastSyncAt,
    lastError,
    messageCount: cachedMessages.length,
  };
}

function uniqueById(message, index, messages) {
  return messages.findIndex((item) => item.id === message.id) === index;
}

function setCorsHeaders(response) {
  response.setHeader("access-control-allow-origin", allowedOrigin);
  response.setHeader("access-control-allow-methods", "GET,POST,OPTIONS");
  response.setHeader("access-control-allow-headers", "content-type,accept");
}

function sendJson(response, statusCode, payload) {
  response.writeHead(statusCode, { "content-type": "application/json; charset=utf-8" });
  response.end(JSON.stringify(payload));
}

function readJsonBody(request) {
  return new Promise((resolve, reject) => {
    let body = "";

    request.setEncoding("utf8");
    request.on("data", (chunk) => {
      body += chunk;
    });
    request.on("error", reject);
    request.on("end", () => {
      try {
        resolve(body ? JSON.parse(body) : {});
      } catch (error) {
        reject(error);
      }
    });
  });
}

async function runSelfTest() {
  try {
    const response = await fetch(`http://${host}:${port}/health`);
    const payload = await response.json();
    console.log(`[message-gateway] self-test ${payload.status}`);
    server.close(() => {
      process.exit(0);
    });
  } catch (error) {
    console.error(
      `[message-gateway] self-test failed: ${
        error instanceof Error ? error.message : "Unknown error"
      }`,
    );
    server.close(() => {
      process.exit(1);
    });
  }
}
