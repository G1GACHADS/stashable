import { useEffect, useState } from 'react'
import api from '../api'

function useRentalHistory() {
  const [rentals, setRentals] = useState({
    total_items: 0,
    items: [],
  })
  const [refreshControl, setRefreshControl] = useState(false)
  const [loading, setLoading] = useState(false)

  const fetchRentals = () => {
    setLoading(true)
    api
      .get(`/rent/history`)
      .then(response => {
        setRentals(response.data)
      })
      .finally(() => setLoading(false))
  }

  useEffect(() => {
    fetchRentals()
  }, [refreshControl])

  return { rentals, loading, refreshControl, setRefreshControl }
}

export default useRentalHistory
