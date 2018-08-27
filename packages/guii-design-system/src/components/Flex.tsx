import * as React from 'react'
import styled from 'styled-components'
import {
  flexWrap,
  FlexWrapProps,
  flexDirection,
  FlexDirectionProps,
  alignItems,
  AlignItemsProps,
  justifyContent,
  JustifyContentProps,
} from 'styled-system'
import { Box, BoxProps } from './Box'

export interface FlexProps
  extends FlexWrapProps,
    FlexDirectionProps,
    AlignItemsProps,
    JustifyContentProps,
    BoxProps {}

export const Flex = styled(Box)`
  ${flexWrap};
  ${flexDirection};
  ${alignItems};
  ${justifyContent};
  display: flex;
` as React.ComponentClass<FlexProps>
