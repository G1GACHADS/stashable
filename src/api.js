import axios from 'axios'
import Constants from 'expo-constants'

export default axios.create({
  baseURL: Constants.manifest.extra.backendURL || 'http://localhost:5000',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
})
