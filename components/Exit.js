import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import decode from 'jwt-decode';

export default class Logout extends React.Component {
  constructor(props) {
    super(props);
    this.state = { username: '' };
  }

  componentWillMount(){
    this._getUsername(this.props.screenProps.token);
  }

  _getUsername(token) {
    try {
      const decoded = decode(token);
      // alert(decoded.username);
      this.setState({
        username: decoded.username
      })
    }
    catch (err) {
      throw err
    }
  }

  _removeUser = () => {
    fetch('http://10.130.110.213:3000/api/auth/remove', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username: this.state.username
      })
    })
      .then(response => response.json())
      .then(res => {
        alert(res.message);
      })
      .done();
      this.props.screenProps.method();
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.titleBox}>
          <Text>
            계정을 삭제하면 사용하신 모든 정보들이 영구적으로 삭제됩니다.
          </Text>
          <Text>
            영구적으로 계정을 삭제하시려면 아래의 버튼을 눌러주세요.
          </Text>
        </View>
        <View>
          <TouchableOpacity onPress={this._removeUser}>
            <Text style={styles.exit}>계 정 삭 제</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
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
  exit: {
    marginTop: 20,
    padding: 5,
    backgroundColor: '#F08080',
    color: 'ghostwhite',
    textAlign: 'center',
  },
})