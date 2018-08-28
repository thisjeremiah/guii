import { Image } from 'react-primitives'
import styled from 'styled-components'
import ss from 'styled-system'

import { ExtractProps } from '../utils'

type ImageProps = ExtractProps<typeof Image>
export interface AvatarProps
  extends ss.SpaceProps,
    ss.ColorProps,
    ss.SizeProps,
    ImageProps {}

export const Avatar = styled<AvatarProps>(Image)`
  size: 48px;
  border-radius: 99999px;
  display: inline-block;
  ${ss.space};
  ${ss.color};
  ${ss.size};
`

Avatar.displayName = 'Avatar'
