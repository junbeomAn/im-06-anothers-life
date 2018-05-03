import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  AsyncStorage,
  Navigator,
  WebView,
  KeyboardAvoidingView,
  ImageBackground
} from 'react-native';
import Expo from 'expo';
import {iosClientId, androidClientId} from './GoogleAuthKey';

import Register from "./Register";
import StackNav from "../StackNav";

export default class Login extends React.Component {

  constructor(props) {
    super(props)
    this.state = { username: '', password: '' };
  }

  _login = () => { // 일반 로그인
    fetch('http://10.130.109.247:3000/api/auth/login', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username: this.state.username,
        password: this.state.password
      })
    })
      .then(response => response.json())
      .then(res => {
        if (res.success === true) {
          var username = res.username;
          var password = res.password;
        } 
        else {
          alert(this.state.username + res.message);
          if(res.token){            
            this.props.setToken(res.token);
          }
        }
      })
      .done();
  }


  _onLoginPress = async () => { // 구글 연동 로그인
    const result = await this._signInWithGoogleAsync()
    // if there is no result.error or result.cancelled, the user is logged in
    // do something with the result    
    alert(result.user.name + ' 님 환영합니다');
    this.props.setToken(result.idToken);   
  }

  _signInWithGoogleAsync = async () => { // 구글 연동 로그인
    try {
      const result = await Expo.Google.logInAsync({
        iosClientId: iosClientId,
        androidClientId: androidClientId,
        scopes: ['profile', 'email'],
      })

      console.log(result);

      if (result.type === 'success') {
        return result;
      }
      return { cancelled: true }
    } catch (e) {
      console.log(e);
      return { error: e };
    }
  }

   _fingerPrintLogin = async () => {
    if(Expo.Fingerprint.hasHardwareAsync() && Expo.Fingerprint.isEnrolledAsync()){
      var result = await Expo.Fingerprint.authenticateAsync('sign in');
      if(result.success){
        alert('Welcome')
        this.props.setFingerPrint();        
      } else {
        if(result.error !== 'user_cancel'){
          alert(result.error);
        }         
      }
    }
  }

  async componentDidMount() {
    await this._fingerPrintLogin();
  }

  render() {
    return (
      <KeyboardAvoidingView style={styles.container} behavior="padding">
    
        <View>
          <View style={styles.titleBox}>
              <Text style={styles.title}>L O G I N</Text>
          </View>
          <View>
         
            <TextInput
              style={styles.username}
              placeholder='아이디를 입력하세요'
              keyboardType="email-address"
              value={this.state.username}
              onChangeText={(username) => { this.setState({ username })}}>
            </TextInput>

            <TextInput
              style={styles.password}
              placeholder='비밀번호를 입력하세요'
              secureTextEntry={true}
              value={this.state.password}
              onChangeText={(password) => this.setState({ password })}>
            </TextInput>
          </View>
          <View>
            <TouchableOpacity onPress={this._login}>
              <Text style={styles.login}>Log in</Text>
            </TouchableOpacity>
          </View>
          <View>
            <TouchableOpacity onPress={this.props.register}>
              <Text style={styles.register}>Sign up</Text>
            </TouchableOpacity>
          </View>
          <View>
            <TouchableOpacity>
              <Text style={styles.forgot}>Forgot your password?</Text>
            </TouchableOpacity>
          </View>
          <View>
            <ImageBackground style={styles.photo} source={{ uri: 'http://www.kthotelsgate.com/assets/theme_dark/images/sign-in-button.png' }}>
              <TouchableOpacity onPress={this._onLoginPress}>
                <Text style={styles.google}> </Text>
              </TouchableOpacity>
            </ImageBackground>
          </View>
        </View>
      </KeyboardAvoidingView>
      );
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleBox:{
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  title:{
    fontSize: 20,
    fontFamily: 'BareunBatangM'
  },
  username: {
    padding: 3,
    width: 250,
    borderWidth: 1,
    borderColor: 'darkgrey',
    textAlign: 'center',
  },
  password: {
    marginTop: 5,
    padding: 3,
    borderWidth: 1,
    borderColor: 'darkgrey',
    textAlign: 'center',
  },
  login:{
    marginTop: 20,
    padding: 5,
    backgroundColor: '#008B8B',
    color: 'ghostwhite',
    textAlign: 'center',
  },
  register:{
    padding: 5,
    textAlign: 'center',
    marginTop: 5,
    backgroundColor: '#008B8B',
    color: 'ghostwhite',
  },
  google: {
    marginTop: 20,
    padding: 5,
    // backgroundColor: '#F08080',
    color: 'ghostwhite',
    textAlign: 'center',
  },
  photo: {
    marginTop: 20,
    width: 250
  },
  forgot: {
    padding: 5,
    textAlign: 'center',
    marginTop: 5,
    backgroundColor: '#F08080',
    color: 'ghostwhite',
  },
})
