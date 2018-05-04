import React from 'react';
import { View, TouchableOpacity, TouchableHighlight, AsyncStorage } from 'react-native';
import { StackNavigator, TabNavigator} from 'react-navigation'
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import Expo, { Notifications } from 'expo';

import Logout from './auth/Logout';
import Main from "./Main";
import People from "./People";
import Login from "./auth/Login";
import Register from "./auth/Register";
import MyPage from "./mypage/MyPage";
import Search from "./Search";
import DrawerNav from "./DrawerNav";
import Exit from "./mypage/Exit";
import Update from "./mypage/Update";
import Developers from "./mypage/Developers";


export default class Stack extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      // notiState: 'notifications-active'
    };
  }

  // _activateNotiIcon() {
  //   this.setState({
  //     notiState: 'notifications-active'
  //   });
  // }

  // _inActivateNotiIcon() {
  //   this.setState({
  //     notiState: 'notifications-off'
  //   });
  // }

  render() {
    // stack nav의 모든 screen 에서 쓸 수 있음.
    this.props.data.method = this.props.logOut;
    this.props.data.method2 = this.props.pick;
    this.props.data.reject = this.props.reject;
    // this.props.data.activateIcon = this._activateNotiIcon.bind(this);
    // this.props.data.inactivateIcon = this._inActivateNotiIcon.bind(this); // 함수
    this.props.data.token = this.props.token;
    this.props.data.username = this.props.username;
    this.props.data.target = this.props.target;
     
    return(      
      <View style={{ flex: 1, width: "100%"}}>
        <StackNav screenProps={this.props.data}/> 
      </View>
    )
  }
} 

const StackNav = StackNavigator({
  Main: {
    screen: DrawerNav,
    navigationOptions: (props) => (
      {
      title: "타인의 삶",
      headerLeft: (
        <TouchableOpacity onPress={() => props.navigation.navigate('DrawerOpen')}>
          <Ionicons name="ios-menu" size={30} />
        </TouchableOpacity>
      ),
      headerRight: (
        <TouchableOpacity onPress={() => props.navigation.navigate("Search")}>
          <Ionicons name="ios-search" size={30} />
        </TouchableOpacity>
      ),
      headerStyle: { paddingRight: 10, paddingLeft: 10 }
    })
  },
  People: {
    screen: People,
    navigationOptions: (props) => ({
      title: props.navigation.state.params.name,
      headerLeft: ( 
        <TouchableOpacity onPress={() => props.navigation.goBack()}>
          <Ionicons name="ios-arrow-down" size={30} />
        </TouchableOpacity>
      ),
      headerRight: (
        <TouchableOpacity onPress={() => {
            if(props.screenProps.target.name === props.navigation.state.params.name){
              props.screenProps.reject();
              // props.screenProps.notiState = 'notifications-off';              
              // props.screenProps.activateIcon();              
              alert(`${props.navigation.state.params.name}의 삶의 추적을 중지합니다`);
            } else {
              props.screenProps.method2(props.navigation.state.params);
              // props.screenProps.notiState = 'notifications-active';              
              // props.screenProps.inactivateIcon();              
              alert(`${props.navigation.state.params.name}의 삶의 추적을 시작합니다`);
            }           
          }}>
          <MaterialIcons name='notifications-active' size={25} />
        </TouchableOpacity>
      ),
      headerStyle: { paddingRight: 10, paddingLeft: 10 }
    })
  },
  MyPage: {
    screen: MyPage,
    navigaionOptions: (props) => ({
      title: "M Y P A G E",
      headerLeft: (
        <TouchableOpacity onPress={() => props.navigation.goBack()}>
          <Ionicons name="ios-arrow-down" size={30} />
        </TouchableOpacity>
      ),
      headerStyle: { paddingRight: 10, paddingLeft: 10 }
    })
  },
  Logout: {
    screen: Logout,
    navigationOptions: (props) => ({
      title: "R E G I S T E R",
      headerLeft: (
        <TouchableOpacity onPress={() => props.navigation.goBack()}>
          <Ionicons name="ios-arrow-down" size={30} />
        </TouchableOpacity>
      ),
      headerStyle: { paddingRight: 10, paddingLeft: 10 }
    })
  },
  Search: {
    screen: Search,
    navigationOptions: (props) => ({
      title: "S E A R C H",
      headerLeft: (
        <TouchableOpacity onPress={() => props.navigation.goBack()}>
          <Ionicons name="ios-arrow-down" size={30} />
        </TouchableOpacity>
      ),
      headerStyle: { paddingRight: 10, paddingLeft: 10 }
    })
  },
  Exit: {
    screen: Exit,
    navigationOptions: (props) => ({
      title: "계 정 삭 제",
      headerLeft: (
        <TouchableOpacity onPress={() => props.navigation.goBack()}>
          <Ionicons name="ios-arrow-down" size={30} />
        </TouchableOpacity>
      ),
      headerStyle: { paddingRight: 10, paddingLeft: 10 }
    })
  },
  Update: {
    screen: Update,
    navigationOptions: (props) => ({
      title: "비 밀 번 호 변 경",
      headerLeft: (
        <TouchableOpacity onPress={() => props.navigation.goBack()}>
          <Ionicons name="ios-arrow-down" size={30} />
        </TouchableOpacity>
      ),
      headerStyle: { paddingRight: 10, paddingLeft: 10 }
    })
  },
  Developers: {
    screen: Developers,
    navigationOptions: (props) => ({
      title: "개 발 자 정 보",
      headerLeft: (
        <TouchableOpacity onPress={() => props.navigation.goBack()}>
          <Ionicons name="ios-arrow-down" size={30} />
        </TouchableOpacity>
      ),
      headerStyle: { paddingRight: 10, paddingLeft: 10 }
    })
  }
},
{  
  headerMode: 'float',
  mode: 'modal',
  navigationOptions:{
    headerBackTitle: 'back',
    gesturesEnabled: true, 
    gestureResponseDistance: {
      vertical: 300
    },
    headerTitleStyle: {
      fontFamily: 'DaehanB',
      fontWeight: undefined
    }
  },
})

