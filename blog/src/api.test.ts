import type { Post } from './model'
import { api as app } from './api'

const env = getMiniflareBindings()

describe('Root', () => {
  it('GET /', async () => {
    const res = await app.request('http://localhost/')
    expect(res.status).toBe(200)
    const body = await res.json()
    expect(body).toEqual({ message: 'Hello' })
  })
})

describe('Blog API', () => {
  test('List', async () => {
    const res = await app.fetch(new Request('http://localhost/posts'), env)
    expect(res.status).toBe(200)
    const body = await res.json<{ posts: Post[] }>()
    expect(body['posts']).not.toBeUndefined()
    expect(body['posts'].length).toBe(0)
  })

  let newPostId = ''

  test('CRUD', async () => {
    // POST /posts
    let payload = JSON.stringify({ title: 'Morning', body: 'Good Morning' })
    let req = new Request('http://localhost/posts', {
      method: 'POST',
      body: payload,
      headers: { 'Content-Type': 'application/json' },
    })
    let res = await app.fetch(req, env)
    expect(res.status).toBe(201)
    let body = await res.json<{ post: Post }>()
    const newPost = body['post']
    expect(newPost.title).toBe('Morning')
    expect(newPost.body).toBe('Good Morning')
    newPostId = newPost.id

    // GET /posts
    res = await app.fetch(new Request('http://localhost/posts'), env)
    expect(res.status).toBe(200)
    const body2 = await res.json<{ posts: Post[] }>()
    expect(body2['posts']).not.toBeUndefined()
    expect(body2['posts'].length).toBe(1)

    // GET /posts/:id
    res = await app.fetch(new Request(`https://localhost/posts/${newPostId}`), env)
    expect(res.status).toBe(200)
    body = await res.json<{ post: Post }>()
    let post = body['post'] as Post
    expect(post.id).toBe(newPostId)
    expect(post.title).toBe('Morning')

    // PUT /posts/:id
    payload = JSON.stringify({ title: 'Night', body: 'Good Night' })
    req = new Request(`https://localhost/posts/${newPostId}`, {
      method: 'PUT',
      body: payload,
      headers: { 'Content-Type': 'application/json' },
    })
    res = await app.fetch(req, env)
    expect(res.status).toBe(200)
    let body3 = await res.json<{ ok: Boolean }>()
    expect(body3['ok']).toBeTruthy()

    // GET /posts/:id'
    res = await app.fetch(new Request(`https://localhost/posts/${newPostId}`), env)
    expect(res.status).toBe(200)
    body = await res.json<{ post: Post }>()
    post = body['post']
    expect(post.title).toBe('Night')
    expect(post.body).toBe('Good Night')

    // DELETE /posts/:id
    req = new Request(`https://localhost/posts/${newPostId}`, {
      method: 'DELETE',
    })
    res = await app.fetch(req, env)
    expect(res.status).toBe(200)
    body3 = await res.json<{ ok: Boolean }>()
    expect(body3['ok']).toBeTruthy()

    // GET /posts/:id
    res = await app.fetch(new Request(`https://localhost/posts/${newPostId}`), env)
    expect(res.status).toBe(404)
  })
})
