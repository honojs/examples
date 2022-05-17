import { Hono } from 'hono'
import * as model from './model'
import { Bindings } from './bindings'
import { bodyParse } from 'hono/body-parse'
import { cors } from 'hono/cors'

const api = new Hono<Bindings>()
api.use('/posts/*', cors(), bodyParse())

api.get('/', (c) => {
  return c.json({ message: 'Hello' })
})

api.get('/posts', async (c) => {
  const posts = await model.getPosts(c.env.BLOG_EXAMPLE)
  return c.json({ posts: posts, ok: true })
})

api.post('/posts', async (c) => {
  const param = c.req.parsedBody
  const newPost = await model.createPost(c.env.BLOG_EXAMPLE, param)
  if (!newPost) {
    return c.json({ error: 'Can not create new post', ok: false }, 422)
  }
  return c.json({ post: newPost, ok: true }, 201)
})

api.get('/posts/:id', async (c) => {
  const id = c.req.param('id')
  const post = await model.getPost(c.env.BLOG_EXAMPLE, id)
  if (!post) {
    return c.json({ error: 'Not Found', ok: false }, 404)
  }
  return c.json({ post: post, ok: true })
})

api.put('/posts/:id', async (c) => {
  const id = c.req.param('id')
  const post = await model.getPost(c.env.BLOG_EXAMPLE, id)
  if (!post) {
    // 204 No Content
    return new Response(null, { status: 204 })
  }
  const param = c.req.parsedBody
  const success = await model.updatePost(c.env.BLOG_EXAMPLE, id, param)
  return c.json({ ok: success })
})

api.delete('/posts/:id', async (c) => {
  const id = c.req.param('id')
  const post = await model.getPost(c.env.BLOG_EXAMPLE, id)
  if (!post) {
    // 204 No Content
    return new Response(null, { status: 204 })
  }
  const success = await model.deletePost(c.env.BLOG_EXAMPLE, id)
  return c.json({ ok: success })
})

export { api }
