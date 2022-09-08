import axios from 'axios'

const LAN_URL = 'http://192.168.1.5:5000'

export default axios.create({
  // baseURL: 'https://stashable-backend.fly.dev',
  baseURL: LAN_URL,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
})
