import * as React from 'react'
import { Button, View, Text, StyleSheet } from 'react-native'
import { createDrawerNavigator } from '@react-navigation/drawer'
import { NavigationContainer } from '@react-navigation/native'

//Components
import HomeScreen from './Components/HomeScreen'
import AboutScreen from './Components/AboutScreen'

// function HomeScreen() {
//   return (
//     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//       <Text>Home</Text>
//     </View>
//   )
// }

// function AboutScreen() {
//   return (
//     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//       <Text>About</Text>
//     </View>
//   )
// }

const Drawer = createDrawerNavigator()

function MyDrawer() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name='Home' component={HomeScreen} />
      <Drawer.Screen name='About' component={AboutScreen} />
    </Drawer.Navigator>
  )
}

export default function App() {
  return (
      <NavigationContainer>
        <MyDrawer />
      </NavigationContainer>
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
