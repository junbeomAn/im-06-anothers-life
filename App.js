import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, Text, View, ActivityIndicator, StatusBar, Button, Image, FlatList } from 'react-native';
import { DrawerNavigator, TabNavigator, StackNavigator } from 'react-navigation';
import { TouchableOpacity, TouchableHighlight, AsyncStorage } from 'react-native';
import { Ionicons } from "@expo/vector-icons";
import { Notifications, Permissions, Constants, } from 'expo';

import Loading from './Loading';
import Selection from "./Selection";
import SettingsScreen from "./SettingsScreen";
import Drawer from "./DrawerNav";
import Stack from "./StackNav";
import People from "./People";
import Register from "./Register";
import Main from "./Main";
import Login from './Login';

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {};
  }

  //  _pushNotification() { // 푸쉬 관련. . . 
//     const localNotification = {
//       title: 'hello',
//       body: 'it is push noti', 
//       ios: { 
//         sound: true
//       },
//       android: { 
//         sound: true,
//         priority: 'high', 
//         sticky: true,
//         vibrate: true    
//       }
//     };
    
//     let time = new Date();
//     time.setSeconds(time.getSeconds() + 10);
    
//     const scheduleOptions = {
//       time: time,
//       repeat: 'minute'
//     }

//     Notifications.scheduleLocalNotificationAsync(localNotification, scheduleOptions);        
//   }

//   async componentDidMount() {    
//     let result = await
//     Permissions.askAsync(Permissions.NOTIFICATIONS);
//     if(Constants.lisDevice && result.status === 'granted'){
//       console.log('Notification pemissions granted');         
//     }
//     this._pushNotification();
//   }

  render() {
    return (
        <Loading />
    );
  }
}

// Expo.registerRootComponent(App);


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


