# Telegram Bot Message Gateway

THE NEXT RICHERS uses a local message gateway so Hermes Agent can read and save
messages through a Telegram bot without exposing the bot token in the browser or APK.

## Environment

```env
TELEGRAM_BOT_TOKEN=123456:example
TELEGRAM_CHAT_ID=-1001234567890
MESSAGE_GATEWAY_PORT=8787
MESSAGE_GATEWAY_ALLOWED_ORIGIN=http://127.0.0.1:3000
NEXT_PUBLIC_TELEGRAM_GATEWAY_URL=http://127.0.0.1:8787/messages
NEXT_PUBLIC_TELEGRAM_CHANNEL_URL=https://t.me/your_channel
```

Hermes-specific aliases are also accepted:

```env
HERMES_TELEGRAM_BOT_TOKEN=123456:example
HERMES_TELEGRAM_CHAT_ID=-1001234567890
```

## Commands

```powershell
npm.cmd run gateway:telegram
npm.cmd run dev:gateway
```

`gateway:telegram` runs only the message gateway. `dev:gateway` runs the gateway and the
Next.js development server together, and restarts the gateway if it stops unexpectedly.

## API

```http
GET http://127.0.0.1:8787/health
GET http://127.0.0.1:8787/messages
POST http://127.0.0.1:8787/messages
```

`POST /messages` accepts:

```json
{
  "author": "Hermes Agent",
  "text": "Research memo saved to Telegram."
}
```

The browser only reads `NEXT_PUBLIC_TELEGRAM_GATEWAY_URL`. Keep `TELEGRAM_BOT_TOKEN`
server-side in `.env.local`, your shell environment, or your deployment secret store.

## Hermes Agent Panel

The `/app` home screen includes a Hermes Agent Telegram panel. It reads the latest
Telegram messages through `GET /messages` and sends Hermes memos through `POST /messages`
with `author` set to `Hermes Agent`.

For local development, put the environment values in `.env.local`, then run:

```powershell
npm.cmd run dev:gateway
```
