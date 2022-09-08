import AsyncStorage from '@react-native-async-storage/async-storage'
import create from 'zustand'
import { persist } from 'zustand/middleware'
import api from '../api'

const persistOptions = { name: 'auth-storage', getStorage: () => AsyncStorage }

export const useAuthStore = create(
  persist(
    set => ({
      isAuthenticated: false,
      error: '',
      accessToken: '',
      user: { data: {}, address: {} },
      async authenticateUser(email, password) {
        try {
          const response = await api.post('/auth/login', { email, password })

          const attributes = response.data['attributes']
          const relationships = response.data['relationships']

          const accessToken = attributes['access_token']
          const userData = attributes['user']
          const userAddress = relationships['address']

          set({
            isAuthenticated: true,
            accessToken,
            user: { data: userData, address: userAddress },
            error: '',
          })

          api.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`
        } catch (error) {
          set({
            error: error.response.data.message,
          })

          setTimeout(() => {
            set({
              error: '',
            })
          }, 3000)
        }
      },
      async registerUser({
        fullName,
        email,
        phoneNumber,
        province,
        city,
        streetName,
        zipCode,
        password,
      }) {
        try {
          const response = await api.post('/auth/register', {
            full_name: fullName,
            email: email,
            phone_number: phoneNumber,
            province: province,
            city: city,
            street_name: streetName,
            zip_code: Number(zipCode),
            password: password,
          })

          const attributes = response.data['attributes']
          const relationships = response.data['relationships']

          const accessToken = attributes['access_token']
          const userData = attributes['user']
          const userAddress = relationships['address']

          set({
            isAuthenticated: true,
            accessToken,
            user: { data: userData, address: userAddress },
            error: '',
          })
        } catch (error) {
          set({
            error: error.response.data.message,
          })
          setTimeout(() => {
            set({
              error: '',
            })
          }, 3000)
        }
      },
      async logoutUser() {
        set({
          isAuthenticated: false,
          accessToken: '',
          user: { data: {}, address: {} },
        })
      },
    }),
    persistOptions
  )
)

export default useAuthStore
