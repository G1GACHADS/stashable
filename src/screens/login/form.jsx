import { useState } from 'react'
import { View } from 'react-native'

import { useAuthStore } from '../../store/auth-store'

import Button from '../../components/button'
import Input from '../../components/input'
import Label from '../../components/label'
import BaseText from '../../components/base-text'
import routes from '../../constants/routes'

export function SignInForm({ navigation }) {
  const { authenticateUser, error } = useAuthStore()

  const [loading, setLoading] = useState(false)
  const [form, setForm] = useState({
    email: '',
    password: '',
  })

  async function submit() {
    setLoading(true)
    await authenticateUser(form.email, form.password)
    setLoading(false)

    if (!error) {
      navigation.navigate(routes.mainPageRoute)
    }
  }

  return (
    <View>
      <Label>Email</Label>
      <Input
        value={form.email}
        placeholder="briantracy@mail.com"
        onChangeText={email => setForm({ ...form, email })}
      />
      <Label>Password</Label>
      <Input
        value={form.password}
        placeholder="•••••••••"
        secureTextEntry
        onChangeText={password => setForm({ ...form, password })}
      />
      <BaseText color="grey3" medium tall lg textAlign="right" mb={15}>
        Forgot Password?
      </BaseText>
      <Button
        title="Log In"
        onPress={submit}
        disabled={form.email === '' && form.password === ''}
        loading={loading}
      />
      {error !== '' && (
        <BaseText color="primary" capitalize medium tall lg mb={15}>
          {error}
        </BaseText>
      )}
    </View>
  )
}
