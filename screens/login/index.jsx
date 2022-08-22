import { StatusBar, ScrollView, TouchableOpacity } from 'react-native'
import { useTheme } from 'styled-components'
import styled from 'styled-components/native'

import Button from '../../components/Button'
import Container from '../../components/Container'
import IconGoogle from '../../components/icons/IconGoogle'
import routes from '../../constants/routes'
import Footer from './footer'
import { SignInForm } from './form'

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

          <Footer navigation={navigation} />
        </Container>
      </ScrollView>
    </>
  )
}

export default LoginScreen
