import { Image } from 'react-primitives'
import styled from 'styled-components'
import * as ss from 'styled-system'

import { ImageProps } from '../utils'

export interface AvatarProps
  extends ss.SpaceProps,
    ss.ColorProps,
    ss.SizeProps,
    ImageProps {}

export const Avatar = styled<AvatarProps>(Image as any)`
  size: 48px;
  border-radius: 99999px;
  display: inline-block;
  ${ss.space};
  ${ss.color};
  ${ss.size};
`

Avatar.displayName = 'Avatar'
