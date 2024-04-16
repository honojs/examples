/** @jsx jsx */
import { html, jsx, logger, poweredBy, serveStatic } from 'https://deno.land/x/hono@v3.11.7/middleware.ts'
import { Hono } from 'https://deno.land/x/hono@v3.11.7/mod.ts'

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
    <Layout title="Hello Deno!">
      <h1>Hono JSX example</h1>
    </Layout>
  )
})

Deno.serve(app.fetch)
