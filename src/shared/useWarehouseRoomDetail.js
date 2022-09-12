import { useEffect, useState } from 'react'
import api from '../api'

function useWarehouseRoomDetail(id, roomID) {
  const [room, setRoom] = useState({
    attributes: {
      id: 0,
      warehouse_id: 0,
      image_url: '',
      name: 'Not Found',
      width: 0,
      height: 0,
      length: 0,
      price: 0,
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
        zip_code: 0,
      },
      categories: [],
    },
  })
  const [loading, setLoading] = useState(false)

  const fetchRoom = (id, roomID) => {
    setLoading(true)
    api
      .get(`/warehouses/${id}/room/${roomID}`)
      .then(response => {
        setRoom(response.data)
      })
      .finally(() => setLoading(false))
  }

  useEffect(() => {
    fetchRoom(id, roomID)
  }, [])

  return { room, loading }
}

export default useWarehouseRoomDetail
