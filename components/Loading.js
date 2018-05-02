import React from 'react';
import { StyleSheet, Text, View, AsyncStorage, Image, ActivityIndicator } from 'react-native';
import Expo, { Font } from 'expo';
import Main from "./Main";
import StackNav from "./StackNav";
import People from "./People";
import Login from "./Login";
import Register from "./Register";
import MyPage from "./MyPage";
import {setCustomText} from 'react-native-global-props';
var cron = require('node-cron');

const customTextProps = {
  style: {
    fontFamily: 'BareunBatangM'
  }
}
export default class Loading extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      data: '', 
      token: '',
      signUp: false,
      signedIn: false,
      fontLoaded: false,
      target: ''
    };
  }
  // componentWillMount(){
  //   this._notiPush();
  // }

  componentDidMount(){
    this._getDb();
    this._fetchToken();
    Font.loadAsync({
      BareunBatangM: require('../assets/BareunBatangM.ttf'),
      JungGothic170: require('../assets/JungGothic170.ttf'),
      DaehanB: require('../assets/DaehanB.ttf')
    }).then(() => {
      setCustomText(customTextProps);
      this.setState({fontLoaded: true});
  });
} 
  // // 노티 토큰
  // _notiPush= async () => {
  // const { status: existingStatus } = await Permissions.getAsync(
  //   Permissions.NOTIFICATIONS
  // );
  // var finalStatus = existingStatus;

  // if (existingStatus !== 'granted') {
  //   const { status } = await Permissions.askAsync(Permissions.NOTIFICATIONS);
  //   finalStatus = status;
  //   console.log('finalStatus', finalStatus);
  // }

  // if (finalStatus !== 'granted') {
  //   console.log('finalStatus', finalStatus);
  //   return;
  // }

  // var notiToken = await Expo.Notifications.getExpoPushTokenAsync();
  // this.setState({ notiToken })
// }
 
  // DB 자료 펫칭
  _getDb = () => {
    fetch('http://10.130.109.247:3000/api/people/list')
      .then(response => response.json())
      .then(json => this.setState({
        data: json
      }));
  }

  // 로컬스토리지에서 토큰 퓃칭
  _fetchToken = async () => {
    try {
      const token = await AsyncStorage.getItem('token');
      this.setState({
        token
      })
    } catch (error) {
      alert(error);
    }
  }

  // 로컬스토리지에 토큰저장
  _saveToken = (token) => {
    this.setState({
      token
    })
    AsyncStorage.setItem('token', token);
  }

  // 회원 가입 화면으로
  _register = () => {
    this.setState({
      signUp : !this.state.signUp
    })
  }

  // 로그 아웃
  _logOut() {
    AsyncStorage.removeItem('token');
    this.setState({
      token: ''
    })
  }

  // 특정 사람 선택
  _pickPerson(target) {
    this.setState({
      target
    });
    this._setPushSchedule(target)
  }

  _setPushSchedule(target) { // worker
    if(!target){
      console.log(11111111111111111111)
      return;
    }

    cron.schedule('1-59 * * * *', function(){
      console.log('crons is working!!!!!!!!!!!!');
      // var hours = new Date().getHours();
      // var minutes = new Date().getMinutes();
      // var parsedTime = (hours <= 12 ? '0' : '') + hours + '-' +  (minutes < 10 ? '0' : '') + minutes;
      // console.log(parsedTime);
      
      // for(var i = 0; i < target.schedule.length; i++){
      //   if(target.schedule[i]['time'] === parsedTime){
      //     this.props.notiPush(target.schedule[i].task);
      //   }
      // }
    });
      
    // setInterval(() => {
      
    // }, 10000)
    
  }

  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        {!this.state.data ? <View><ActivityIndicator size="large" /></View> : 
            !this.state.fontLoaded ? <View><ActivityIndicator size="large" /></View> :
            this.state.token ? <StackNav data={this.state.data} pick={this._pickPerson.bind(this)} logOut={this._logOut.bind(this)}/> : 
            this.state.signUp ? <Register register={this._register.bind(this)}/> : <Login setToken={this._saveToken.bind(this)} register={this._register.bind(this)} />}
      </View>
    );
  }
}

