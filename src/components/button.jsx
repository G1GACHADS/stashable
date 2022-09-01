import { ActivityIndicator, Dimensions, View } from 'react-native'
import styled, { css, useTheme } from 'styled-components/native'

const ButtonContainer = styled.Pressable`
  min-width: ${props =>
    props.sm
      ? Dimensions.get('window').width * 0.4
      : Dimensions.get('window').width - 30}px;

  ${props =>
    props.stroke &&
    css`
      border: 2px solid ${props.strokeColor};
    `}

  height: 56px;
  flex: 1;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0 10px;
  background-color: ${props =>
    props.disabled
      ? props.theme.colors.grey1
      : props.backgroundColor ?? props.theme.colors.primary};
  border-radius: 5px;
`

const Title = styled.Text`
  color: ${({ titleColor, theme }) => titleColor ?? theme.colors.white1};
  font-family: ${({ theme }) => theme.typography.weight.semiBold};
  font-size: ${({ theme }) => theme.typography.tall.lg};
`

export const Button = ({
  sm,
  disabled,
  loading,
  loadingColor,
  title,
  titleColor,
  stroke,
  strokeColor,
  icon,
  backgroundColor,
  rippleColor,
  onPress,
}) => {
  const theme = useTheme()
  return (
    <ButtonContainer
      sm={sm}
      stroke={stroke}
      strokeColor={strokeColor}
      onPress={onPress}
      backgroundColor={backgroundColor}
      android_ripple={{
        color: rippleColor ?? theme.colors.primaryDark,
      }}
      disabled={disabled}
    >
      {loading ? (
        <ActivityIndicator size="large" color={theme.colors.white} />
      ) : (
        <>
          {icon && (
            <View style={{ marginRight: 10, marginBottom: 6 }}>{icon}</View>
          )}

          <Title titleColor={titleColor} icon={icon}>
            {title}
          </Title>
        </>
      )}
    </ButtonContainer>
  )
}

export default Button
