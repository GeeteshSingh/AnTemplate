import * as React from 'react'
import { View, Text, StyleSheet, Alert } from 'react-native'
import {
  Avatar,
  Button,
  Card,
  Title,
  Paragraph,
  IconButton,
  Colors
} from 'react-native-paper'
import * as Battery from 'expo-battery'


export default class App extends React.Component {
  state = {
    batteryLevel: null,
  };

  componentDidMount() {
    this._subscribe();
  }

  componentWillUnmount() {
    this._unsubscribe();
  }

  async _subscribe() {
    const batteryLevel = await Battery.getBatteryLevelAsync();
    this.setState({ batteryLevel });
    this._subscription = Battery.addBatteryLevelListener(({ batteryLevel }) => {
      this.setState({ batteryLevel });
      console.log('batteryLevel changed!', batteryLevel);
    });
  }

  _unsubscribe() {
    this._subscription && this._subscription.remove();
    this._subscription = null;
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Current Battery Level: {this.state.batteryLevel}</Text>
        <IconButton
          icon='view-dashboard-variant'
          color={Colors.black500}
          size={60}
          onPress={() =>
            // console.log('Pressed')
            Alert.alert(
              'Dashboard',
              'Coming Soon!!',
              [
                {
                  text: 'Cancel',
                  onPress: () => console.log('Cancel!')
                },
                {
                  text: 'OK',
                  onPress: () => {
                    this.onDeleteBTN
                  }
                }
              ],
              { cancelable: false }
            )
          }
        />
        <Text>Dashboard</Text>
      </View>
    )
  }
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e0d8c3',
    alignItems: 'center',
    justifyContent: 'center'
  }
})
