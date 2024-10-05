import { zValidator } from '@hono/zod-validator'
import { Hono } from 'hono'
import { handle } from 'hono/vercel'
import { z } from 'zod'

export const config = {
  runtime: 'edge'
}

const schema = z.object({
  name: z.string()
})

const app = new Hono().basePath('/api')

const route = app.post('/hello', zValidator('form', schema), (c) => {
  const data = c.req.valid('form')
  return c.json({
    message: `Hello ${data.name}!`
  })
})

export type AppType = typeof route

export default handle(app)
