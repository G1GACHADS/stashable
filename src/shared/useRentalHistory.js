import { useEffect, useState } from 'react'
import api from '../api'

function useRentalHistory() {
  const [rentals, setRentals] = useState({
    total_items: 0,
    items: [],
  })
  const [refreshControl, setRefreshControl] = useState(false)
  const [isLoading, setLoading] = useState(false)

  const fetchRentals = () => {
    api.get(`/rent/history`).then(response => {
      setRentals(response.data)
    })
  }

  useEffect(() => {
    setLoading(true)
    fetchRentals()
    setLoading(false)
  }, [refreshControl])

  return { rentals, isLoading, refreshControl, setRefreshControl }
}

export default useRentalHistory
