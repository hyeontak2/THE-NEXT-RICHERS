"use client";

import {
  AlertCircle,
  CheckCircle2,
  ExternalLink,
  MessageSquareText,
  RefreshCw,
  Send,
} from "lucide-react";
import { useCallback, useEffect, useMemo, useState } from "react";

type GatewayHealth = {
  ok?: boolean;
  configured?: boolean;
  status?: string;
  lastError?: string;
  lastSyncAt?: string | null;
  messageCount?: number;
  error?: string;
};

type TelegramMessage = {
  id: string;
  author: string;
  text: string;
  date: string;
  chatTitle?: string;
};

type MessagesResponse = GatewayHealth & {
  messages?: TelegramMessage[];
  message?: TelegramMessage;
};

const fallbackGatewayUrl = "http://127.0.0.1:8787/messages";
const gatewayUrl =
  process.env.NEXT_PUBLIC_TELEGRAM_GATEWAY_URL || fallbackGatewayUrl;
const channelUrl = process.env.NEXT_PUBLIC_TELEGRAM_CHANNEL_URL || "";

export function HermesTelegramPanel() {
  const [health, setHealth] = useState<GatewayHealth | null>(null);
  const [messages, setMessages] = useState<TelegramMessage[]>([]);
  const [draft, setDraft] = useState("");
  const [loading, setLoading] = useState(true);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState("");

  const healthUrl = useMemo(() => getHealthUrl(gatewayUrl), []);
  const connected = Boolean(health?.configured && !error);
  const statusLabel = connected
    ? "Telegram connected"
    : health?.configured === false
      ? "Telegram not configured"
      : "Gateway offline";

  const refreshMessages = useCallback(async () => {
    setLoading(true);
    setError("");

    try {
      const healthResponse = await fetchJson<GatewayHealth>(healthUrl, {
        allowErrorPayload: true,
      });

      setHealth(healthResponse);

      if (!healthResponse.configured) {
        setMessages([]);
        setError(
          healthResponse.error ||
            healthResponse.lastError ||
            "TELEGRAM_BOT_TOKEN and TELEGRAM_CHAT_ID are required.",
        );
        return;
      }

      const messagesResponse = await fetchJson<MessagesResponse>(gatewayUrl);
      setMessages(messagesResponse.messages ?? []);

      if (messagesResponse.error) {
        setError(messagesResponse.error);
      }
    } catch (refreshError) {
      setError(getErrorMessage(refreshError));
      setHealth((current) => current ?? { configured: false, status: "offline" });
    } finally {
      setLoading(false);
    }
  }, [healthUrl]);

  useEffect(() => {
    const timeout = window.setTimeout(() => {
      void refreshMessages();
    }, 0);

    return () => window.clearTimeout(timeout);
  }, [refreshMessages]);

  const sendMessage = async () => {
    const text = draft.trim();

    if (!text || sending) {
      return;
    }

    setSending(true);
    setError("");

    try {
      const response = await fetchJson<MessagesResponse>(gatewayUrl, {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({
          author: "Hermes Agent",
          text,
        }),
      });

      if (response.message) {
        setMessages((current) => [response.message as TelegramMessage, ...current]);
      }

      setDraft("");
      setHealth((current) => ({
        ...(current ?? {}),
        configured: true,
        status: "running",
        lastError: "",
      }));
    } catch (sendError) {
      setError(getErrorMessage(sendError));
    } finally {
      setSending(false);
    }
  };

  return (
    <section className="px-4 pb-10 sm:px-5 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-5 border-t border-[#ded8ca] pt-6 lg:grid-cols-[0.82fr_1.18fr]">
        <div className="border border-[#ded8ca] bg-white p-5 shadow-sm">
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-normal text-[#9a6a20]">
                <MessageSquareText className="size-4" aria-hidden="true" />
                Hermes Agent
              </p>
              <h2 className="mt-2 text-2xl font-semibold text-[#111411]">
                Telegram relay
              </h2>
            </div>
            <span
              className={`inline-flex min-h-9 items-center gap-2 rounded-[8px] border px-3 text-xs font-semibold ${
                connected
                  ? "border-[#a9d7bc] bg-[#eef8f1] text-[#1f6b41]"
                  : "border-[#ead0a8] bg-[#fff8eb] text-[#8a5b16]"
              }`}
            >
              {connected ? (
                <CheckCircle2 className="size-4" aria-hidden="true" />
              ) : (
                <AlertCircle className="size-4" aria-hidden="true" />
              )}
              {statusLabel}
            </span>
          </div>

          <div className="mt-5 grid gap-3 text-sm text-[#5d625b]">
            <StatusRow label="Endpoint" value={gatewayUrl} />
            <StatusRow
              label="Synced"
              value={formatDateTime(health?.lastSyncAt) || "Waiting"}
            />
            <StatusRow
              label="Messages"
              value={String(health?.messageCount ?? messages.length)}
            />
          </div>

          {error ? (
            <p className="mt-4 rounded-[8px] border border-[#ead0a8] bg-[#fff8eb] px-3 py-2 text-sm text-[#8a5b16]">
              {error}
            </p>
          ) : null}

          <div className="mt-5 flex flex-wrap gap-2">
            <button
              className="inline-flex min-h-10 items-center gap-2 rounded-[8px] border border-[#ded8ca] px-3 text-sm font-semibold text-[#343a34] transition hover:border-[#c8923d] hover:bg-[#f8f4ec]"
              type="button"
              onClick={refreshMessages}
              disabled={loading}
            >
              <RefreshCw
                className={`size-4 ${loading ? "animate-spin" : ""}`}
                aria-hidden="true"
              />
              Refresh
            </button>
            {channelUrl ? (
              <a
                className="inline-flex min-h-10 items-center gap-2 rounded-[8px] bg-[#111411] px-3 text-sm font-semibold text-white transition hover:bg-[#9a6a20]"
                href={channelUrl}
                target="_blank"
                rel="noreferrer"
              >
                Open Telegram
                <ExternalLink className="size-4" aria-hidden="true" />
              </a>
            ) : null}
          </div>
        </div>

        <div className="border border-[#ded8ca] bg-white shadow-sm">
          <div className="border-b border-[#e5dfd2] p-5">
            <label className="text-sm font-semibold text-[#343a34]" htmlFor="hermes-telegram-draft">
              Send memo to Telegram
            </label>
            <div className="mt-3 grid gap-3 sm:grid-cols-[1fr_auto]">
              <textarea
                id="hermes-telegram-draft"
                className="min-h-24 resize-none rounded-[8px] border border-[#ded8ca] bg-[#fffdf8] px-3 py-3 text-sm leading-6 text-[#111411] outline-none transition placeholder:text-[#9aa098] focus:border-[#c8923d]"
                placeholder="Write a Hermes Agent memo..."
                value={draft}
                onChange={(event) => setDraft(event.target.value)}
              />
              <button
                className="inline-flex min-h-11 items-center justify-center gap-2 rounded-[8px] bg-[#111411] px-4 text-sm font-semibold text-white transition hover:bg-[#9a6a20] disabled:cursor-not-allowed disabled:bg-[#b8b0a2]"
                type="button"
                onClick={sendMessage}
                disabled={!draft.trim() || sending}
              >
                <Send className="size-4" aria-hidden="true" />
                {sending ? "Sending" : "Send"}
              </button>
            </div>
          </div>

          <div className="divide-y divide-[#e5dfd2]">
            {messages.length ? (
              messages.slice(0, 5).map((message) => (
                <article key={message.id} className="p-5">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <p className="text-sm font-semibold text-[#111411]">
                      {message.author}
                    </p>
                    <time className="text-xs text-[#73786f]" dateTime={message.date}>
                      {formatDateTime(message.date)}
                    </time>
                  </div>
                  <p className="mt-2 whitespace-pre-wrap text-sm leading-6 text-[#5d625b]">
                    {message.text}
                  </p>
                </article>
              ))
            ) : (
              <p className="p-5 text-sm text-[#73786f]">
                {loading ? "Loading Telegram messages..." : "No Telegram messages yet."}
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

function StatusRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="grid gap-1 sm:grid-cols-[88px_1fr] sm:items-center">
      <span className="text-xs font-semibold uppercase tracking-normal text-[#73786f]">
        {label}
      </span>
      <span className="break-all font-medium text-[#343a34]">{value}</span>
    </div>
  );
}

async function fetchJson<T>(
  url: string,
  options?: RequestInit & { allowErrorPayload?: boolean },
): Promise<T> {
  const { allowErrorPayload = false, ...init } = options ?? {};
  const response = await fetch(url, {
    cache: "no-store",
    ...init,
  });
  const payload = (await response.json().catch(() => null)) as
    | (T & { error?: string })
    | null;

  if ((!response.ok && !allowErrorPayload) || !payload) {
    throw new Error(payload?.error || `Request failed with ${response.status}`);
  }

  return payload;
}

function getHealthUrl(messagesUrl: string) {
  try {
    const url = new URL(messagesUrl);
    url.pathname = url.pathname.replace(/\/messages\/?$/, "/health");
    return url.toString();
  } catch {
    return messagesUrl.replace(/\/messages\/?$/, "/health");
  }
}

function getErrorMessage(error: unknown) {
  return error instanceof Error ? error.message : "Telegram gateway request failed.";
}

function formatDateTime(value?: string | null) {
  if (!value) {
    return "";
  }

  const date = new Date(value);

  if (Number.isNaN(date.getTime())) {
    return value;
  }

  return new Intl.DateTimeFormat(undefined, {
    month: "short",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  }).format(date);
}
