import { useEffect, useState } from 'react'
import api from '../api'

function useWarehouse(limit = 20) {
  const [warehouses, setWarehouses] = useState({
    total_items: 0,
    items: [],
  })
  const [isLoading, setLoading] = useState(false)

  const fetchWarehouses = limit => {
    api.get(`/warehouses?limit=${limit}`).then(response => {
      setWarehouses(response.data)
    })
  }

  useEffect(() => {
    setLoading(true)
    fetchWarehouses(limit)
    setLoading(false)
  }, [])

  return { warehouses, isLoading }
}

export default useWarehouse
