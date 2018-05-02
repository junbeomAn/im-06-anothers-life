import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, AsyncStorage } from 'react-native';
import Login from './Login';

export default class Mypage extends React.Component {
  constructor(props) {
    super(props);
    // this.state = {
    //   token: true
    // }
  }

  render() {
    const { screenProps } = this.props;
    return (
      <View style={styles.container}>
        <View>
          <TouchableOpacity onPress={() => { screenProps.method() }}>
            <Text style={styles.text}>즐 겨 찾 기</Text>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity onPress={() => { screenProps.method() }}>
            <Text style={styles.text}>알 림 설 정</Text>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity onPress={() => { screenProps.method() }}>
            <Text style={styles.text}>로 그 아 웃</Text>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity onPress={() => { screenProps.method() }}>
            <Text style={styles.text}>비 밀 번 호 변 경</Text>
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
  text: {
    width: 300,
    marginTop: 20,
    padding: 5,
    backgroundColor: '#008B8B',
    color: 'ghostwhite',
    textAlign: 'center',
    fontSize: 16,
  },
  extra: {
    padding: 5,
    textAlign: 'center',
    marginTop: 5,
    backgroundColor: '#008B8B',
    color: 'ghostwhite',
  },
})