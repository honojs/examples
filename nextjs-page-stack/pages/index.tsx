import { hc } from 'hono/client'
import { useState } from 'react'
import useSWRMutation from 'swr/mutation'
import { AppType } from './api/[...route]'

const client = hc<AppType>('/')

const postHello = async (_: string, { arg }: { arg: string }) => {
  const res = await client.api.hello.$post({
    form: {
      name: arg
    }
  })
  return await res.json()
}

export default function Home() {
  const { trigger, isMutating, data } = useSWRMutation('post-hello', postHello)
  const [name, setName] = useState('')

  return (
    <div>
      <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" />
      <button type="button" onClick={() => trigger(name)} disabled={isMutating}>
        Send
      </button>
      <p>{data?.message}</p>
    </div>
  )
}
