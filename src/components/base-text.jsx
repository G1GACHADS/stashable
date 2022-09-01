import styled, { css } from 'styled-components/native'
import { useTheme } from 'styled-components/native'

export const CoreBaseText = styled.Text`
  color: ${({ color }) => color};
  font-family: ${({ weight }) => weight};
  font-size: ${({ size }) => size};

  ${props => props.capitalize && `text-transform: capitalize`}
  ${props => props.padding && `padding: ${props.padding.join(' ')};`}
  ${props => props.margin && `margin: ${props.margin.join(' ')}`}
  ${props => props.textAlign && `text-align: ${props.textAlign}`}

  ${props =>
    props.mb &&
    css`
      margin-bottom: ${props.mb}px;
    `};
  ${props =>
    props.mt &&
    css`
      margin-top: ${props.mt}px;
    `};
  ${props =>
    props.ml &&
    css`
      margin-left: ${props.ml}px;
    `};
  ${props =>
    props.mr &&
    css`
      margin-right: ${props.mr}px;
    `};

  ${props =>
    props.pb &&
    css`
      padding-bottom: ${props.pb}px;
    `};
  ${props =>
    props.pt &&
    css`
      padding-top: ${props.pt}px;
    `};
  ${props =>
    props.pl &&
    css`
      padding-left: ${props.pl}px;
    `};
  ${props =>
    props.pr &&
    css`
      padding-right: ${props.pr}px;
    `};
`

export const BaseText = props => {
  const theme = useTheme()

  let color = theme.colors[props.color] || theme.colors.black
  let weight = theme.typography.weight.regular
  let size = theme.typography.tall.md

  if (props.bold) {
    weight = theme.typography.weight.bold
  } else if (props.semiBold) {
    weight = theme.typography.weight.semiBold
  } else if (props.medium) {
    weight = theme.typography.weight.medium
  } else if (props.regular) {
    weight = theme.typography.weight.regular
  }

  if (props.tall) {
    size = theme.typography.tall
  } else if (props.grande) {
    size = theme.typography.grande
  } else if (props.venti) {
    size = theme.typography.venti
  }

  if (props.xs) {
    size = size.xs
  } else if (props.sm) {
    size = size.sm
  } else if (props.md) {
    size = size.md
  } else if (props.lg) {
    size = size.lg
  } else if (props.xl) {
    size = size.xl
  }

  return (
    <CoreBaseText {...{ ...props, weight, color, size }}>
      {props.children}
    </CoreBaseText>
  )
}

export default BaseText
