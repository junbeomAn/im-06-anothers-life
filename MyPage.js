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

  _logOut() {

    AsyncStorage.removeItem('token');
    this.props.navigation.navigate('Login');
    console.log(11111);
  }


  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <TouchableOpacity onPress={()=>{ this._logOut() }}>
          <Text>My Page, PRESS to LOGOUT!!</Text>         
        </TouchableOpacity>
      </View>
    );
  }
}
