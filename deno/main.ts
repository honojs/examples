import {
  logger,
  poweredBy,
} from "https://deno.land/x/hono@v3.11.11/middleware.ts";
import { Hono } from "https://deno.land/x/hono@v3.11.11/mod.ts";

const app = new Hono();

app.use("*", logger(), poweredBy());
app.get("/", (c) => {
  return c.text("Hello Deno!");
});

Deno.serve(app.fetch);
