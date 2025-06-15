# Hono Examples

This repository contains examples that use [Hono](https://hono.dev).

## Included Examples

- [basic](./basic/) - basic usage of routing, middleware, and `Context`
- [blog](./blog/) - CRUD example
- [durable-objects](./durable-objects/) - simple example with Cloudflare Durable Objects
- [env-vars](./env-vars/) - example using environment variables with Hono in Typescript: `Bindings` & `Variables`
- [jsx-ssr](./jsx-ssr/) - JSX Server Side Rendering with `JSX` Middleware
- [hono-vite-jsx](./hono-vite-jsx/) - Example of using `hono/jsx/dom` with `vite`
- [serve-static](./serve-static/) - example of serving static files using Cloudflare Workers
- [deno](./deno/) - Deno example
- [bun](./bun/) - Bun example
- [pages-stack](./pages-stack/) - Zod + Zod Validator + `hc` + React on Cloudflare Pages
- [stytch-auth](./stytch-auth) - TODO App built with Stytch Auth + Cloudflare Workers + `vite`

## Running Examples

Install dependencies

```bash
npm install
```

For running the examples, run the below command and replace `[workspace]` with the example name.

```bash
npm -w [workspace] run dev
```

Or if you have cloned a specific example, you can follow the instructions in the example's README.

### For deno examples

```bash
deno run --allow-net hello.ts
```

or allow to read files on local disk:

```bash
deno run --allow-net --allow-read jsx.tsx
```

### For bun examples

Install dependencies

```bash
bun install
```

Run the example

```bash
bun run hello.ts
```

## Author

Yusuke Wada https://github.com/yusukebe

## License

Distributed under the MIT License.
