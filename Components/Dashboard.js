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

export default function Dashboard() {
  return (
    <View style={styles.container}>
      <IconButton
        icon='view-dashboard-variant'
        color={Colors.black500}
        size={60}
        onPress={() => console.log('Pressed')}
      />
      <Text>Dashboard</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e0d8c3',
    alignItems: 'center',
    justifyContent: 'center'
  }
})
