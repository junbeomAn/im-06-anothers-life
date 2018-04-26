import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, Text, View, StatusBar, Button, Image, FlatList, TouchableHighlight } from 'react-native';
import { DrawerNavigator, TabNavigator } from 'react-navigation';

import Selection from "./Selection";
import SettingsScreen from "./SettingsScreen";

export default class App extends React.Component {
constructor(props){
  super(props);
  this.state = {
    username: '',
    password: '',
    token: ''
  };
}

  static navigationOptions = {
    title: "Welcome"
  }
  componentDidMount() {
    this._getData();
  }

  _tokenMaker(token){
    this.setState({
      token: token
    })
  }

  _getData = () => {
    fetch('http://127.0.0.1:3000/api/people/list')
      .then(response => response.json())
      .then(json => console.log('aaaa', json))
      .catch(err => console.log(err))
  }

  render() {
    const { navigate } = this.props.navigation;
    
    return (         
        <View style={styles.container}>
          <TouchableHighlight
            onPress={() => navigate("People")}
            style={styles.button}>
            <Selection />
          </TouchableHighlight>
          <TouchableHighlight
            onPress={() => navigate("People")}
            style={styles.button}>
            <Selection />
          </TouchableHighlight>
          <TouchableHighlight
            onPress={() => navigate("People")}
            style={styles.button}>
            <Selection />
          </TouchableHighlight>
          <TouchableHighlight
            onPress={() => navigate("People")}
            style={styles.button}>
            <Selection />
          </TouchableHighlight>
        </View>         
    );  
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'stretch',
    justifyContent: 'center',
    flexWrap: 'wrap',
    flexDirection: 'row'
  },
});
