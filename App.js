import * as React from 'react'
import { Button, View, Text, StyleSheet, SafeAreaView } from 'react-native'
import { createDrawerNavigator } from '@react-navigation/drawer'
import { NavigationContainer } from '@react-navigation/native'

//Components
import HomeScreen from './Components/HomeScreen'
import AboutScreen from './Components/AboutScreen'
import Dashboard from './Components/Dashboard'
import Map from './Components/Map'


const Drawer = createDrawerNavigator()

function MyDrawer() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name='Home' component={HomeScreen} />
      <Drawer.Screen name='About' component={AboutScreen} />
      <Drawer.Screen name='Dashboard' component={Dashboard} />
      <Drawer.Screen name='Map' component={Map} />
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
    backgroundColor: '#e0d8c3',
    alignItems: 'center',
    justifyContent: 'center'
  }
})
