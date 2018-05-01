import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, Text, View, StatusBar, Button, Image, FlatList, TouchableHighlight, ActivityIndicator } from 'react-native';
import { DrawerNavigator, TabNavigator } from 'react-navigation';

import Selection from "./Selection";

export default class Main extends React.Component {
constructor(props){
  super(props);
  this.state = {
    username: '',
    password: '',
    token: '',
    data: null
  };
}

  static navigationOptions = {
    title: "HOME"
  }

  render() {
    const { navigation, screenProps } = this.props;
    return (
        <View style={styles.container}>
        {screenProps === null ? <ActivityIndicator size="large"/> : 
          screenProps.map((item, index) => <TouchableHighlight
          onPress={() => navigation.navigate("People", item)}
          style={styles.button} key={index}>
          <Selection item={item} key={index}/>
          </TouchableHighlight>)}
        </View>
    );  
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 2,
    backgroundColor: '#fff',
  },
  button: {
    flex: 1,
  }
});
