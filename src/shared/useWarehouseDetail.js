import { useEffect, useState } from 'react'
import api from '../api'

function useWarehouseDetail(id) {
  const [warehouse, setWarehouse] = useState({
    attributes: {
      id: 0,
      address_id: 0,
      name: 'Not Found',
      image_url: '',
      description: '',
      base_price: 0,
      email: '',
      phone_number: '',
      created_at: Date.now(),
    },
    relationships: {
      address: {
        id: 0,
        province: '',
        city: '',
        street_name: '',
        zip_code: 12345,
      },
      rooms: [],
      categories: [],
    },
  })
  const [loading, setLoading] = useState(false)

  const fetchWarehouse = id => {
    setLoading(true)
    api
      .get(`/warehouses/${id}`)
      .then(response => {
        setWarehouse(response.data)
      })
      .finally(() => setLoading(false))
  }

  useEffect(() => {
    fetchWarehouse(id)
  }, [])

  return { warehouse, loading }
}

export default useWarehouseDetail
