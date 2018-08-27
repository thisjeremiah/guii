import { View } from 'react-primitives'
import styled from 'styled-components'
import {
  color,
  ColorProps,
  space,
  SpaceProps,
  width,
  WidthProps,
} from 'styled-system'
import { ExtractProps } from '../utils'

type ViewProps = ExtractProps<typeof View>
export interface BoxProps
  extends ColorProps,
    SpaceProps,
    WidthProps,
    ViewProps {}

export const Box = styled<BoxProps>(View)`
  ${color};
  ${space};
  ${width};
`
