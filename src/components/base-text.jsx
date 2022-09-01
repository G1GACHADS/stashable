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
  }
  if (props.semiBold) {
    weight = theme.typography.weight.semiBold
  }
  if (props.medium) {
    weight = theme.typography.weight.medium
  }
  if (props.regular) {
    weight = theme.typography.weight.regular
  }

  if (props.tall) {
    if (props.xs) {
      size = theme.typography.tall.xs
    }
    if (props.sm) {
      size = theme.typography.tall.sm
    }
    if (props.md) {
      size = theme.typography.tall.md
    }
    if (props.lg) {
      size = theme.typography.tall.lg
    }
    if (props.xl) {
      size = theme.typography.tall.xl
    }
  }

  if (props.grande) {
    if (props.xs) {
      size = theme.typography.grande.xs
    }
    if (props.sm) {
      size = theme.typography.grande.sm
    }
    if (props.md) {
      size = theme.typography.grande.md
    }
    if (props.lg) {
      size = theme.typography.grande.lg
    }
    if (props.xl) {
      size = theme.typography.grande.xl
    }
  }

  if (props.venti) {
    if (props.xs) {
      size = theme.typography.venti.xs
    }
    if (props.sm) {
      size = theme.typography.venti.sm
    }
    if (props.md) {
      size = theme.typography.venti.md
    }
    if (props.lg) {
      size = theme.typography.venti.lg
    }
    if (props.xl) {
      size = theme.typography.venti.xl
    }
  }

  return (
    <CoreBaseText {...{ ...props, weight, color, size }}>
      {props.children}
    </CoreBaseText>
  )
}

export default BaseText
