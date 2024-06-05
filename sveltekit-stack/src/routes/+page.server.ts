import { hc } from 'hono/client'
import type { AppType } from '$lib/server'

export const actions = {
  default: async (event) => {

    const client = hc<AppType>(event.url.origin)
    const formData = await event.request.formData()
    const name = formData.get('name')?.toString()

    if (!name) {
      return
    }

    const res = await client.api.hello.$post({
      json: {
        name,
      }
    })

    return await res.json()

  }
}
