import { zValidator } from '@hono/zod-validator'
import { Hono } from 'hono'
import { z } from 'zod'

const app = new Hono().basePath('/api')

const route = app.post(
  '/hello',
  zValidator(
    'json',
    z.object({
      name: z.string()
    })
  ),
  (c) => {
    const { name } = c.req.valid('json')
    return c.json({
      message: `Hello ${name}!`
    })
  }
)

export type AppType = typeof route
export default app
