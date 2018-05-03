import React from 'react';
import { StyleSheet, Text, View, Image, ActivityIndicator, TouchableOpacity, TextInput, ScrollView } from 'react-native';
import Expo, { Font } from 'expo';
import { setCustomText } from 'react-native-global-props';
import UserLists from './UserLists'

const customTextProps = {
  style: {
    fontFamily: 'BareunBatangM'
  }
}
export default class Admin extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userList: '',
      username: '',
    };
  }

  componentDidMount() {
    this._getUserList(this.props.token)
  }

  _getUserList = (token) => {
    const option = {
      headers: {
        'x-access-token': token
      }
    }

    fetch('http://10.130.110.213:3000/api/user/list', option)
      .then(response => response.json())
      .then(json => this.setState({
        userList: json
      }));
  }

  render() {
    const { userList } = this.state;
    return (
      <View style={styles.container}>
        <View style={styles.titleBox}>
          {!userList ? <Text style={styles.title}> 자료 수집 중 </Text> : 
            <Text style={styles.title}> 총 회원 현황 : {userList.users.length}명</Text>}
        </View>
        
        <ScrollView style={styles.middleBox}>
          <View style={styles.userBox}>
            {!userList ? <ActivityIndicator size="large" /> : userList.users.map((user, index) => 
             <UserLists user={user} key={index}/>)} 
          </View>
        </ScrollView>

          

        <View style={styles.sendBox}>
          <TextInput
            style={styles.nameBar}
            placeholder='해당 아이디를 입력하세요'
            onChangeText={(text) => this.setState({ username: text })}>
          </TextInput>
          <TouchableOpacity onPress={this.props.register}>
            <Text style={styles.authorize}>관리자 권한 부여</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={this.props.toggle}>
            <Text style={styles.back}>Go Guest Sight</Text>
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
    backgroundColor: '#222',
    width: '100%',
    borderWidth: 1,
  },
  titleBox: {
    flex: 0.1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30,
    borderWidth: 1,
  },
  title: {
    fontSize: 20,
    color: 'ghostwhite',
  },
  middleBox: {
    flex: 0.6,
    paddingBottom: 10,
    borderWidth: 1,
    width: '70%'
  },
  userBox: {
    display: 'flex',
    borderWidth: 1,
    borderColor: 'blue',
  },
  sendBox: {
    flex: 0.2,
    marginBottom: 30,
    borderWidth: 1,
    width: '70%',
  },
  nameBar: {
    fontSize: 15,
    backgroundColor: 'ghostwhite',
    textAlign: 'center',
    padding: 4,
    marginTop: 5,
  },
  authorize: {
    width: '100%',
    padding: 5,
    marginTop: 5,
    textAlign: 'center',
    backgroundColor: '#008B8B',
    color: 'ghostwhite',
    marginBottom: 15
  },
  back: {
    width: '100%',
    padding: 5,
    marginTop: 5,
    textAlign: 'center',
    backgroundColor: '#F08080',
    color: 'ghostwhite',
  }
});