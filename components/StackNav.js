import React from 'react';
import { View, TouchableOpacity, TouchableHighlight, AsyncStorage } from 'react-native';
import { StackNavigator, TabNavigator} from 'react-navigation'
import { Ionicons } from "@expo/vector-icons";
import Logout from './Logout';
import Main from "./Main";
import People from "./People";
import Login from "./Login";
import Register from "./Register";
import MyPage from "./MyPage";
import Search from "./Search";
import DrawerNav from "./DrawerNav";

export default class Stack extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
    };
  }

  render() {
    // stack nav의 모든 screen 에서 쓸 수 있음.
    this.props.data.method = this.props.logOut; 
    this.props.data.method2 = this.props.pick;
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
        <TouchableOpacity onPress={props.screenProps.method2(props.navigation.state.params)}>
          <Ionicons name="md-person-add" size={30} />
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
  }
}, {  
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

