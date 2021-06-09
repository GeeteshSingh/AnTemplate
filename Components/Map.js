import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { Alert } from 'react-native'
import { StyleSheet, Text, View, Dimensions, ScrollView, SafeAreaView } from 'react-native'
import {
  Card,
  CheckBox,
  FAB,
  Header,
  LinearProgress
} from 'react-native-elements'

import MapView from 'react-native-maps'
//Components

export default function Map() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Header
          placement='left'
          leftComponent={{ icon: 'menu', color: '#fff' }}
          centerComponent={{
            icon: 'home',
            text: 'Find Our base Locations',
            style: { color: '#fff', fontSize:17 }
          }}
          // rightComponent={{ text: 'Gawd',icon: 'home', color: '#fff' }}
        />
        <Card style={styles.cards}>
          <Card.Title>
            <Text> Our Base Locations </Text>
          </Card.Title>
          <MapView
            style={styles.map}
            initialRegion={{
              latitude: 23.156289,
              longitude: 75.796485,
              latitudeDelta: 0.0922,
              longitudeDelta: 0.0421
            }}
          />
        </Card>
        <CheckBox
          center
          title='Go to Base'
          checkedIcon='dot-circle-o'
          uncheckedIcon='circle-o'
        />
        <LinearProgress color='primary' />
        <CheckBox
          center
          title='Add more Base'
          iconRight
          iconType='material'
          checkedIcon='clear'
          uncheckedIcon='add'
          checkedColor='red'
        />
        <FAB title='Create' />

        <StatusBar style='auto' />
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e0d8c3',
    alignItems: 'center',
    justifyContent: 'center',
    fontWeight: 'bold',
  },
  map: {
    width: 350,
    height: 390
  },
  cards: {
    height:40,
    backgroundColor: '#000000',
    fontWeight: '300',
  }
})
