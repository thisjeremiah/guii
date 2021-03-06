import * as React from 'react'
import { View } from 'react-primitives'
import styled from 'styled-components'
import * as ss from 'styled-system'
import { ViewProps } from '../utils'

export interface BoxProps
  extends ss.WidthProps,
    ss.SpaceProps,
    ss.FontSizeProps,
    ss.ColorProps,
    ss.FlexProps,
    ss.OrderProps,
    ss.AlignSelfProps,
    ViewProps {}

export const Box = styled<BoxProps>(View as any)`
  ${ss.width};
  ${ss.space};
  ${ss.fontSize};
  ${ss.color};
  ${ss.flex};
  ${ss.order};
  ${ss.alignSelf};
  /* box-sizing: border-box; */
`

Box.displayName = 'Box'

export interface FlexProps
  extends ss.FlexWrapProps,
    ss.FlexDirectionProps,
    ss.AlignItemsProps,
    ss.JustifyContentProps,
    BoxProps {}

export const Flex = styled(Box as any)`
  ${ss.flexWrap};
  ${ss.flexDirection};
  ${ss.alignItems};
  ${ss.justifyContent};
  display: flex;
` as React.ComponentClass<FlexProps>

Flex.displayName = 'Flex'
