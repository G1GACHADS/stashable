import { Dimensions } from 'react-native'
import styled, { useTheme } from 'styled-components/native'

import IconCamera from '../../../components/icons/icon-camera'
import Text from '../../../components/text'

const ImageFileZone = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  width: ${Dimensions.get('window').width - 30}px;
  height: 200px;
  background-color: ${({ theme }) => theme.colors.white2};
  border-width: 2px;
  border-style: dashed;
  border-color: ${({ theme }) => theme.colors.grey3};
  border-radius: 10px;
`

export const ItemUploadZone = () => {
  const theme = useTheme()

  return (
    <>
      <Text
        color={theme.colors.black}
        weight={theme.typography.weight.semiBold}
        size={theme.typography.tall.lg}
        mb="10"
      >
        Upload Your Items
      </Text>
      <ImageFileZone>
        <IconCamera fill={theme.colors.grey3} />
      </ImageFileZone>
      <Text
        color={theme.colors.black}
        weight={theme.typography.weight.regular}
        size={theme.typography.tall.sm}
        mt="10"
        mb="20"
      >
        *max size up to 10 MB
      </Text>
    </>
  )
}

export default ItemUploadZone
