import * as React from 'react'
import { View, Text, StyleSheet, Pressable } from 'react-native'
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
        icon='adjust'
        color='#333333'
        size={60}
        onPress={() => console.log('Pressed')}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e0d8c3',
    alignItems: 'center',
    justifyContent: 'center'
    // paddingTop: StatusBar.currentHeight
  },
  TextFont: {
    fontSize: 60,
    fontFamily: 'sans-serif'
  }
})
