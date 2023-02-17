export type Bindings = {
  USERNAME: string
  PASSWORD: string
  BLOG_EXAMPLE: KVNamespace
}

declare global {
  function getMiniflareBindings(): Bindings
}
