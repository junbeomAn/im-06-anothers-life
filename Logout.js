import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, AsyncStorage } from 'react-native';

export default class Logout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentWillMount(){
    // console.log(this.props.screenProps);
    this.props.screenProps.method();//maybe logout method.....
  }

  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <TouchableOpacity >
          <Text>Bye!!</Text>         
        </TouchableOpacity>
      </View>
    );
  }
}
