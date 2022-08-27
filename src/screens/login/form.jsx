import AsyncStorage from '@react-native-async-storage/async-storage'
import { useState } from 'react'
import { View } from 'react-native'
import { useTheme } from 'styled-components/native'

import { signIn } from '../../lib/api/auth'

import Button from '../../components/button'
import Input from '../../components/input'
import Label from '../../components/label'
import Text from '../../components/text'

export function SignInForm({ navigation }) {
  const theme = useTheme()
  const [form, setForm] = useState({
    email: '',
    password: '',
  })

  async function submit() {
    const data = await signIn(form.email, form.password)

    await AsyncStorage.setItem('accessToken', JSON.stringify(data.accessToken))
    await AsyncStorage.setItem('userData', JSON.stringify(data.userData))
    await AsyncStorage.setItem('userAddress', JSON.stringify(data.userAddress))
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
      <Button title="Log In" onPress={submit} />
    </View>
  )
}
