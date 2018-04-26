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



export default class Register extends React.Component {

  constructor(props) {
    super(props);
    this.state = { username: '', password: '' };
  }
  render() {
    return (
      <View style={styles.container}>
        <View>
          <Text>회원 가입</Text>
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
            <TouchableOpacity onPress={this.register}>
              <Text>가입 신청</Text>
            </TouchableOpacity>

          </View>
        </View>
      </View>
    );
  }

  register = () => {
    fetch('http://127.0.0.1:3000/api/auth/register', {
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
    .then((response) => response.json())
    .then((res) => {
      if (res.success === true) {
        var username = res.id;
        var password = res.pw;
      } else {
        alert(res.message);
        this.setState({
          username: '',
          password: ''
        })
      }

    })
    .done();
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  }
});