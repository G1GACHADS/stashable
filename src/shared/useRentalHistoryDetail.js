import { useEffect, useState } from 'react'
import api from '../api'

function useRentalHistoryDetail(rentalID) {
  const [rental, setRental] = useState({
    attributes: {
      id: 0,
      user_id: 0,
      warehouse_id: 0,
      room_id: 0,
      category_id: 0,
      image_urls: [],
      name: 'Not Found',
      description: '',
      weight: 0,
      width: 0,
      height: 0,
      length: 0,
      quantity: 0,
      paid_annually: false,
      type: 'self-service',
      status: 'unpaid',
      created_at: '0000-00-00T00:00:00Z',
      payment_due: '0000-00-00T00:00:00Z',
    },
    relationships: {
      warehouse: {
        id: 0,
        address_id: 0,
        name: 'Not Found',
        image_url: '',
        description: '',
        base_price: 0,
        email: '',
        phone_number: '',
        rooms_count: 0,
        created_at: '0000-00-00T00:00:00Z',
      },
      address: {
        id: 0,
        province: '',
        city: '',
        street_name: '',
        zip_code: 12345,
      },
      categories: [],
      room: {
        id: 0,
        warehouse_id: 0,
        image_url: '',
        name: '',
        width: 0,
        height: 0,
        length: 0,
        price: 0,
      },
    },
  })
  const [refreshControl, setRefreshControl] = useState(false)
  const [isLoading, setLoading] = useState(false)

  const fetchRentalDetail = rentalID => {
    api.get(`/rent/history/${rentalID}`).then(response => {
      setRental(response.data)
    })
  }

  useEffect(() => {
    setLoading(true)
    fetchRentalDetail(rentalID)
    setLoading(false)
  }, [refreshControl])

  return { rental, isLoading, refreshControl, setRefreshControl }
}

export default useRentalHistoryDetail
