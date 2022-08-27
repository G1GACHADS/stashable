import PropTypes from 'prop-types'
import { Dimensions, View } from 'react-native'
import styled, { css, useTheme } from 'styled-components/native'

const ButtonContainer = styled.Pressable`
  ${props => {
    if (props.sm) {
      return css`
        width: 140px;
      `
    }

    return css`
      width: ${Dimensions.get('window').width - 30}px;
    `
  }}

  ${props =>
    props.stroke &&
    css`
      border: 2px solid ${props.strokeColor};
    `}

  height: 56px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: ${({ backgroundColor, theme }) =>
    backgroundColor ?? theme.colors.primary};
  border-radius: 5px;
`

const Title = styled.Text`
  color: ${({ titleColor, theme }) => titleColor ?? theme.colors.white1};
  font-family: ${({ theme }) => theme.typography.family.semiBold};
  font-size: ${({ theme }) => theme.typography.tall.lg};
`

export const Button = ({
  sm,
  stroke,
  strokeColor,
  title,
  onPress,
  icon,
  backgroundColor,
  titleColor,
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
        color: theme.colors.primaryDark,
      }}
    >
      {icon && <View style={{ marginRight: 10, marginBottom: 6 }}>{icon}</View>}
      <Title titleColor={titleColor} icon={icon}>
        {title}
      </Title>
    </ButtonContainer>
  )
}

Button.propTypes = {
  sm: PropTypes.bool,
  icon: PropTypes.element,
  onPress: PropTypes.func,
  backgroundColor: PropTypes.string,
  stroke: PropTypes.bool,
  strokeColor: PropTypes.string,
  title: PropTypes.string,
  titleColor: PropTypes.string,
}

export default Button
