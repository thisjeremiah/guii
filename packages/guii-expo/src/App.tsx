import * as React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { a } from 'guii-design-system'

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>{a()}</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
