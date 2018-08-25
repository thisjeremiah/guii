import * as React from 'react'

import { a } from 'guii-design-system'

import { storiesOf } from '@storybook/react'
// import * as knobs from '@storybook/addon-knobs'

storiesOf('View', module).add('View', () => {
  return <div>{a() + 'ok'}</div>
})
