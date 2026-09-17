# node.js_cron_jobs 🕐

A simple Node.js cron job scheduler that wishes users 🎂 happy birthday on their birth date, with optional API notification 📨.

## Tech Stack 🛠️

- 🟢 Node.js + TypeScript
- ⏰ node-cron / node-schedule

## Getting Started 🚀

```bash
npm install
npm start
```

The birthday cron job runs daily at 09:00 in `src/server.ts`. Birthday messages are sent via `notifyApi()` in `src/notify.ts` (set the API URL there).

## Project Structure 📁

```
src/
  server.ts   # 👤 user list + daily cron job
  notify.ts   # 📨 API notification
```