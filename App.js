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
import People from "./People";
import Register from "./Register";
import Main from "./Main";
import Login from './Login';

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      username: '',
      password: '',
      token: '',
    };
  }

 // _pushNotification() { // 푸쉬 관련. . . 
  //   const localNotification = {
  //     title: '',
  //     body: '', 
  //     ios: { 
  //       sound: true
  //     },
  //     android: { 
  //       sound: true,
  //       priority: 'high', 
  //       sticky: false,
  //       vibrate: true    
  //     }
  //   };
    
  //   let time = new Date();
  //   time.setSeconds(time.getSeconds() + 10);
    
  //   const scheduleOptions = {
  //     time: time,
  //     repeat: repeat
  //   }

  //   Notifications.scheduleLocalNotificationAsync(localNotification, scheduleOptions);        
  // }

  // componentDidMount() {
  //   this._pushNotification();
  //   let result = await;
  //   Permissions.askAsync(Permissions.NOTIFICATIONS);
  //   if(Constants.lisDevice && result.status === 'granted'){
  //     console.log('Notification pemissions granted');      
  //   }
  // }

  render() {
    return (
        <Loading />
    );
  }
}



