import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, Text, View, ActivityIndicator, StatusBar, Button, Image, FlatList } from 'react-native';
import { DrawerNavigator, TabNavigator, StackNavigator } from 'react-navigation';
import { TouchableOpacity, TouchableHighlight, AsyncStorage } from 'react-native';
import { Ionicons } from "@expo/vector-icons";

import Loading from './Loading';
import Selection from "./Selection";
import SettingsScreen from "./SettingsScreen";
import DrawerNav from "./DrawerNav";
import StackNav from "./StackNav";
import Login from "./Login";
import People from "./People";
import Register from "./Register";
import Main from "./Main";


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
        <Loading />
    );
  }
}
// const Navigation = TabNavigator({
//   HOME: { screen: StackNav },
//   // LOGIN: { screen: Login }
//   },
//   {
//     tabBarOptions: {
//       activeTintColor: '#7567B1',
//       labelStyle: {
//         fontSize: 16,
//         fontWeight: '600'
//     },
//     tabStyle: {
//       paddingVertical: 14
//     }
//   }
// })


