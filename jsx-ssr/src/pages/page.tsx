import { jsx } from 'hono/jsx'
import { Layout } from '../components/Layout'
import type { Post } from '../index'

export const Page = (props: { post: Post }) => {
  return (
    <Layout title={props.post.title}>
      <title>{props.post.title}</title>
      <main>
        <h2>{props.post.title}</h2>
        <p>{props.post.body}</p>
      </main>
    </Layout>
  )
}
