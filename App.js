import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Register from './register';
import Login from './login';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      token: ''
    };
  }
  componentDidMount() {
    this._getData();
  }

  _tokenMaker(token){
    this.setState({
      token: token
    })
  }

  _getData = () => {
    fetch('http://127.0.0.1:3000/api/people/list')
      .then(response => response.json())
      .then(json => console.log('aaaa', json))
      .catch(err => console.log(err))
  }

  render() {
    return (
      <View style={styles.container}>
        {this.state.token ? <Text>토큰 있네</Text> : <Login makeToken={this._tokenMaker.bind(this)}/>}
      </View>
    );
  }
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
