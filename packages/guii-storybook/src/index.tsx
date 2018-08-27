import * as React from 'react'

import { Flex, Box } from 'guii-design-system'
import { Text } from 'react-primitives'

import { storiesOf } from '@storybook/react'

storiesOf('View', module).add('View', () => {
  return (
    <Flex bg="green" flexWrap="wrap">
      <Box bg="red" p={3} width={1}>
        <Text>Apples</Text>
      </Box>
      <Box bg="yellow" p={3} width={1}>
        <Text>Bananas</Text>
      </Box>
    </Flex>
  )
})
