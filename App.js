import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, Text, View, ActivityIndicator, StatusBar, Button, Image, FlatList } from 'react-native';
import { DrawerNavigator, TabNavigator, StackNavigator } from 'react-navigation';

import Selection from "./Selection";
import SettingsScreen from "./SettingsScreen";
import DrawerNav from "./DrawerNav";
import StackNav from "./StackNav"
import Login from "./Login"
import Register from "./Register"
import App2 from "./App2"


export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      username: '',
      password: '',
      token: '',
    };
  }

  render() {
    return (
      
      <Navigation />
    );
  }
}

const Navigation = TabNavigator({
  stackNav: { screen: StackNav }},
  {
    tabBarOptions: {
      activeTintColor: '#7567B1',
      labelStyle: {
        fontSize: 16,
        fontWeight: '600'
      },
      tabStyle: {
        paddingVertical: 14
      }
    }
})


// export default TabNavigator({
//   // Main: { screen: DrawerNav },
//   stackNav: { screen: StackNav }
// }, {
//   tabBarOptions: { 
//     activeTintColor: '#7567B1',
//     labelStyle: {
//       fontSize: 16,
//       fontWeight: '600'
//     },
//     style: {
//       // backgroundColor: 'grey',
//     },
//     tabStyle: {
//       paddingVertical: 14
//     }
//   }
// });


