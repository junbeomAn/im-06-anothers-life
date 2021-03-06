import React from 'react';
import { StyleSheet, Text, View, AsyncStorage, Image, ActivityIndicator } from 'react-native';
import Expo, { Font } from 'expo';
import Main from "./Main";
import StackNav from "./StackNav";
import People from "./People";
import Login from "./auth/Login";
import Register from "./auth/Register";
import MyPage from "./mypage/MyPage";
import Admin from "./admin/Admin";
import {setCustomText} from 'react-native-global-props';
import decode from 'jwt-decode';

const customTextProps = {
  style: {
    fontFamily: 'BareunBatangM'
  }
}
export default class Loading extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      username: '',
      data: '', 
      token: '',
      signUp: false,
      fontLoaded: false,
      target: '',
      isLogined: false,
      isAdmin: false,      
    };
  }

  componentDidMount() {
    this._getDb();
    this._fetchToken();
    this.setState({
      isLogined: this._isLogined()
    })
    Font.loadAsync({
      BareunBatangM: require('../assets/BareunBatangM.ttf'),
      BareunBatangB: require('../assets/BareunBatangB.ttf'),
      JungGothic170: require('../assets/JungGothic170.ttf'),
      DaehanB: require('../assets/DaehanB.ttf')
    }).then(() => {
      setCustomText(customTextProps);
      this.setState({fontLoaded: true});
    });
  }

  // username setting
  _setUsername = (username) => {
    this.setState({
      username
    })
  }
 
  // DB 자료 펫칭
  _getDb = () => {
    fetch('http://10.130.104.146:3000/api/people/list')
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
      this._isLogined();
    } catch (error) {
      alert(error);
    }
  }

  // 로컬스토리지에 토큰저장
  _saveToken = (token) => {
    AsyncStorage.setItem('token', token);
    this.setState({
      token
    })
    this._isLogined();
  }

  // 회원 가입 화면으로
  _register = () => {
    this.setState({
      signUp : !this.state.signUp
    })
  }
  
  // Admin -> User 화면으로
  _toggleSight = () => {
    this.setState({
      isAdmin: !this.state.isAdmin
    })
  
  }
  // 지문인식 로그인
  _fPrintLogin() {
    this.setState({
      isLogined: true
    })
  }

  // 로그 아웃
  _logOut() {
    AsyncStorage.removeItem('token');
    this.setState({
      token: '',
      isLogined: false
    })
  }

  // 특정 사람 선택
  _pickPerson(target) {
    this.setState({
      target
    });
    // console.log(target)
    this._setPushSchedule(target)
  }

  _rejectPerson() {
    this.setState({
      target: {}
    })
    // console.log('empty target');
    Expo.Notifications.cancelAllScheduledNotificationsAsync();
  }

  _setPushSchedule({ schedule }) { // worker     
   for(var i = 0; i < schedule.length; i++){
    this.props.notiPush(schedule[i]);
    }         
  }  

  _isLogined() {
    // console.log('@@', this.state.token);
    this.setState({
      isLogined: (this.state.token && !this._isTokenExpired(this.state.token))
    })
  }

  _isTokenExpired(token) {
    try {
      const decoded = decode(token);
      if(decoded.admin){
        this.setState({ isAdmin : true })
      }
      // console.log(Date.now() / 1000);
      if(decoded.exp < (Date.now() / 1000)) { // Checking if token is expired. N
        alert('토큰이 만료 되었습니다. 다시 로그인 해주세요.');
        this._logOut()
        return true;
      }
      else {
        console.log('기한 남음'); 
        return false;
      }
    }
    catch (err) {
      throw err
    }
  }

  render() {
    const {data, fontLoaded, isLogined, token, signUp, fprintSignIn, target, isAdmin} = this.state;
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        {!data ? <View><ActivityIndicator size="large" /></View> : 
          !fontLoaded ? <View><ActivityIndicator size="large" /></View> :
            isAdmin ? <Admin token={token} toggle={this._toggleSight.bind(this)}/> :
              isLogined ? <StackNav target={target} data={data} token={token} reject={this._rejectPerson.bind(this)} pick={this._pickPerson.bind(this)} logOut={this._logOut.bind(this)}/> : 
                signUp ? <Register register={this._register.bind(this)} /> : 
                <Login setFingerPrint={this._fPrintLogin.bind(this)} setToken={this._saveToken.bind(this)} register={this._register.bind(this)} />}
      </View>
    );
  }
}
