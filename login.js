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
} from 'react-native';
import Register from "./Register"
import StackNav from "./StackNav"

export default class Login extends React.Component {

  constructor(props) {
    super(props)
    this.state = { 
      username: '', 
      password: '',
      hasToken: '',
    };
  }

  componentDidMount(){
    this._fetchData();
  }
  
  render() {
    return (
      <KeyboardAvoidingView style={styles.container} behavior="padding">
      {this.state.hasToken ? this.props.navigation.navigate('Main'):
        <View>
          <View>
            <TextInput 
              style={styles.username}
              placeholder='아이디를 입력하세요'
              keyboardType="email-address"
              value={this.state.username}
              onChangeText={(username) => this.setState({ username })}>
            </TextInput>

            <TextInput
              style={styles.password}
              placeholder='비밀번호를 입력하세요'
              secureTextEntry='true'
              value={this.state.password}
              onChangeText={(password) => this.setState({ password })}>
            </TextInput>
          </View>
          <View>
            <TouchableOpacity onPress={this.login}>
              <Text style={styles.login}>Login</Text>
            </TouchableOpacity>
          </View>
          <View>
            <TouchableOpacity onPress={this.register}>
              <Text style={styles.register}>Sign up</Text>
            </TouchableOpacity>
          </View>
        </View>
      }
      </KeyboardAvoidingView>
      );
    }
  
  register = () => {
    this.props.navigation.navigate('Register')
  }

  // 로컬스토리지에 토큰저장
  _saveData = (token) => {
    AsyncStorage.setItem('token', token);
  }

  // 로컬스토리지에서 토큰 퓃칭
  _fetchData = async () => {
    try {
      const token = await AsyncStorage.getItem('token');
      this.setState({
        hasToken : token
      })
      alert(token);
    } catch (error) {
      alert(error);
    }
  }

  login = () => {
    fetch('http://172.30.1.36:3000/api/auth/login', {
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
          alert(res.message);
          this.setState({
            username: '',
            password: '',
            hasToken: res.token
          })
          console.log("TOKEN : ", res.token);
          this._saveData(res.token);
        }
      })
      .done();
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
  },
  username: {
    padding: 3,
    width: 250,
    borderWidth: 1,
    borderColor: 'darkgrey',
    textAlign: 'center',
    // fontFamily: ''
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
    borderWidth: 1,
    backgroundColor: 'darkslategrey',
    color: 'ghostwhite',
    textAlign: 'center',
  },
  register:{
    padding: 5,
    textAlign: 'center',
    marginTop: 5,
    backgroundColor: 'darkslategrey',
    color: 'ghostwhite',
  },
})