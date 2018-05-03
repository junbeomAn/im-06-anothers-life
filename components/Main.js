import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, Text, View, StatusBar, Button, Image, FlatList, TouchableHighlight, ActivityIndicator, ScrollView } from 'react-native';
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
        <ScrollView style={styles.scrollBox}>
          <View style={styles.peopleBox}>
          {screenProps === null ? <ActivityIndicator size="large"/> : 
            screenProps.map((item, index) => <TouchableHighlight
            onPress={() => navigation.navigate({routeName: 'People', params: item, key: item._id})}
            style={styles.button} key={index}>
            <Selection item={item} key={index}/>
            </TouchableHighlight>)}
          </View>
        </ScrollView>
      </View>
    );  
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#111',
    width: '100%',
    height: '100%',
  },
  scrollBox: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  peopleBox: {
    flex: 1,
    height: '100%',
  },
  person: {
    flex: 0.25,
    borderWidth: 4,
  }
});
