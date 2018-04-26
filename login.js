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



export default class Login extends React.Component {

  constructor(props) {
    super(props);
    this.state = { 
      username: '', 
      password: '',
    };
  }
  render() {
    return (
      <View style={styles.container}>
        <View>
          <Text>L O G I N</Text>
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
          </View>
        </View>
      </View>
    );
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
          this.setState({
            username: '',
            password: '',
          })
          alert(res.message);
          console.log(res.token)
          this.props.makeToken(res.token);
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