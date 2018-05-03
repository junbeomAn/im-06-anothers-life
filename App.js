import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, Text, View, ActivityIndicator, StatusBar, Button, Image, FlatList } from 'react-native';
import { DrawerNavigator, TabNavigator, StackNavigator } from 'react-navigation';
import { TouchableOpacity, TouchableHighlight, AsyncStorage } from 'react-native';
import { Ionicons } from "@expo/vector-icons";
import Expo, { Font, Notifications, Permissions, Constants } from 'expo';

import Loading from './components/Loading';
import Selection from "./components/Selection";
import DrawerNav from "./components/DrawerNav";
import StackNav from "./components/StackNav";
import People from "./components/People";
import Register from "./components/auth/Register";
import Main from "./components/Main";
import Login from './components/auth/Login';

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {};
  }

  _notiPush(schedule) { // 푸쉬 관련. . . 
    const localNotification = {
      title: '타인의 삶',
      body: schedule.task, // schedule.task
      ios: {
        sound: true
      },
      android: {
        sound: true,
        priority: 'high',
        sticky: true,
        vibrate: true
      }
    };

    let scheduleHours = Number(schedule.time.split('-')[0]);
    let scheduleMinutes = Number(schedule.time.split('-')[1]);
    let time = new Date(); // GMT 시간 === MM/DD/YYYY 형식

    console.log(time); // 대체 왜다른거지????????????????????????????????????????!!!!!!!! 04
    console.log(time.getHours()); //13

    if(scheduleHours <= time.getHours()){
      if(scheduleMinutes <= time.getMinutes()){
        console.log('schedule cancelled')
        return ;
      }      
    }
    
    time.setHours(scheduleHours)
    time.setMinutes(scheduleMinutes); // UTC 1520482918 === 1970.01.01 부터의 

    // console.log(`${scheduleHours} : ${scheduleMinutes} / ${time}`);
    //second로 환산한 시간을 30초 더한 GMT 시간으로 바꿔줌
    // console.log(time, '@@@@@@@@@@@')
    const scheduleOptions = {
      time: time, // time 은 다시 GMT 로 돌아옴
    }
    
    Notifications.scheduleLocalNotificationAsync(localNotification, scheduleOptions);
  }

  async componentDidMount() {
    let result = await
      Permissions.askAsync(Permissions.NOTIFICATIONS); // 알림 허용 alert
    if (Constants.lisDevice && result.status === 'granted') {           
      console.log('Notification pemissions granted');
    }
  }
  
  render() {
    return (
        <Loading notiPush={this._notiPush.bind(this)}/>
    );
  }
}


