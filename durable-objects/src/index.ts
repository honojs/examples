import { Hono } from 'hono'
import { createMiddleware } from 'hono/factory'
import { Counter } from './counter'

type Env = {
  Bindings: {
    COUNTERS: DurableObjectNamespace<Counter>
  }
  Variables: {
    count: number
    stub: DurableObjectStub<Counter>
  }
}

const app = new Hono<Env>()

const durableObjectMiddleware = createMiddleware<Env>(async (c, next) => {
  const name = c.req.query('name')
  if (!name) {
    return c.text(
      'Select a Durable Object to contact by using the `name` URL query string parameter, for example, ?name=A'
    )
  }
  const id = c.env.COUNTERS.idFromName(name)
  const stub = c.env.COUNTERS.get(id)
  c.set('stub', stub)
  await next()
  c.res = c.text(`Durable Object '${name}' count: ${c.var.count}`)
})

app.get('/', durableObjectMiddleware, async (c, next) => {
  const count = await c.var.stub.getCounterValue()
  c.set('count', count)
  await next()
})

app.get('/increment', durableObjectMiddleware, async (c, next) => {
  const count = await c.var.stub.increment()
  c.set('count', count)
  await next()
})

app.get('/decrement', durableObjectMiddleware, async (c, next) => {
  const count = await c.var.stub.decrement()
  c.set('count', count)
  await next()
})

export { Counter }

export default app
