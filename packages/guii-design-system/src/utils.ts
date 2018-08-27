import * as React from 'react'

export type ExtractProps<T> = T extends new (props: infer P) => any
  ? P
  : (T extends (props: infer P & { children?: React.ReactNode }) => any
      ? P
      : any)
