import React from 'react';
import { StyleSheet, Text, View, ActivityIndicator, TouchableOpacity, TextInput, ScrollView, KeyboardAvoidingView } from 'react-native';
import Expo, { Font } from 'expo';
import { setCustomText } from 'react-native-global-props';
import UserLists from './UserLists';
import decode from 'jwt-decode';

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

  // Admin 권한으로 회원 리스트 불러오기
  _getUserList = (token) => {
    const option = {
      headers: {
        'x-access-token': token
      }
    }

    fetch('http://10.130.104.146:3000/api/user/list', option)
      .then(response => response.json())
      .then(json => this.setState({
        userList: json
      }));
      
  }

  // 일반 유저에게 Admin 권한 부여
  _giveAdmin = (token) => {
    const option = {
      method: 'post',
      headers: {
        'x-access-token': token
      }
    }

    fetch(`http://10.130.104.146:3000/api/user/assign-admin/${this.state.username}`, option)
      .then(response => response.json())
      .then(json => {
        if (json.success) alert(this.state.username + "님에게 관리자 권한을 부여 하였습니다");
        this._getUserList(this.props.token, json.success);
        // return;
      })     
  }


  render() {
    const { userList } = this.state;
    return (
      <KeyboardAvoidingView style={styles.container} behavior="padding">
        <View style={styles.titleBox}>
          {!userList ? <Text style={styles.title}> 데이터 수집 중 </Text> : 
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
          <TouchableOpacity onPress={this._giveAdmin.bind(this, this.props.token)}>
            <Text style={styles.authorize}>관리자 권한 부여</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={this.props.toggle}>
            <Text style={styles.back}>Go Guest Sight</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2F4661',
    width: '100%',
    borderWidth: 1,
  },
  titleBox: {
    flex: 0.1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30,
  },
  title: {
    fontSize: 20,
    color: '#F9D3A5',
  },
  middleBox: {
    flex: 0.6,
    marginBottom: 20,
    width: '78%',
    paddingTop: 10,
    paddingBottom: 5,
  },
  userBox: {
    display: 'flex',
  },
  sendBox: {
    flex: 0.2,
    marginBottom: 30,
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
    color: '#EFE1E3',
    marginBottom: 15
  },
  back: {
    width: '100%',
    padding: 5,
    marginTop: 5,
    textAlign: 'center',
    backgroundColor: '#E4AFB9',
    color: '#2F4661',
  }
});