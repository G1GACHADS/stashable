import styled, { useTheme } from 'styled-components/native'
import {
  Image,
  ScrollView,
  StatusBar,
  TouchableOpacity,
  View,
} from 'react-native'
import Text from '../../components/text'

import IconChemical from '../../components/icons/icon-chemical'
import IconElectric from '../../components/icons/icon-electric'
import IconFragile from '../../components/icons/icon-fragile'
import IconHeavyMaterial from '../../components/icons/icon-heavymaterial'

const DetailContainer = styled.View`
  margin-top: 15px;
  align-items: baseline;
`

const CategoryContainer = styled.View`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`

const CategoryIcon = styled.View`
  padding: 5px 8px;
  border: 1px solid black;
  border-radius: 5px;
`

export function Category({ navigation }) {
  const theme = useTheme()
  return (
    <>
      <Container>
        
      </Container>
    </>
  )
}

export default Category
