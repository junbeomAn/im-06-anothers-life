import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, Text, View, ActivityIndicator, StatusBar, Button, Image, FlatList } from 'react-native';
import { DrawerNavigator, TabNavigator, StackNavigator, SwitchNavigator } from 'react-navigation';
import { Notifications } from 'expo';

import Login from './Login';
import Register from './Register';
import {SignedIn, SignedOut} from './StackNav' // 로그인 된, 안된 상태 관련 페이지
import Authen from './Authen';

export default class App extends React.Component {
  constructor(props){
    super(props);
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
      <Router />
    );
  }
}

const Router = SwitchNavigator({
  Authen: { screen: Authen },
  SignedIn: { screen: SignedIn },
  SignedOut: { screen: SignedOut}
}, {  
    initialRouteName: 'Authen' 
  }
)