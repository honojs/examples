# Hono Supabase Auth Example!

Based on the Hono/JSX + Vite example by [@MathurAditya724](https://github.com/MathurAditya724) \o/

This example shows how to use Supabase Auth both on the client and server side with Hono.

## Setup

- Run `npm install` to install the dependencies.
- Run `cp .env.example .env`.
- Set the required environment vairables in your `.env` file.

## Commands

Run the `vite` dev server

```bash
npm run dev
```

Building

```bash
npm run build
```

This project is configured to use `node` runtime, you can change it to your desired runtime in the `vite.config.js` file. We are using [@hono/vite-build](https://www.npmjs.com/package/@hono/vite-build) package for building the project and [@hono/vite-dev-server](https://www.npmjs.com/package/@hono/vite-dev-server) for running the dev server.
