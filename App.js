import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, Text, View, ActivityIndicator, StatusBar, Button, Image, FlatList } from 'react-native';
import { DrawerNavigator, TabNavigator, StackNavigator } from 'react-navigation';
import { TouchableOpacity, TouchableHighlight, AsyncStorage } from 'react-native';
import { Ionicons } from "@expo/vector-icons";
import Expo, { Notifications, Permissions, Constants } from 'expo';

import Loading from './Loading';
import Selection from "./Selection";
import DrawerNav from "./DrawerNav";
import StackNav from "./StackNav";
import People from "./People";
import Register from "./Register";
import Main from "./Main";
import Login from './Login';

async function register(){
  const { status } = await Expo.Permissions.askAsync(
    Expo.Permissions.NOTIFICATIONS
  );

  if (status !== 'granted') {
    // alert("셋팅에서 알림 설정을 허용해 주세요");
    return;
  }
  const notiToken = await Expo.Notifications.getExpoPushTokenAsync();
  console.log(status, notiToken);
}

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {};
  }

  componentWillMount() {
    register();
  }
  //  _pushNotification() { // 푸쉬 관련. . . 
  //   const localNotification = {
  //     title: 'hello',
  //     body: 'it is push noti', 
  //     ios: { 
  //       sound: true
  //     },
  //     android: { 
  //       sound: true,
  //       priority: 'high', 
  //       sticky: true,
  //       vibrate: true    
  //     }
  //   };
    
  //   let time = new Date();
  //   time.setSeconds(time.getSeconds() + 10);
    
  //   const scheduleOptions = {
  //     time: time,
  //     repeat: 'minute'
  //   }

  //   Notifications.scheduleLocalNotificationAsync(localNotification, scheduleOptions);        
  // }

  // async componentDidMount() {    
  //   let result = await
  //   Permissions.askAsync(Permissions.NOTIFICATIONS);
  //   if(Constants.lisDevice && result.status === 'granted'){
  //     console.log('Notification pemissions granted');         
  //   }
  //   this._pushNotification();
  // }

  render() {
    return (
        <Loading />
    );
  }
}

// Expo.registerRootComponent(App);

