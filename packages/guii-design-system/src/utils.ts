import * as React from 'react'
import { View, Text, Image, Touchable } from 'react-primitives'

export type ExtractProps<T> = T extends new (props: infer P) => any
  ? P
  : (T extends (props: infer P & { children?: React.ReactNode }) => any
      ? P
      : any)

export type ViewProps = ExtractProps<typeof View>
export type TextProps = ExtractProps<typeof Text>
export type ImageProps = ExtractProps<typeof Image>
export type TouchableProps = ExtractProps<typeof Touchable>
