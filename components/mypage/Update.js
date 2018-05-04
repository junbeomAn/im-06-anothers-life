import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import decode from 'jwt-decode';

export default class Update extends React.Component {
  constructor(props) {
    super(props);
    this.state = { username: '', password: '' };
  }

  componentWillMount() {
    this._getUsername(this.props.screenProps.token);
  }

  _getUsername(token) {
    try {
      const decoded = decode(token);
      this.setState({
        username: decoded.username
      })
    }
    catch (err) { throw err }
  }

  _updatePassword = () => {
    fetch('http://10.130.110.214:3000/api/auth/update', {
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
        alert(res.message);
      })
      .done();
    this.props.screenProps.method();
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.titleBox}>
          <Text style={styles.text}>
            새로운 비밀번호를 입력해 주세요.
          </Text>
          <TextInput
            style={styles.password}
            placeholder='비밀번호를 입력하세요'
            secureTextEntry={true}
            value={this.state.password}
            onChangeText={(password) => this.setState({ password })}>
          </TextInput>
        </View>
        <View style={styles.titleBox}>
          <Text style={styles.text}>
            비밀번호를 변경 하시려면 아래의 버튼을 눌러주세요.
          </Text>
          <TouchableOpacity onPress={this._updatePassword}>
            <Text style={styles.exit}>비 밀 번 호 변 경</Text>
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
    marginBottom: 30,
  },
  exit: {
    marginTop: 5,
    padding: 5,
    backgroundColor: '#F08080',
    color: 'ghostwhite',
    textAlign: 'center',
  },
  password: {
    width: 250,
    marginTop: 5,
    padding: 3,
    borderWidth: 1,
    borderColor: 'darkgrey',
    textAlign: 'center',
  },
  text: {
    marginBottom: 3,
  }
})