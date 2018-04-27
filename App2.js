import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, Text, View, StatusBar, Button, Image, FlatList, TouchableOpacity, ActivityIndicator } from 'react-native';
import { DrawerNavigator, TabNavigator } from 'react-navigation';

import Selection from "./Selection";
import SettingsScreen from "./SettingsScreen";

export default class App2 extends React.Component {
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
    fetch('http://10.130.109.220:3000/api/people/list')
      .then(response => response.json())
      .then(json => this.setState({
        data: json
      }));
  }

  render() {
    const { navigate } = this.props.navigation;
    return (
        <View style={styles.container}>
        {this.state.data === null ? <ActivityIndicator size="large"/> : 
          this.state.data.map((item, index) => <TouchableOpacity
          onPress={() => navigate("People", item)}
          style={styles.button} key={index}>
          <Selection item={item} key={index}/>
          </TouchableOpacity>)}
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
