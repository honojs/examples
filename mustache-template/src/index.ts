import { Hono } from 'hono'
import { mustache } from 'hono/mustache'
// import { mustache } from 'hono/mustache.module' <--- Module Worker mode

const app = new Hono()

app.use('*', mustache())

app.get('/', (c) => {
  return c.render(
    'index',
    { name: 'Hono', title: 'Hono mustache example' }, // Parameters
    { footer: 'footer', header: 'header' } // Partials
  )
})

app.fire()
// export default app <--- Module Worker mode
