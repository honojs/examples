import { zValidator } from "@hono/zod-validator";
import { Hono } from "hono";
import { handle } from "hono/vercel";
import { z } from "zod";
export const dynamic = "force-dynamic";

const app = new Hono().basePath("/api");

const schema = z.object({
  name: z.string(),
});

const route = app.post("/echo", zValidator("json", schema), async (c) => {
  const { name } = c.req.valid("json");
  return c.json({ name });
});

export type AppType = typeof route;

export const GET = handle(app);
export const POST = handle(app);
export const PUT = handle(app);
export const DELETE = handle(app);
export const PATCH = handle(app);
