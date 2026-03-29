import type { Context } from "https://deno.land/x/hono@v3.12.7/mod.ts";
import { Hono } from "https://deno.land/x/hono@v3.12.7/mod.ts";

// change this to your function name
const functionName = "hono-server";
const app = new Hono().basePath(`/${functionName}`);

app.get("/hello-world", (c: Context) => c.text("Hello World from hono-server!"));

Deno.serve(app.fetch);
