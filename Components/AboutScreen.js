import * as React from 'react'
import { Button, View, Text, StyleSheet } from 'react-native'

export default function AboutScreen() {
  return (
    <View style={styles.container}>
      <Text>Home</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff0',
    alignItems: 'center',
    justifyContent: 'center'
  }
})