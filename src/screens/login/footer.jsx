import { TouchableOpacity } from 'react-native'
import styled, { useTheme } from 'styled-components/native'

import Text from '../../components/text'

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
      <Text
        color={colors.grey5}
        weight={typography.weight.medium}
        size={typography.tall.lg}
        mr="10"
      >
        Don't have an account yet?
      </Text>
      <TouchableOpacity
        onPress={() => navigation.navigate(routes.registerRoute)}
      >
        <Text
          color={colors.secondary}
          weight={typography.weight.semiBold}
          size={typography.tall.lg}
        >
          Register Now
        </Text>
      </TouchableOpacity>
    </FooterContainer>
  )
}

export default Footer
