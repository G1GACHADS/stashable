import { useState } from 'react'
import { View } from 'react-native'
import styled from 'styled-components/native'
import AsyncStorage from '@react-native-async-storage/async-storage'

import { signIn } from '../../lib/api/auth'

import Label from '../../components/Label'
import Input from '../../components/Input'

const ForgotPassword = styled.Text`
  text-align: right;
  color: ${({ theme }) => theme.colors.grey3};
  font-family: ${({ theme }) => theme.typography.family.medium};
  font-size: ${({ theme }) => theme.typography.tall.md};
  margin-bottom: 15px;
`

export function SignInForm({ navigation }) {
  const [form, setForm] = useState({
    email: '',
    password: '',
  })

  async function submit() {
    const data = await signIn(form.email, form.password)

    await AsyncStorage.setItem('accessToken', data.accessToken)
    await AsyncStorage.setItem('userData', data.userData)
    await AsyncStorage.setItem('userAddress', data.userAddress)
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
      <ForgotPassword>Forgot Password?</ForgotPassword>
      <Button title="Log In" onPress={submit} />
    </View>
  )
}
