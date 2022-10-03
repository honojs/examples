import { Hono } from 'hono'
import { serveStatic } from 'hono/serve-static.bun'

const app = new Hono()

const Layout = (props: { children?: string }) => {
  return (
    <html lang="en">
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
  return c.html(<Top messages={messages} />)
})

const port = parseInt(process.env.PORT) || 3000
console.log(`Running at http://localhost:${port}`)

export default app
