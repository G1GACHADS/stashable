import axios from './axios'

export async function signIn(email, password) {
  try {
    const response = await axios.post('/auth/login', { email, password })

    const attributes = response.data['attributes']
    const relationships = response.data['relationships']

    const accessToken = attributes['access_token']
    const userData = attributes['user']
    const userAddress = relationships['address']

    return {
      accessToken,
      userData,
      userAddress,
    }
  } catch (error) {
    console.log(error)
  }
}
