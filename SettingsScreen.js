import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, AsyncStorage } from 'react-native';

export default class SettingsScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      token: true
    }
  }

  // _logOut() {
  //   AsyncStorage.removeItem('token');
  //   this.setState({
  //     token: false
  //   })
  // }


  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <TouchableOpacity >
          <Text>Settings!</Text>
         
        </TouchableOpacity>
      </View>
    );
  }
}
