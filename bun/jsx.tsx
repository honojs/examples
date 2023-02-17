import { Hono } from 'hono'
import { serveStatic } from 'hono/bun'

const app = new Hono()

const Layout = (props: { children?: any }) => {
  return (
    <html>
      <body>{props.children}</body>
    </html>
  )
}

const Top = (props: { messages: string[] }) => {
  return (
    <Layout>
      <h1>Hello Hono!</h1>
      <ul>
        {props.messages.map((message) => {
          return <li>{message}!!</li>
        })}
      </ul>
    </Layout>
  )
}

app.use('/favicon.ico', serveStatic({ path: './public/favicon.ico' }))

app.get('/', (c) => {
  const messages = ['Good Morning', 'Good Evening', 'Good Night']
  const foo = <Top messages={messages} />
  return c.html(foo)
})

const port = parseInt(process.env.PORT!) || 3000
console.log(`Running at http://localhost:${port}`)

export default app
