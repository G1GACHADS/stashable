import { Dimensions } from 'react-native'
import styled, { useTheme } from 'styled-components/native'

import IconCamera from '../../../components/icons/icon-camera'
import BaseText from '../../../components/base-text'

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
      <BaseText semiBold tall lg mb={10}>
        Upload Your Items
      </BaseText>
      <ImageFileZone>
        <IconCamera fill={theme.colors.grey3} />
      </ImageFileZone>
      <BaseText regular tall sm mt={10} mb={20}>
        *max size up to 10 MB
      </BaseText>
    </>
  )
}

export default ItemUploadZone
