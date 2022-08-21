import { useState } from 'react'
import {
  StatusBar,
  ScrollView,
  View,
  Text,
  TouchableOpacity,
} from 'react-native'
import { useTheme } from 'styled-components'
import styled from 'styled-components/native'
import AsyncStorage from '@react-native-async-storage/async-storage'

import Button from '../components/Button'
import Container from '../components/Container'
import IconGoogle from '../components/icons/IconGoogle'
import { signIn } from '../lib/api/auth'
import theme from '../theme'
import routes from '../constants/routes'

const Label = styled.Text`
  color: ${({ theme }) => theme.colors.black};
  font-family: ${({ theme }) => theme.typography.family.medium};
  font-size: ${({ theme }) => theme.typography.tall.md};
`

const Input = styled.TextInput.attrs({
  placeholderTextColor: theme.colors.grey4,
})`
  border: ${({ theme }) => '2px solid ' + theme.colors.grey2};
  background-color: ${({ theme }) => theme.colors.white2};
  border-radius: 8px;
  height: 56px;
  padding-left: 15px;
  margin-bottom: 10px;
  font-family: ${({ theme }) => theme.typography.family.regular};
  font-size: ${({ theme }) => theme.typography.tall.md};
`

const ForgotPassword = styled.Text`
  text-align: right;
  color: ${({ theme }) => theme.colors.grey3};
  font-family: ${({ theme }) => theme.typography.family.medium};
  font-size: ${({ theme }) => theme.typography.tall.md};
  margin-bottom: 15px;
`

function SignInForm({ navigation }) {
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

const Title = styled.Text`
  color: ${({ theme }) => theme.colors.black};
  font-family: ${({ theme }) => theme.typography.family.semiBold};
  font-size: ${({ theme }) => theme.typography.venti.md};
  margin-bottom: 8px;
`

const SubTitle = styled.Text`
  color: ${({ theme }) => theme.colors.grey3};
  font-family: ${({ theme }) => theme.typography.family.medium};
  font-size: ${({ theme }) => theme.typography.tall.md};
  margin-bottom: 14px;
`

const TextDivider = styled.View`
  flex-direction: row;
  margin: 15px 0;
`

const TextDividerLine = styled.View`
  flex: 1;
  align-self: center;
  height: 1px;
  background-color: ${({ theme }) => theme.colors.grey1};
`

const TextDividerTitle = styled.Text`
  color: ${({ theme }) => theme.colors.grey3};
  font-family: ${({ theme }) => theme.typography.family.medium};
  font-size: ${({ theme }) => theme.typography.tall.md};
  padding: 0 12px;
`

const FormDivider = () => (
  <TextDivider gap="1rem">
    <TextDividerLine />
    <TextDividerTitle>Or Sign In With</TextDividerTitle>
    <TextDividerLine />
  </TextDivider>
)

const Footer = styled.View`
  margin-top: 15px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: baseline;
`

const FooterText = styled.Text`
  margin-right: 10px;
  color: ${({ theme }) => theme.colors.grey5};
  font-family: ${({ theme }) => theme.typography.family.medium};
  font-size: ${({ theme }) => theme.typography.tall.md};
`

const FooterLink = styled.Text`
  color: ${({ theme }) => theme.colors.secondary};
  font-family: ${({ theme }) => theme.typography.family.semiBold};
  font-size: ${({ theme }) => theme.typography.tall.md};
`

export function LoginScreen({ navigation }) {
  const theme = useTheme()
  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />
      <ScrollView>
        <Container>
          <Title>Let's Sign You In</Title>
          <SubTitle>Hello, welcome back to stashable.</SubTitle>
          <SignInForm navigation={navigation} />
          <FormDivider />

          <Button
            title="Google"
            stroke
            strokeColor={theme.colors.white2}
            titleColor={theme.colors.black}
            backgroundColor={theme.colors.white1}
            icon={<IconGoogle />}
          />

          <Footer>
            <FooterText>Don't have an account yet?</FooterText>
            <TouchableOpacity
              onPress={() => navigation.navigate(routes.registerRoute)}
            >
              <FooterLink>Register Now</FooterLink>
            </TouchableOpacity>
          </Footer>
        </Container>
      </ScrollView>
    </>
  )
}

export default LoginScreen
