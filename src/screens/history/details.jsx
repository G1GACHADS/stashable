import {
  ActivityIndicator,
  Alert,
  ScrollView,
  StatusBar,
  View,
} from 'react-native'
import styled, { useTheme } from 'styled-components/native'

import routes from '../../constants/routes'

import useRentalHistoryDetail from '../../shared/useRentalHistoryDetail'

import { useCallback } from 'react'
import api from '../../api'
import BaseText from '../../components/base-text'
import Button from '../../components/button'
import Container from '../../components/container'
import Status from '../../components/status'

const HistoryDetailImage = styled.Image`
  height: 400px;
`

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

const RentalDescription = ({ paid_annually, status, address }) => {
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

const CoreItemDetails = styled.View`
  display: flex;
  flex-direction: row;
  flex: 1;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: baseline;
  margin-bottom: 20px;
`

const ItemDetails = ({
  length,
  width,
  height,
  quantity,
  weight,
  description,
  warehouse,
}) => (
  <View>
    <BaseText semiBold tall xl>
      Item Details
    </BaseText>
    <CoreItemDetails>
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
    </CoreItemDetails>
    <BaseText semiBold tall xl>
      Description
    </BaseText>
    <BaseText color="grey3" regular tall md>
      {description}
    </BaseText>
  </View>
)

const RentalAction = ({ theme, rental, navigation }) => {
  const handleUpdateRentalStatus = useCallback(async (rentalID, newStatus) => {
    try {
      await api.patch(`/rent/${rentalID}/${newStatus}`, {})

      Alert.alert(
        'Payment Successful',
        'Your payment has been successfully processed',
        [
          {
            text: 'OK',
            onPress: () => navigation.navigate(routes.historyPageRoute),
          },
        ]
      )
    } catch (error) {
      Alert.alert('Payment Failed', 'Your payment has failed', [
        {
          text: 'OK',
          onPress: () => navigation.navigate(routes.historyPageRoute),
        },
      ])
    }
  }, [])

  return (
    <>
      {rental.attributes.status === 'paid' && (
        <>
          <Button
            backgroundColor={theme.colors.grey2}
            titleColor={theme.colors.black}
            mt={15}
            mb={15}
            stroke="1"
            strokeColor={theme.colors.black}
            borderColor={theme.colors.black}
            title="Direction"
            onPress={() => navigation.navigate(routes.historyDetailPageRoute)}
          />
          <Button
            title="Show Barcode"
            onPress={() => navigation.navigate(routes.barcodePageRoute)}
          />
        </>
      )}

      {rental.attributes.status === 'unpaid' && (
        <>
          <Button
            title="Pay"
            mt={15}
            mb={15}
            onPress={() =>
              handleUpdateRentalStatus(rental.attributes['id'], 'pay')
            }
          />
          <Button
            backgroundColor={theme.colors.grey2}
            titleColor={theme.colors.black}
            stroke="1"
            strokeColor={theme.colors.black}
            borderColor={theme.colors.black}
            title="Cancel"
            onPress={() =>
              handleUpdateRentalStatus(rental.attributes['id'], 'cancel')
            }
          />
        </>
      )}
    </>
  )
}

export function HistoryDetailScreen({ route, navigation }) {
  const theme = useTheme()

  const { rentalID } = route.params
  const { rental, isLoading } = useRentalHistoryDetail(rentalID)

  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />
      <ScrollView>
        <HistoryDetailImage source={{ uri: rental.attributes.image_urls[0] }} />
        <Container>
          {isLoading && <ActivityIndicator />}
          {!isLoading && (
            <>
              <HistoryDetailHeader
                name={rental.attributes.name}
                address={rental.relationships.address}
                warehouse={rental.relationships.warehouse}
              />
              <RentalDescription
                status={rental.attributes.status}
                paid_annually={rental.attributes.paid_annually}
                address={rental.relationships.address}
              />
              <ItemDetails
                length={rental.attributes.length}
                height={rental.attributes.height}
                width={rental.attributes.width}
                weight={rental.attributes.weight}
                quantity={rental.attributes.quantity}
                description={rental.attributes.description}
              />
              <RentalAction
                theme={theme}
                rental={rental}
                navigation={navigation}
              />
            </>
          )}
        </Container>
      </ScrollView>
    </>
  )
}

export default HistoryDetailScreen
