import { Hono } from 'hono'
import { html } from 'hono/html'
import { jsx } from 'hono/jsx'
import { validation } from '@honojs/validator'

const app = new Hono()

type Post = {
  title: string
  body: string
}
const posts: Post[] = []

const Layout = (props: any) => html`<!DOCTYPE html>
  <html>
    <head>
      <title>Hono Validator Middleware Example</title>
      <link rel="stylesheet" href="https://unpkg.com/@picocss/pico@latest/css/pico.min.css" />
    </head>
    <body>
      <main class="container">
        <h1><a href="/">Hello! Hono!</a></h1>
        ${props.children}
      </main>
    </body>
  </html>`

const Form = () => (
  <form method='post' action='/post'>
    <input name='title' value='' placeholder='Title' />
    <textarea name='body' rows='4' placeholder='Body'></textarea>
    <input type='submit'>Submit!</input>
  </form>
)

app.get('/', (c) => {
  const page = (
    <Layout>
      <Form />
      <hr />
      {posts.reverse().map((post) => {
        return (
          <div>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
          </div>
        )
      })}
    </Layout>
  )
  return c.html(page)
})

app.post(
  '/post',
  validation((v, message) => ({
    body: {
      // Validation rules
      title: [v.required, [v.isLength, { max: 80 }]],
      // Custom error message
      body: [[v.isLength, { max: 400 }, message('Body is wrong!!')]],
    },
    // Handling results
    done: (result, c) => {
      if (result.hasError) {
        const page = (
          <Layout>
            <h2>Validation Error!!</h2>
            <ul>
              {result.messages.map((message) => {
                return <li>{message}</li>
              })}
            </ul>
          </Layout>
        )
        return c.html(page, 400)
      }
    },
  }))
)

app.post('/post', async (c) => {
  const body = (await c.req.parseBody()) as Post
  posts.push(body)
  return c.redirect('/')
})

export default app
