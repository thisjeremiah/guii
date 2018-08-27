import * as React from 'react'

import { Flex, Box } from 'guii-design-system'
import { Text } from 'react-primitives'

import { storiesOf } from '@storybook/react'

storiesOf('View', module).add('View', () => {
  return (
    <Flex bg="green" flexWrap="wrap">
      <Box bg="red" p={3} width={[1, 1 / 2]}>
        <Text>Consistent</Text>
      </Box>
      <Box bg="yellow" p={3} width={[1, 1 / 2]}>
        <Text>Flexible</Text>
      </Box>
    </Flex>
  )
})
