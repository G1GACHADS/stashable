import { ScrollView, StatusBar } from 'react-native'
import styled, { useTheme } from 'styled-components/native'

import Button from '../../components/button'
import Container from '../../components/container'
import IconGoogle from '../../components/icons/icon-google'
import Text from '../../components/text'

import Footer from './footer'
import { SignInForm } from './form'

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
      Or Sign In With
    </Text>
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
          <Text
            color={theme.colors.black}
            weight={theme.typography.weight.semiBold}
            size={theme.typography.venti.md}
            mb="15"
          >
            Let's Sign You In
          </Text>
          <Text
            color={theme.colors.grey3}
            weight={theme.typography.weight.medium}
            size={theme.typography.tall.lg}
            mb="14"
          >
            Hello, welcome back to stashable.
          </Text>
          <SignInForm navigation={navigation} />
          <FormDivider theme={theme} />

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
