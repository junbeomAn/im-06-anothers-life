import React, { Component } from 'react';
import { View, TouchableOpacity, TouchableHighlight, AsyncStorage } from 'react-native';
import { StackNavigator, TabNavigator} from 'react-navigation'
import { Ionicons } from "@expo/vector-icons";
import SettingsScreen from './SettingsScreen'
import Main from "./Main"
import People from "./People";
import Login from "./Login";
import Register from "./Register";

export default class App3 extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      token: '',
    };
  }

  componentDidMount() {  
  }

  render() {
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
        <TouchableOpacity onPress={() => props.navigation.navigate('DrawerOpen')}>
          <Ionicons name="ios-menu" size={30} />
        </TouchableOpacity>
      ),
      headerRight: (
        <TouchableOpacity onPress={() => props.navigation.navigate("SettingsScreen")}>
          <Ionicons name="ios-settings" size={30} />
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
  Register: {
    screen: Register,
    navigationOptions: (props) => ({
      title: "R E G I S T E R",
    })
  }
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

