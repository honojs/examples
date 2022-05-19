import { Hono } from 'hono'
import { serveStatic } from 'hono/serve-static'
// import { serveStatic } from 'hono/serve-static.module' <--- Module Worker mode

const app = new Hono()

app.use('/static/*', serveStatic({ root: './' }))
app.get('/', (c) => c.text('This is Home! You can access: /static/hello.txt'))

app.fire()
// export default app <--- Module Worker mode
