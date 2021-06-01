import * as React from 'react'
import { View, Text, StyleSheet,SafeAreaView, ScrollView } from 'react-native'
import { Avatar, Card, Title, Paragraph } from 'react-native-paper'
import { Button, PricingCard } from 'react-native-elements'
import Icon from 'react-native-vector-icons/FontAwesome'

import { Ionicons } from '@expo/vector-icons'

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <Card style={styles.cards}>
          <Card.Content>
            <Title>Home</Title>
            <Paragraph>HomeScreen</Paragraph>
          </Card.Content>
          <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
          <Card.Actions>
            <Button
              style={styles.icons}
              icon={<Icon name='odnoklassniki' size={15} color='#2488de' />}
              title='Okay'
              type='outline'
            />
            <Button
              style={styles.icons}
              icon={<Icon name='eraser' size={15} color='#2488de' />}
              title=' Clear'
              type='outline'
            />
            <Button
              style={styles.icons}
              title=' Loading button'
              type='clear'
              loading
            />
          </Card.Actions>
        </Card>
        <PricingCard
          color='#4f9deb'
          title='Basic'
          price='$3.99'
          info={['1 User', 'Basic Support', 'All Core Features']}
          button={{ title: 'GET STARTED', icon: 'flight-takeoff' }}
        />
        <PricingCard
          color='#4f9deb'
          title='Premium'
          price='$9.99'
          info={['1 User', 'Premium Support', 'All Premium Features']}
          button={{ title: 'GET STARTED', icon: 'flight-takeoff' }}
        />
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e0d8c3',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 38
  },
  cards: {
    width: 350
  },
  icons: {
    marginRight: 10,
    justifyContent: 'flex-end',
    alignItems: 'flex-end'
  },
  scrollView: {
    backgroundColor: 'pink',
    // marginHorizontal: 20
  }
})
