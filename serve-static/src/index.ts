import manifest from '__STATIC_CONTENT_MANIFEST'
import { Hono } from 'hono'
import { serveStatic } from 'hono/cloudflare-workers'

const app = new Hono()

app.use('/static/*', serveStatic({ root: './', manifest }))
app.use('/favicon.ico', serveStatic({ path: './favicon.ico', manifest }))
app.get('/', (c) => c.text('This is Home! You can access: /static/hello.txt'))

export default app
