import { View } from 'react-primitives'
import styled from 'styled-components'
import {
  width,
  WidthProps,
  space,
  SpaceProps,
  fontSize,
  FontSizeProps,
  color,
  ColorProps,
  flex,
  FlexProps,
  order,
  OrderProps,
  alignSelf,
  AlignSelfProps,
} from 'styled-system'
import { ExtractProps } from '../utils'

type ViewProps = ExtractProps<typeof View>
export interface BoxProps
  extends WidthProps,
    SpaceProps,
    FontSizeProps,
    ColorProps,
    FlexProps,
    OrderProps,
    AlignSelfProps,
    ViewProps {}

export const Box = styled<BoxProps>(View)`
  ${width};
  ${space};
  ${fontSize};
  ${color};
  ${flex};
  ${order};
  ${alignSelf};
  box-sizing: border-box;
`
