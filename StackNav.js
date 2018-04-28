import React, { Component } from 'react';
import { View, TouchableOpacity, TouchableHighlight, AsyncStorage } from 'react-native';
import { StackNavigator, TabNavigator} from 'react-navigation'
import { Ionicons } from "@expo/vector-icons";
import SettingsScreen from './SettingsScreen';
import Main from "./Main";
import People from "./People";
import Login from "./Login";
import Register from "./Register";
import MyPage from "./MyPage";
import Search from "./Search";

export default class App3 extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      token: '',
    };
  }

  render() {
    this.props.data.method = this.props.checkSigned;
    return(      
      <View style={{ flex: 1, width: "100%"}}>
        <StackNav screenProps={this.props.data}/> 
      </View>
    )
  }
}

const StackNav = StackNavigator({
  Main: {
    screen: Main,
    navigationOptions: (props) => ({
      title: "타인의 삶",
      headerLeft: (
        <TouchableOpacity onPress={() => props.navigation.navigate('MyPage')}>
          <Ionicons name="md-person" size={30} />
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
      title: props.navigation.state.params.name
    })
  },
  MyPage: {
    screen: MyPage,
    navigaionOptions: (props) => ({
      title: "M Y P A G E"
    })
  },
  SettingsScreen: {
    screen: SettingsScreen,
    navigationOptions: (props) => ({
      title: "R E G I S T E R",
    })
  },
  Search: {
    screen: Search,
    navigationOptions: (props) => ({
      title: "S E A R C H",
    })
  },
})

// const TabNav = TabNavigator({
//   HOME: { screen: SettingsScreen },
//   // LOGIN: { screen: Login }
// },
//   {
//     tabBarOptions: {
//       activeTintColor: '#7567B1',
//       labelStyle: {
//         fontSize: 16,
//         fontWeight: '600'
//       },
//       tabStyle: {
//         paddingVertical: 14
//       }
//     }
//   })

