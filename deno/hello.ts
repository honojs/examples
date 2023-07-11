import { logger, poweredBy } from 'https://deno.land/x/hono@v3.3.0/middleware.ts'
import { Hono } from 'https://deno.land/x/hono@v3.3.0/mod.ts'

const app = new Hono()

app.use('*', logger(), poweredBy())
app.get('/', (c) => {
  return c.text('Hello Deno!')
})

Deno.serve(app.fetch)
