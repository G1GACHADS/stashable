import { useState } from 'react'
import { View } from 'react-native'
import { useTheme } from 'styled-components/native'

import { useAuthStore } from '../../store/auth-store'

import Button from '../../components/button'
import Input from '../../components/input'
import Label from '../../components/label'
import Text from '../../components/text'

export function SignInForm({ navigation }) {
  const theme = useTheme()
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
      <Text
        color={theme.colors.grey3}
        weight={theme.typography.weight.medium}
        size={theme.typography.tall.lg}
        mb="15"
        textAlign="right"
      >
        Forgot Password?
      </Text>
      <Button
        title="Log In"
        onPress={submit}
        disabled={form.email === '' && form.password === ''}
        loading={loading}
      />
      {error !== '' && (
        <Text
          color={theme.colors.primary}
          weight={theme.typography.weight.medium}
          size={theme.typography.tall.lg}
          mb="15"
          capitalize
        >
          {error}
        </Text>
      )}
    </View>
  )
}
