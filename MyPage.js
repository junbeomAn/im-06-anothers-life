import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, AsyncStorage } from 'react-native';
import Login from './Login';
export default class SettingsScreen extends React.Component {
  constructor(props) {
    super(props);
    // this.state = {
    //   token: true
    // }
  }

  render() {
    const { screenProps } = this.props;
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <TouchableOpacity onPress={() => { screenProps.method() }}>
          <Text>My Page, PRESS to LOGOUT!!</Text>         
        </TouchableOpacity>
      </View>
    );
  }
}
