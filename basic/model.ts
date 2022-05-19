export type Post = {
  title: string
}

export const getPosts = (opts: { limit: string; offset: string }): Post[] => {
  const { limit, offset } = opts
  console.log(limit, offset)
  const posts: Post[] = [{ title: 'foo' }]
  return posts
}

export const getPost = () => {}

export const createPost = () => {}
