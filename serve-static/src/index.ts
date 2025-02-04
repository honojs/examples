import { Hono } from "hono";
import { poweredBy } from "hono/powered-by";

const app = new Hono();

// Mount Builtin Middleware
app.use("*", poweredBy());

// Routing
app.get("/", (c) =>
  c.html(
    `<html lang="en">
      <head>
      <title>Hono</title>
    </head>
    <body>
      <h1>Welcome to Hono</h1>
      <p>
        Try visiting: <a href="/my-file.txt">/my-file.txt</a> and <a href="/folder/nested-file.txt">/folder/nested-file.txt</a>
      </p>
      <p>
        Learn more about serving static files in Hono <a target="_blank" href="https://hono.dev/docs/getting-started/cloudflare-workers#serve-static-files">here</a>
      </p>
    </body>
  </html>`
  )
);

export default app;
