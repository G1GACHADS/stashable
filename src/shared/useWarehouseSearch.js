import axios from 'axios'
import { useEffect, useState } from 'react'
import api from '../api'

function useWarehouseSearch(query, limit = 20) {
  const [warehouses, setWarehouses] = useState({
    total_items: 0,
    items: [],
  })
  const [loading, setLoading] = useState(false)

  const fetchWarehouses = (query, limit, cancelSource) => {
    setLoading(true)
    api
      .get(`/warehouses/search?q=${query}&limit=${limit}`, {
        cancelToken: cancelSource.token,
      })
      .catch(() => {
        if (axios.isCancel(cancelSource)) return
      })
      .then(response => {
        setWarehouses(response.data)
      })
      .finally(() => setLoading(false))
  }

  useEffect(() => {
    const source = axios.CancelToken.source()

    fetchWarehouses(query, limit, source)

    return () => source.cancel()
  }, [query])

  return { warehouses, loading }
}

export default useWarehouseSearch
