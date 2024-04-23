/** @jsx jsx */
import { html }  from 'https://deno.land/x/hono@v4.2.4/helper.ts'
import { jsx, logger, poweredBy, serveStatic } from 'https://deno.land/x/hono@v4.2.4/middleware.ts'
import { Hono } from 'https://deno.land/x/hono@v4.2.4/mod.ts'

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
