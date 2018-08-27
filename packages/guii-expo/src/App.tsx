import * as React from 'react'
import { Text } from 'react-native'
import { Box, Flex } from 'guii-design-system'

export default class App extends React.Component {
  render() {
    return (
      <Flex bg="green" flexWrap="wrap">
        <Box bg="red" p={3} width={[1, 1 / 2]}>
          <Text>ABC</Text>
        </Box>
        <Box bg="yellow" p={3} width={[1, 1 / 2]}>
          <Text>DEF</Text>
        </Box>
      </Flex>
    )
  }
}
