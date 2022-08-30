import { TouchableOpacity, View } from 'react-native'
import styled, { useTheme } from 'styled-components/native'

import Container from '../../components/container'
import Text from '../../components/text'
import routes from '../../constants/routes'

import IconFragile from '../../components/icons/icon-fragile'
import IconElectric from '../../components/icons/icon-electric'
import IconHeavyMaterial from '../../components/icons/icon-heavymaterial'
import IconChemical from '../../components/icons/icon-chemical'

const DetailContainer = styled.View`
  margin-top: 15px;
  align-items: baseline;
`
const CategoryContainer = styled.View`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 5px;
  align-items: baseline;
`
const CategoryIcon = styled.View`
  padding: 5px 8px;
  border: 1px solid black;
  border-radius: 5px;
`


export function Details({ navigation }) {
const theme = useTheme()
  return (
    <>
        <DetailContainer>
          <Text
            color={theme.colors.black}
            weight={theme.typography.weight.semiBold}
            size={theme.typography.tall}
            mb="5"
          >
            Supports
          </Text>
          <CategoryContainer>
            <CategoryIcon>
                <IconFragile/>
            </CategoryIcon>
            <CategoryIcon>
                <IconElectric/>
            </CategoryIcon>
            <CategoryIcon>
                <IconHeavyMaterial/>
            </CategoryIcon>
            <CategoryIcon>
                <IconChemical/>
            </CategoryIcon>
          </CategoryContainer>
          </DetailContainer>
          <DetailContainer>
          <Text
            color={theme.colors.black}
            weight={theme.typography.weight.semiBold}
            size={theme.typography.tall}
            mb="5"
          >
            Description
          </Text>
          <Text
            color={theme.colors.grey3}
            weight={theme.typography.weight.regular}
            size={theme.typography.tall}
            mb="5"
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </Text>
          </DetailContainer>
    </>
  )
}

export default Details