import axios from 'axios'
import { useEffect, useState } from 'react'
import api from '../api'

function useWarehouseSearch(query, limit = 20) {
  const [warehouses, setWarehouses] = useState({
    total_items: 0,
    items: [],
  })
  const [isLoading, setLoading] = useState(false)

  const fetchWarehouses = (query, limit, cancelSource) => {
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
  }

  useEffect(() => {
    const source = axios.CancelToken.source()
    setLoading(true)
    fetchWarehouses(query, limit, source)
    setLoading(false)
    return () => source.cancel()
  }, [query])

  return { warehouses, isLoading }
}

export default useWarehouseSearch
