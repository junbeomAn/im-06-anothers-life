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
} from 'react-native';
import Register from "./Register"
import StackNav from "./StackNav"

export default class Login extends React.Component {

  constructor(props) {
    super(props)
    this.state = { 
      username: '', 
      password: '',
      token: '',
    };
  }
  
  render() {
    return (
      <View style={styles.container}>{this.state.token ? this.props.navigation.navigate('Main'): 
        <View>
          <View>
            <TextInput 
            placeholder='아이디를 입력하세요'
            value={this.state.username}
            onChangeText={(username) => this.setState({ username })}>
            </TextInput>

            <TextInput
              placeholder='비밀번호를 입력하세요'
              value={this.state.password}
              onChangeText={(password) => this.setState({ password })}>
            </TextInput>
          </View>
          <View>
            <TouchableOpacity onPress={this.login}>
              <Text>Login</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={this.register} style={styles.register}>
              <Text>Register</Text>
            </TouchableOpacity>
          </View>
        </View>
      }
      </View>
    );
  }

  register = () => {
    this.props.navigation.navigate('Register')
  }

  // 로컬스토리지에 토큰저장
  _saveData = (username, token) => {
    // const option = {
    //   'name': username,
    //   'token': token
    // }
    AsyncStorage.setItem('token', JSON.stringify(token));
  }

  login = () => {
    fetch('http://127.0.0.1:3000/api/auth/login', {
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
            token: res.token
          })
          console.log("TOKEN : ", res.token)
          // this._saveData(this.state.username, res.token);
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
  }
})