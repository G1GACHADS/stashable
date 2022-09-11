import { StatusBar, ScrollView, View, Image } from 'react-native'
import styled, { useTheme } from 'styled-components/native'
import BaseText from '../../components/base-text'
import Button from '../../components/button'
import Container from '../../components/container'
import Status from '../../components/status'
import routes from '../../constants/routes'
const ButtonContainer = styled.View`
  padding-vertical: 15px;
`

const sampleData = {
  attributes: {
    id: 1,
    user_id: 1,
    warehouse_id: 1,
    room_id: 2,
    category_id: 1,
    image_urls: [
      'https://res.cloudinary.com/swcq1ct1pve4adyd2m4n/image/upload/v1662652869/stashable/ZiucEntEEUGCTU.jpg.jpg',
      'https://res.cloudinary.com/swcq1ct1pve4adyd2m4n/image/upload/v1662652869/stashable/caFYefSvXdLlfN.jpg.jpg',
    ],
    name: 'Aqua Gelas Air 240 ML 12 dus isi 48',
    description:
      'Aqua Gelas Air Mineral (48 x 220ml)\n\nAir mineral berkualitas yang berasal dari sumber air pegunungan pilihan dan terlindungi. AQUA melindungi keseimbangan alami ekosistem sumber airnya sehingga kekayaan dan kealamian mineralnya terjaga.\n\nAQUA, kebaikan alam, kebaikan hidup.',
    weight: 5,
    width: 15,
    height: 30,
    length: 30,
    quantity: 12,
    paid_annually: true,
    type: 'self-service',
    status: 'unpaid',
    created_at: '2022-09-08T16:01:03Z',
    payment_due: '2023-09-08T16:01:03Z',
  },
  relationships: {
    warehouse: {
      id: 1,
      address_id: 2,
      name: 'Luntia Warehouse',
      image_url:
        'https://res.cloudinary.com/swcq1ct1pve4adyd2m4n/image/upload/v1662629437/stashable/photo-1565610222536-ef125c59da2e_x2wc6q.jpg',
      description:
        'Luntia Warehouse merupakan perusahaan yang bergerak di pergudangan dengan pengalaman selama 10 tahun. Berada di tempat yang strategis yaitu terletak di daerah Pluit, Jakarta Utara. Terdapat fasilitas yang memadai, seperti ruang tunggu yang dilengkapi ac, security/penjaga dan area bebas banjir',
      base_price: 1000000,
      email: 'luntia@warehouse.com',
      phone_number: '089845674564',
      rooms_count: 0,
      created_at: '2022-09-08T10:31:00Z',
    },
    address: {
      id: 2,
      province: 'Jakarta Utara',
      city: 'Pluit',
      street_name: 'Jalan Raden Saleh RT/RW: 01/05 No. 14',
      zip_code: 12345,
    },
    categories: ['Fragile', 'Electric', 'Heavy Materials'],
    room: {
      id: 2,
      warehouse_id: 1,
      image_url:
        'https://res.cloudinary.com/swcq1ct1pve4adyd2m4n/image/upload/v1662627291/stashable/205120-1600x1200-storageunit_qmf6ix.jpg',
      name: 'Medium Room',
      width: 1.5,
      height: 3,
      length: 4.5,
      price: 2000000,
    },
  },
}

const HistoryDetailHeader = ({ warehouse, name, address }) => (
  <View>
    <BaseText semiBold tall xl>
      {warehouse['name']}
    </BaseText>
    <BaseText mb="20" color="grey3" regular tall md>
      {name}
    </BaseText>
    <BaseText semiBold tall xl>
      Warehouse Address
    </BaseText>
    <BaseText color="grey3" regular tall md>
      {address['street_name']}
    </BaseText>
    <BaseText mb="20" color="grey3" regular tall md>
      {`${address['city']}, ${address['province']}`}
    </BaseText>
  </View>
)

