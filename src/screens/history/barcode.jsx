import { Image, StatusBar } from 'react-native'
import Container from '../../components/container'

export function BarcodeScreen({ navigation }) {
  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />
      <Container>
        <Image
          source={require('../../assets/images/barcode.png')}
          style={{
            width: null,
            height: 400,
          }}
        />
      </Container>
    </>
  )
}

export default BarcodeScreen
