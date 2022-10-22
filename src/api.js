import axios from 'axios'
import Constants from 'expo-constants'

export default axios.create({
  // baseURL: 'https://stashable-backend.fly.dev',
  baseURL: Constants.manifest.extra.backendURL,
  headers: {
    Accept: 'application/json',
  },
})
