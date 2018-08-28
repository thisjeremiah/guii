import { View } from 'react-primitives'
import styled from 'styled-components'
import ss from 'styled-system'
import { ViewProps } from '../utils'

export interface PositionProps
  extends ss.WidthProps,
    ss.SpaceProps,
    ss.FontSizeProps,
    ss.ColorProps,
    ss.FlexProps,
    ss.OrderProps,
    ss.AlignSelfProps,
    ViewProps {}

export const Position = styled<PositionProps>(View as any)`
  ${ss.width};
  ${ss.fontSize};
  ${ss.color};
  ${ss.flex};
  ${ss.order};
  ${ss.alignSelf};
`

Position.displayName = 'Position'

export const Relative = styled(Position)`
  position: relative;
`

Relative.displayName = 'Relative'

export const Absolute = styled(Position)`
  position: absolute;
`

Absolute.displayName = 'Absolute'

export const Fixed = styled(Position)`
  position: fixed;
`

Fixed.displayName = 'Fixed'

export const Sticky = styled(Position)`
  position: sticky;
`

Sticky.displayName = 'Sticky'
