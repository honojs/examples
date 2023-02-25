import { serve } from 'https://deno.land/std@0.146.0/http/server.ts'
import { Hono } from 'https://deno.land/x/hono@v3.0.2/mod.ts'
import { logger, poweredBy } from 'https://deno.land/x/hono@v3.0.2/middleware.ts'

const app = new Hono()

app.use('*', logger(), poweredBy())
app.get('/', (c) => {
  return c.text('Hello Deno!')
})

serve(app.fetch)
