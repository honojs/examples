# Hono Stack with SvelteKit

- SvelteKit
  - Works on Cloudflare Adapter
- Zod
- Zod Validator Middleware
- `hc`

## How It Works

Hono server can be accessed in `src/lib/server` or accessed in Svelte with `$lib/server`.

The server routes are ported from SvelteKit in `src/routes/api/[...slug]/+server.ts`.

The example in `+page.svelte` and `+page.server.ts` are a proof of concept
and showcase using SvelteKit's sever routes with Hono while maintaining type safety.
