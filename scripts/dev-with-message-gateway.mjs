import { spawn } from "node:child_process";

const npmCommand = process.platform === "win32" ? "npm.cmd" : "npm";
let shuttingDown = false;
let gateway = null;

startGateway();

const app = spawn(
  npmCommand,
  ["run", "dev", "--", "--hostname", "127.0.0.1", "--port", "3000"],
  { stdio: "inherit" },
);

app.on("exit", (code, signal) => {
  shuttingDown = true;
  if (gateway && !gateway.killed) {
    gateway.kill();
  }

  if (signal) {
    process.kill(process.pid, signal);
    return;
  }

  process.exit(code ?? 0);
});

for (const signal of ["SIGINT", "SIGTERM"]) {
  process.on(signal, () => {
    shuttingDown = true;
    if (gateway && !gateway.killed) {
      gateway.kill();
    }
    if (!app.killed) {
      app.kill();
    }
  });
}

function startGateway() {
  gateway = spawn(process.execPath, ["scripts/telegram-message-gateway.mjs"], {
    stdio: "inherit",
  });

  gateway.on("exit", (code, signal) => {
    if (shuttingDown) {
      return;
    }

    const reason = signal ? signal : `code ${code ?? 0}`;
    console.warn(`[message-gateway] stopped (${reason}); restarting in 1s`);
    setTimeout(startGateway, 1000);
  });
}
