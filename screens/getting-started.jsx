import { ScrollView, Image, StatusBar, View } from 'react-native'
import styled, { useTheme } from 'styled-components/native'
import Button from '../components/Button'
import Container from '../components/Container'
import routes from '../constants/routes'

const Title = styled.Text`
  color: ${({ theme }) => theme.colors.black};
  font-family: ${({ theme }) => theme.typography.family.semiBold};
  font-size: ${({ theme }) => theme.typography.venti.md};
  margin-bottom: 14px;
`

const Description = styled.Text`
  color: ${({ theme }) => theme.colors.grey3};
  font-family: ${({ theme }) => theme.typography.family.regular};
  font-size: ${({ theme }) => theme.typography.tall.sm};
  margin-bottom: 20px;
`

export function GettingStartedScreen({ navigation }) {
  const theme = useTheme()
  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />
      <ScrollView>
        <Image
          source={require('../assets/images/geting-started-banner.png')}
          style={{
            width: null,
            height: 400,
          }}
        />
        <Container>
          <Title>Find Storage Room At Stashable</Title>
          <Description>
            Stashable provides a platform for users to reserve a place for them
            to store their goods in the warehouse
          </Description>

          <View style={{ alignItems: 'flex-end' }}>
            <Button
              sm
              title="Get Started"
              onPress={() => navigation.navigate(routes.loginRoute)}
            />
          </View>
        </Container>
      </ScrollView>
    </>
  )
}

export default GettingStartedScreen
