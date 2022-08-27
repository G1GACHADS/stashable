import { useState } from 'react'
import { TouchableOpacity, View } from 'react-native'
import styled, { useTheme } from 'styled-components/native'

import routes from '../../constants/routes'

import Button from '../../components/button'
import IconGoogle from '../../components/icons/icon-google'
import Input from '../../components/input'
import Label from '../../components/label'
import Text from '../../components/text'
import useAuthStore from '../../store/auth-store'

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

const FormDivider = ({ theme }) => (
  <TextDivider gap="1rem">
    <TextDividerLine />
    <Text
      color={theme.colors.grey3}
      weight={theme.typography.weight.medium}
      size={theme.typography.tall.md}
      padding="0 12px"
    >
      Or Register with
    </Text>
    <TextDividerLine />
  </TextDivider>
)

const FirstStep = ({ theme, form, setForm, nextStep }) => {
  const isEmpty = !form.fullName || !form.email || !form.phoneNumber
  return (
    <View>
      <Text
        color={theme.colors.grey3}
        weight={theme.typography.weight.medium}
        size={theme.typography.tall.lg}
        mb="14"
      >
        First, fill in your personal details
      </Text>
      <Label>Full Name</Label>
      <Input
        value={form.fullName}
        placeholder="Brian Tracy"
        onChangeText={fullName => setForm({ ...form, fullName })}
      />
      <Label>Email</Label>
      <Input
        value={form.email}
        placeholder="briantracy@mail.com"
        onChangeText={email => setForm({ ...form, email })}
      />
      <Label>Phone Number</Label>
      <Input
        value={form.phoneNumber}
        placeholder="081xxxxxxxxxxxxx"
        onChangeText={phoneNumber => setForm({ ...form, phoneNumber })}
      />
      <Button
        title="Next"
        backgroundColor={theme.colors.black}
        rippleColor={theme.colors.grey5}
        onPress={nextStep}
        disabled={isEmpty}
      />

      <FormDivider theme={theme} />

      <Button
        title="Google"
        stroke
        strokeColor={theme.colors.white2}
        titleColor={theme.colors.black}
        backgroundColor={theme.colors.white1}
        icon={<IconGoogle />}
      />
    </View>
  )
}

const SecondStep = ({ theme, form, setForm, nextStep }) => {
  const isEmpty =
    !form.province || !form.city || !form.streetName || !form.zipCode
  return (
    <View>
      <Text
        color={theme.colors.grey3}
        weight={theme.typography.weight.medium}
        size={theme.typography.tall.lg}
        mb="14"
      >
        Next, fill in your address details
      </Text>
      <Label>Province</Label>
      <Input
        value={form.province}
        placeholder="DKI Jakarta"
        onChangeText={province => setForm({ ...form, province })}
      />
      <Label>City</Label>
      <Input
        value={form.city}
        placeholder="Jakarta Pusat"
        onChangeText={city => setForm({ ...form, city })}
      />
      <Label>Street Name</Label>
      <Input
        value={form.streetName}
        placeholder="Jln. Merdeka Barat No.13"
        onChangeText={streetName => setForm({ ...form, streetName })}
      />
      <Label>Zip Code</Label>
      <Input
        value={form.zipCode}
        placeholder="123456"
        onChangeText={zipCode => setForm({ ...form, zipCode })}
      />
      <Button
        title="Next"
        backgroundColor={theme.colors.black}
        rippleColor={theme.colors.grey5}
        onPress={nextStep}
        disabled={isEmpty}
      />
    </View>
  )
}

const FinalStep = ({ theme, form, setForm }) => {
  return (
    <View>
      <Text
        color={theme.colors.grey3}
        weight={theme.typography.weight.medium}
        size={theme.typography.tall.lg}
        mb="14"
      >
        Finally, fill in your password
      </Text>
      <Label>Password</Label>
      <Input
        value={form.password}
        placeholder="•••••••••"
        onChangeText={password => setForm({ ...form, password })}
        secureTextEntry
      />
      <Label>Confirm Password</Label>
      <Input
        value={form.confirmPassword}
        placeholder="•••••••••"
        onChangeText={confirmPassword => setForm({ ...form, confirmPassword })}
        secureTextEntry
      />
    </View>
  )
}

const FooterContainer = styled.View`
  margin-top: 15px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: baseline;
`

const Footer = ({ navigation, theme }) => (
  <FooterContainer>
    <Text
      color={theme.colors.grey5}
      weight={theme.typography.weight.medium}
      size={theme.typography.tall.lg}
      mr="10"
    >
      Already have an Account?
    </Text>
    <TouchableOpacity onPress={() => navigation.navigate(routes.loginRoute)}>
      <Text
        color={theme.colors.secondary}
        weight={theme.typography.weight.semiBold}
        size={theme.typography.tall.lg}
      >
        Sign In
      </Text>
    </TouchableOpacity>
  </FooterContainer>
)

export const RegisterForm = ({ navigation }) => {
  const theme = useTheme()
  const { registerUser, error } = useAuthStore()
  const [loading, setLoading] = useState(false)
  const [step, setStep] = useState(0)
  const [form, setForm] = useState({
    fullName: '',
    email: '',
    phoneNumber: '',
    province: '',
    city: '',
    streetName: '',
    zipCode: '',
    password: '',
    confirmPassword: '',
  })

  const nextStep = () => setStep(step + 1)

  async function submit() {
    setLoading(true)
    await registerUser(form)
    setLoading(false)
  }

  switch (step) {
    case 0:
      return (
        <>
          <FirstStep
            theme={theme}
            form={form}
            setForm={setForm}
            nextStep={nextStep}
          />
          <Footer navigation={navigation} theme={theme} />
        </>
      )
    case 1:
      return (
        <>
          <SecondStep
            theme={theme}
            form={form}
            setForm={setForm}
            nextStep={nextStep}
          />
          <Footer navigation={navigation} theme={theme} />
        </>
      )
    case 2:
      const isEmpty = !form.password || !form.confirmPassword
      const isPasswordDoesNotMatch = form.password !== form.confirmPassword
      return (
        <>
          <FinalStep theme={theme} form={form} setForm={setForm} />
          <Button
            title="Finish Up"
            onPress={submit}
            disabled={isEmpty || isPasswordDoesNotMatch}
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
          <Footer navigation={navigation} theme={theme} />
        </>
      )
  }
}

export default RegisterForm
