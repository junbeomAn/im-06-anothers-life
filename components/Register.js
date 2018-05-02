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
      </View>
    );
  }

  register = () => {
    fetch('http://10.130.109.247:3000/api/auth/register', {
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
        alert(this.state.username + res.message);
        this.setState({
          username: '',
          password: ''
        })
      }
    })
    .done();
    this.props.register();
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleBox: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  title: {
    fontSize: 20,
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
  apply: {
    width: 250,
    padding: 5,
    textAlign: 'center',
    marginTop: 20,
    backgroundColor: '#008B8B',
    color: 'ghostwhite',
  },
  back : {
    width: 250,
    padding: 5,
    marginTop: 5,
    textAlign: 'center',
    backgroundColor: '#F08080',
    color: 'ghostwhite',
  }
});
