import React from 'react';
import { StyleSheet, Text, View, AsyncStorage, } from 'react-native';

import Main from "./Main";
import StackNav from "./StackNav";
import People from "./People";
import Login from "./Login";
import Register from "./Register";

export default class Loading extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      data: '', 
      token: '',
      signUp: false
    };
  }

  componentDidMount(){
    this._getDb();
    // this._fetchToken();
  }

  // DB 자료 펫칭
  _getDb = () => {
    fetch('http://10.130.104.173:3000/api/people/list')
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

  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        {!this.state.data ? <Text>Loading!!</Text> : 
            this.state.token ? <StackNav data={this.state.data}/> : <Login func={this._saveToken.bind(this)} token={this.state.token} />}
      </View>
    );
  }
}