const HistoryDetailStatus = ({ paid_annually, status, address }) => {
  return (
    <View>
      <BaseText semiBold tall xl>
        Status
      </BaseText>
      <View style={{ marginBottom: 20 }}>
        <Status
          paid={status === 'paid'}
          returned={status === 'returned'}
          unpaid={status === 'unpaid'}
          cancelled={status === 'cancelled'}
        />
      </View>
      <BaseText semiBold tall xl>
        Rental Term
      </BaseText>
      <BaseText mb="20" color="grey3" regular tall md>
        {address['street_name']}
      </BaseText>
      <BaseText semiBold tall xl>
        Rental Plan
      </BaseText>
      <BaseText mb="20" color="grey3" regular tall md>
        {{ paid_annually } ? 'Yearly Plan' : 'Montly Plan'}
      </BaseText>
    </View>
  )
}
const HistoryDetailDescription = styled.View`
  display: flex;
  flex-direction: row;
  flex: 1;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: baseline;
  margin-bottom: 20px;
`
const HistoryDetail = ({
  length,
  width,
  height,
  quantity,
  weight,
  warehouse,
}) => (
  <View>
    <BaseText semiBold tall xl>
      Item Details
    </BaseText>
    <HistoryDetailDescription>
      <BaseText color="grey3" regular tall md>
        Length: {length} cm
      </BaseText>
      <BaseText color="grey3" regular tall md>
        Width: {width} cm
      </BaseText>
      <BaseText color="grey3" regular tall md>
        Quantity: {quantity} cm
      </BaseText>
      <BaseText color="grey3" regular tall md>
        Height: {height} cm
      </BaseText>
      <BaseText color="grey3" regular tall md>
        Weight: {weight} cm
      </BaseText>
    </HistoryDetailDescription>
    <BaseText semiBold tall xl>
      Description
    </BaseText>
    <BaseText color="grey3" regular tall md>
      {warehouse['description']}
    </BaseText>
  </View>
)
export function HistoryDetailScreen({ navigation }) {
  const theme = useTheme()
  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />
      <ScrollView>
        <Image
          source={require('../../assets/images/getting-started-banner.png')}
          style={{
            width: null,
            height: 400,
          }}
        />
        <Container>
          <HistoryDetailHeader
            name={sampleData.attributes.name}
            address={sampleData.relationships.address}
            warehouse={sampleData.relationships.warehouse}
          />
          <HistoryDetailStatus
            status={sampleData.attributes.status}
            paid_annually={sampleData.attributes.paid_annually}
            address={sampleData.relationships.address}
          />
          <HistoryDetail
            length={sampleData.attributes.length}
            height={sampleData.attributes.height}
            width={sampleData.attributes.width}
            weight={sampleData.attributes.weight}
            quantity={sampleData.attributes.quantity}
            warehouse={sampleData.relationships.warehouse}
          />
          {sampleData.attributes.status === 'paid' && (
            <>
              <ButtonContainer>
                <Button
                  backgroundColor={theme.colors.grey2}
                  titleColor={theme.colors.black}
                  stroke="1"
                  strokeColor={theme.colors.black}
                  borderColor={theme.colors.black}
                  sm
                  title="Direction"
                  onPress={() =>
                    // change navigation
                    navigation.navigate(routes.historyDetailPageRoute)
                  }
                />
              </ButtonContainer>
              <ButtonContainer>
                <Button
                  sm
                  title="Show Barcode"
                  onPress={() =>
                    // change navigation
                    navigation.navigate(routes.barcodePageRoute)
                  }
                />
              </ButtonContainer>
            </>
          )}

          {sampleData.attributes.status === 'unpaid' && (
            <>
              <ButtonContainer>
                <Button
                  sm
                  title="Pay"
                  onPress={() =>
                    // change navigation
                    navigation.navigate(routes.historyDetailPageRoute)
                  }
                />
              </ButtonContainer>
              <ButtonContainer>
                <Button
                  backgroundColor={theme.colors.grey2}
                  titleColor={theme.colors.black}
                  stroke="1"
                  strokeColor={theme.colors.black}
                  borderColor={theme.colors.black}
                  sm
                  title="Cancel"
                  onPress={() =>
                    // change navigation
                    navigation.navigate(routes.historyDetailPageRoute)
                  }
                />
              </ButtonContainer>
            </>
          )}
          {/* } */}
        </Container>
      </ScrollView>
    </>
  )
}

export default HistoryDetailScreen
