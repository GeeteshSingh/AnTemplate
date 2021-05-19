import * as React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import {
  Avatar,
  Button,
  Card,
  Title,
  Paragraph,
  IconButton,
  Colors
} from 'react-native-paper'



export default function AboutScreen() {
  return (
    <View style={styles.container}>
      <IconButton
        icon='home-variant-outline'
        color={Colors.red500}
        size={60}
        onPress={() => console.log('Pressed')}
      />
      <Text>hi</Text>
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
