# Hono Examples

This repository contains examples that use [Hono](https://hono.dev).

## Included Examples

* [basic](./basic/) - basic usage of routing, middleware, and `Context`
* [blog](./blog/) - CRUD example
* [durable-objects](./durable-objects/) - simple example with Cloudflare Durable Objects
* [env-vars](./env-vars/) - example on using environment variables with Hono in Typescript
* [jsx-ssr](./jsx-ssr/) - JSX Server Side Rendering with `JSX` Middleware
* [serve-static](./serve-static/) - example of `Serve Static` Middleware
* [deno](./deno/) - examples for Deno
* [bun](./bun/) - examples for Bun
* [pages-stack](./pages-stack/) - Zod + Zod Validator + `hc` + React on Cloudflare Pages

## How to run

### Cloudflare Workers

Install:

```
yarn install
```

Run:

```
yarn dev
```

### Deno

```
deno run --allow-net hello.ts
```

or allow to read files on local disk:

```
deno run --allow-net --allow-read jsx.tsx
```

### Bun

Install:

```
bun install
```

Run:

```
bun run hello.ts
```

## Author

Yusuke Wada https://github.com/yusukebe

## License

Distributed under the MIT License.
