# Hono Examples

This repository contains examples that use [Hono](https://hono.dev).

## Included Examples

- [basic](./basic/) - basic usage of routing, middleware, and `Context`
- [blog](./blog/) - CRUD example
- [durable-objects](./durable-objects/) - simple example with Cloudflare Durable Objects
- [env-vars](./env-vars/) - example using environment variables with Hono in Typescript: `Bindings` & `Variables`
- [jsx-ssr](./jsx-ssr/) - JSX Server Side Rendering with `JSX` Middleware
- [serve-static](./serve-static/) - example of `Serve Static` Middleware
- [deno](./deno/) - Deno example
- [bun](./bun/) - Bun example
- [pages-stack](./pages-stack/) - Zod + Zod Validator + `hc` + React on Cloudflare Pages
- [pylon](./pylon/) - Code-First GraphQL with TypeScript - Automatic Schema from Your Functions

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

### Pylon

Make sure you have [Bun](https://bun.sh) installed.

Install:

```
bun install
```

Run:

```
bun run develop
```

For more information, see the [Pylon documentation](https://pylon.cronit.io/).

## Author

Yusuke Wada https://github.com/yusukebe

## License

Distributed under the MIT License.
