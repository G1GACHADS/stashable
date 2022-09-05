import axios from 'axios'
import Constants from 'expo-constants'

export default axios.create({
  baseURL: 'https://stashable-backend.fly.dev',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
})
