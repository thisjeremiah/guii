import { Touchable } from 'react-primitives'
import styled from 'styled-components'
import * as ss from 'styled-system'
import { TouchableProps } from '../utils'

export interface ButtonProps
  extends ss.FontSizeProps,
    ss.FontWeightProps,
    ss.LineHeightProps,
    ss.SpaceProps,
    ss.ColorProps,
    ss.SizeProps,
    ss.BorderRadiusProps,
    ss.BorderProps,
    TouchableProps {}

export const Button = styled<ButtonProps>(Touchable as any)`
  ${ss.fontSize};
  ${ss.fontWeight};
  ${ss.lineHeight};
  ${ss.space};
  ${ss.color};
  ${ss.borderRadius};
  ${ss.border};
  ${ss.size};

  font-family: inherit;
  webkit-font-smoothing: antialiased;
  display: inline-block;
  vertical-align: middle;
  text-align: center;
  text-decoration: none;
  appearance: none;
  &:disabled {
    opacity: 1/4;
  }
  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px ${props => props.theme.colors[props.bg as string]};
  }
`

Button.defaultProps = {
  fontSize: 1,
  fontWeight: 'bold',
  lineHeight: 16 / 14,
  m: 0,
  px: 3,
  py: 2,
  color: 'white',
  bg: 'blue',
  borderRadius: 2,
  border: 0,
}

Button.displayName = 'Button'
