import React from 'react';
import PropTypes from 'prop-types';
// import { StyleSheet, Text, View } from 'react-native';
import { DrawerNavigator, TabNavigator } from 'react-navigation';

import Selection from "./Selection";
import SettingsScreen from "./SettingsScreen";
// import DrawerNav from "./DrawerNav";
import StackNav from "./StackNav"
import App from "./App2"


export default TabNavigator({
  // Main: { screen: DrawerNav },
  stackNav: { screen: StackNav }
}, {
  tabBarOptions: { 
    activeTintColor: '#7567B1',
    labelStyle: {
      fontSize: 16,
      fontWeight: '600'
    },
    style: {
      // backgroundColor: 'grey',
    },
    tabStyle: {
      paddingVertical: 14
    }
  }
});


