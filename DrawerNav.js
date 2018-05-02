import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, Text, View } from 'react-native';
import { DrawerNavigator, TabNavigator } from 'react-navigation';
import Main from './Main';
import Logout from './Logout';
import MyPage from './MyPage';


const styles = StyleSheet.create({
  icon: {
    width: 24,
    height: 24,
  },
});

export default DrawerNav = DrawerNavigator({
  HOME : {
    screen: Main,
  },
  LOGOUT : {
    screen: Logout //(props) => <Logout screenProps={props.screenProps}/>  
  },
  SETTINGS : {
    screen: MyPage
  }
}, {
    drawerWidth: 220
  }
);

