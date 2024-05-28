import { Hono } from 'hono'
import { serveStatic } from 'hono/deno'
import { html } from 'hono/html'
import { logger } from 'hono/logger'
import { poweredBy } from 'hono/powered-by'

const app = new Hono()

app.use('*', logger(), poweredBy())
app.all('/favicon.ico', serveStatic({ path: './public/favicon.ico' }))

type Props = {
  title: string
  // deno-lint-ignore no-explicit-any
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
    <Layout title="Hello Deno!">
      <h1>Hono JSX example</h1>
    </Layout>
  )
})

Deno.serve(app.fetch)
