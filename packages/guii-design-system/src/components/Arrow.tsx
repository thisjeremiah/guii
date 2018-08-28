import { View } from 'react-primitives'
import styled from 'styled-components'
import ss from 'styled-system'
import { ExtractProps } from '../utils'

type ViewProps = ExtractProps<typeof View>
export interface ArrowProps
  extends ss.WidthProps,
    ss.SpaceProps,
    ss.ColorProps,
    ViewProps {
  direction: 'up' | 'down'
}

export const Arrow = styled<ArrowProps>(View as any)`
  ${ss.width};
  ${ss.space};
  ${ss.color};

  display: inline-block;
  width: 0;
  height: 0;
  vertical-align: middle'
  border-right: .3125em solid transparent;
  border-left: .3125em solid transparent;

  ${p => p.direction === 'down' && `border-top: 0.4375em solid;`}
  ${p => p.direction === 'up' && `border-bottom: 0.4375em solid;`}
`

Arrow.displayName = 'Arrow'