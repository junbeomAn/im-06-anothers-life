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

export default class Register extends React.Component {

  constructor(props) {
    super(props);
    this.state = { username: '', password: '', email: '' };
  }

  render() {
    return (
      <KeyboardAvoidingView style={styles.container} behavior="padding">
          <View>
            <View style={styles.titleBox}>
              <Text style={styles.title}>S I G N U P</Text>
            </View>
            <View>
              <TextInput
                style={styles.username} 
                placeholder='아이디를 입력하세요'
                value={this.state.username}
                onChangeText={(username) => this.setState({ username })}>
              </TextInput>

              <TextInput
                style={styles.password} 
                placeholder='비밀번호를 입력하세요'
                secureTextEntry={true}
                value={this.state.password}
                onChangeText={(password) => this.setState({ password })}>
              </TextInput>

              <TextInput
                style={styles.password}
                placeholder='이메일을 입력하세요'
                keyboardType="email-address"
                value={this.state.email}
                onChangeText={(email) => this.setState({ email })}>
              </TextInput>
              
            </View>
            <View>
              <TouchableOpacity onPress={this.register}>
                <Text style={styles.apply}>Sign up</Text>
              </TouchableOpacity>
            </View>
            <View>
              <TouchableOpacity onPress={this.props.register}>
                <Text style={styles.back}>Go Back</Text>
              </TouchableOpacity>
            </View>
          </View>
      </KeyboardAvoidingView>
    );
  }

  register = () => {
    if(this.state.username.length < 4) alert('4자리 이상의 아이디를 입력해 주세요');
    else if(this.state.password.length < 8) alert('8자리 이상의 비밀번호를 입력해 주세요')
    else {
      fetch('http://10.130.111.79:3000/api/auth/register', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username: this.state.username,
          password: this.state.password,
          email: this.state.email
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
            password: '',
            email: ''
          })
        }
      })
      .done();
      this.props.register();
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#858B9F',
    width: '100%'
  },
  titleBox: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  title: {
    fontSize: 20,
    color: '#303846',
    fontFamily: 'BareunBatangB',
  },
  username: {
    padding: 3,
    width: 250,
    borderWidth: 1,
    borderColor: 'darkgrey',
    textAlign: 'center',
    backgroundColor: '#eee',
    height: 30,
  },
  password: {
    marginTop: 5,
    padding: 3,
    borderWidth: 1,
    borderColor: 'darkgrey',
    textAlign: 'center',
    backgroundColor: '#eee',
    height: 30,
  },
  apply: {
    width: 250,
    padding: 5,
    paddingTop: 8,
    height: 30,
    textAlign: 'center',
    marginTop: 20,
    backgroundColor: '#2F4661',
    color: 'ghostwhite',
  },
  back : {
    width: 250,
    padding: 5,
    paddingTop: 8,
    height: 30,
    marginTop: 5,
    textAlign: 'center',
    backgroundColor: '#C89287',
    color: 'ghostwhite',
  }
});
