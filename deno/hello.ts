import { serve } from 'https://deno.land/std@0.146.0/http/server.ts'
import { Hono, logger, poweredBy } from 'https://deno.land/x/hono@v1.6.3/mod.ts'

const app = new Hono()

app.use('*', logger(), poweredBy())
app.get('/', (c) => {
  return c.text('Hello Deno!')
})

serve(app.fetch)
