import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, AsyncStorage } from 'react-native';

export default class Logout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentWillMount(){
    // console.log(this.props.screenProps);
    // console.log(this.props.navigation.state.key) // state.key 로 무슨 스크린 클릭했는지 볼 수 있다.
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
