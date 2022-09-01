import { TouchableOpacity } from 'react-native'
import styled, { useTheme } from 'styled-components/native'

import Text from '../../components/text'
import BaseText from '../../components/base-text'

import routes from '../../constants/routes'

const FooterContainer = styled.View`
  margin-top: 15px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: baseline;
`

const FooterText = styled.Text`
  margin-right: 10px;
  color: ${({ theme }) => theme.colors.grey5};
  font-family: ${({ theme }) => theme.typography.weight.medium};
  font-size: ${({ theme }) => theme.typography.tall.md};
`

export function Footer({ navigation }) {
  const { colors, typography } = useTheme()
  return (
    <FooterContainer>
      <BaseText color="grey5" medium tall lg mr={10}>
        Don't have an account yet?
      </BaseText>
      <TouchableOpacity
        onPress={() => navigation.navigate(routes.registerRoute)}
      >
        <BaseText color="secondary" semiBold tall lg>
          Register Now
        </BaseText>
      </TouchableOpacity>
    </FooterContainer>
  )
}

export default Footer
