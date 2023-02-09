# Hono Examples

This repository is containing examples using [Hono](https://github.com/honojs/hono).

## Included Examples

* [basic](./basic/) - basic usage of a routing, middleware, and `Context`
* [blog](./blog/) - CRUD example
* [durable-objects](./durable-objects/) - simple example with Cloudflare Durable Objects
* [jsx-ssr](./jsx-ssr/) - JSX Sever Side Rendering with `JSX` Middleware
* [serve-static](./serve-static/) - example of `Serve Static` Middleware
* [deno](./deno/) - examples for Deno
* [bun](./bun/) - examples for Bun

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

## Boilerplates

* [hono-minimal](https://github.com/honojs/hono-minimal) - Minimal project with Hono for Cloudflare Workers.
* [compute-starter-kit](https://github.com/honojs/compute-starter-kit) -  A starter template with Hono for the Fastly Compute@Edge.

## Author

Yusuke Wada https://github.com/yusukebe

## License

Distributed under the MIT License.
