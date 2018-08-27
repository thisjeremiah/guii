import * as React from 'react'

import { Box } from 'guii-design-system'
import { Text } from 'react-primitives'

import { storiesOf } from '@storybook/react'
// import * as knobs from '@storybook/addon-knobs'

storiesOf('View', module).add('View', () => {
  return (
    <Box bg="green" p={3} width={250}>
      <Text style={{ color: 'white' }}>OK GOODNIGHT</Text>
    </Box>
  )
})
