import { Dimensions, Pressable } from 'react-native'
import * as ImagePicker from 'expo-image-picker'
import styled, { css, useTheme } from 'styled-components/native'

import IconCamera from '../../../components/icons/icon-camera'
import IconPlus from '../../../components/icons/icon-plus'
import IconX from '../../../components/icons/icon-x'

import BaseText from '../../../components/base-text'

const UploadZoneThumbnail = styled.ImageBackground`
  justify-content: center;
  align-items: center;
  overflow: hidden;
  margin-bottom: 20px;
  width: ${Dimensions.get('window').width - 30}px;
  height: 200px;
  background-color: ${({ theme }) => theme.colors.white2};
  border-radius: 10px;
  ${props =>
    !props.hasImage &&
    css`
      border-width: 2px;
      border-style: dashed;
      border-color: ${({ theme }) => theme.colors.grey3};
    `}
`

const UploadZoneExtraContainer = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`

const UploadZoneExtra = styled.ImageBackground`
  flex: 1;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  width: 93px;
  height: 93px;
  margin-bottom: 20px;
  background-color: ${({ theme }) => theme.colors.white2};
  border-radius: 14px;
  ${props =>
    !props.hasImage &&
    css`
      border-width: 2px;
      border-style: dashed;
      border-color: ${({ theme }) => theme.colors.grey3};
    `}
`

const RemoveButton = styled.Pressable`
  position: absolute;
  flex: 1;
  align-items: center;
  justify-content: center;
  top: -5px;
  right: -10px;
  width: 30px;
  height: 30px;
  padding: 10px;
  background-color: ${({ theme }) => theme.colors.white1};
  border-width: 2px;
  border-color: ${({ theme }) => theme.colors.grey2};
  border-radius: 100px;
`

export const ItemUploadZone = ({ form, setForm }) => {
  const theme = useTheme()

  const addImage = async imageIndex => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      aspect: [4, 3],
      quality: 1,
      allowsMultipleSelection: true,
    }).catch(error => {
      console.log('ImagePicker Error: ', error)
    })

    if (result.cancelled) {
      console.log('User cancelled image picker')
      return
    }

    const newImages = [...form.images]
    newImages[imageIndex] = result.uri
    setForm({ ...form, images: newImages })
  }

  const removeImage = imageIndex => {
    const newImages = [...form.images]
    newImages[imageIndex] = null
    setForm({ ...form, images: newImages })
  }

  return (
    <>
      <BaseText semiBold tall lg mb={10}>
        Upload Your Items
      </BaseText>
      <Pressable onPress={() => addImage(0)}>
        <UploadZoneThumbnail
          hasImage={form.images[0] !== null}
          source={{
            uri: form.images[0],
          }}
        >
          <IconCamera
            fill={
              form.images[0] !== null ? theme.colors.white1 : theme.colors.grey3
            }
          />
          {form.images[0] !== null && (
            <BaseText color="white1" semiBold tall lg mt={10}>
              {form.images.length > 0 &&
                form.images.reduce((acc, cur) => {
                  if (cur !== null) {
                    return acc + 1
                  }
                  return acc
                }, 0)}{' '}
              / 4
            </BaseText>
          )}
          {form.images[0] !== null && (
            <RemoveButton onPress={() => removeImage(0)}>
              <IconX />
            </RemoveButton>
          )}
        </UploadZoneThumbnail>
      </Pressable>
      <UploadZoneExtraContainer>
        {[...Array(3)].map((_, imageIndex) => (
          <Pressable onPress={() => addImage(imageIndex + 1)} key={imageIndex}>
            <UploadZoneExtra
              hasImage={form.images[imageIndex + 1] !== null}
              source={{
                uri: form.images[imageIndex + 1],
              }}
            >
              {form.images[imageIndex + 1] === null && <IconPlus />}
            </UploadZoneExtra>
            {form.images[imageIndex + 1] !== null && (
              <RemoveButton onPress={() => removeImage(imageIndex + 1)}>
                <IconX />
              </RemoveButton>
            )}
          </Pressable>
        ))}
      </UploadZoneExtraContainer>
      <BaseText regular tall sm mt={10} mb={20}>
        *max up to 4 photos
      </BaseText>
    </>
  )
}

export default ItemUploadZone
