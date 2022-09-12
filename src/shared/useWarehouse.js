import { useEffect, useState } from 'react'
import api from '../api'

function useWarehouse(limit = 20) {
  const [warehouses, setWarehouses] = useState({
    total_items: 0,
    items: [],
  })
  const [loading, setLoading] = useState(false)

  const fetchWarehouses = limit => {
    setLoading(true)
    api
      .get(`/warehouses?limit=${limit}`)
      .then(response => {
        setWarehouses(response.data)
      })
      .finally(() => setLoading(false))
  }

  useEffect(() => {
    fetchWarehouses(limit)
  }, [])

  return { warehouses, loading }
}

export default useWarehouse
