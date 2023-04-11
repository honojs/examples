import type { InferResponseType } from 'hono/client'
import { hc } from 'hono/client'
import { useEffect, useState } from 'react'
import { AppType } from '../functions/api/[[route]]'

const App = () => {
  const client = hc<AppType>('/')
  const $get = client.api.hello.$get

  const [data, setData] = useState<InferResponseType<typeof $get>>()

  useEffect(() => {
    const fetchData = async () => {
      const res = await $get({
        query: {
          name: 'Pages',
        },
      })
      const responseData = await res.json()
      setData(responseData)
    }
    fetchData()
  }, [])

  return <h1>{data?.message}</h1>
}

export default App
