import { TouchableOpacity } from 'react-native'
import styled from 'styled-components/native'

import BaseText from '../../components/base-text'

import routes from '../../constants/routes'

const FooterContainer = styled.View`
  margin-top: 15px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: baseline;
`

export function Footer({ navigation }) {
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
