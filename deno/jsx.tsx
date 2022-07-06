/** @jsx jsx */
import { serve } from 'https://deno.land/std@0.146.0/http/server.ts'
import {
  Hono,
  logger,
  poweredBy,
  serveStatic,
  jsx,
  html,
} from 'https://deno.land/x/hono@v1.6.2/mod.ts'

const app = new Hono()

app.use('*', logger(), poweredBy())
app.all('/favicon.ico', serveStatic({ path: './public/favicon.ico' }))

type Props = {
  title: string
  children?: any
}

const Layout = (props: Props) => html`<!DOCTYPE html>
  <html>
    <head>
      <title>${props.title}</title>
    </head>
    <body>
      ${props.children}
    </body>
  </html>`

app.get('/', (c) => {
  return c.html(
    <Layout title='Hello Deno!'>
      <h1>Hono JSX example</h1>
    </Layout>
  )
})

serve((req) => app.fetch(req))
