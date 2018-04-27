import React, { Component } from 'react';
import { TouchableOpacity, TouchableHighlight } from 'react-native';
import { StackNavigator} from 'react-navigation'
import { Ionicons } from "@expo/vector-icons";
import SettingsScreen from './SettingsScreen'
import DrawerNav from "./DrawerNav";
import App from "./App2"
import People from "./People";
import Login from "./Login";
import Register from "./Register";

export default class App3 extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      username: '',
      password: '',
      token: '',
    };
  }

  render() {
    console.log('@@@@@@ : ',this.props)
    return(
      <StackNav />
    )
  }
}

const StackNav = StackNavigator({
  Main: {
    screen: App,
    navigationOptions: ({ navigation }) => ({
      title: "타인의 삶",
      headerLeft: (
        <TouchableOpacity onPress={() => navigation.navigate('DrawerOpen')}>
          <Ionicons name="ios-menu" size={30} />
        </TouchableOpacity>
      ),
      headerRight: (
        <TouchableOpacity onPress={() => navigation.navigate("Login")}>
          <Ionicons name="ios-settings" size={30} />
        </TouchableOpacity>
      ),
      headerStyle: { paddingRight: 10, paddingLeft: 10 }
    })
  },
  Login: {
    screen: Login,
    navigationOptions: (props) => ({
      title: "L O G I N",
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

// export default StackNav = StackNavigator({
//     Main: {
//       screen: App,
//       navigationOptions:({navigation}) => ({
//           title: "Home",
//           headerLeft:(
//             <TouchableOpacity onPress={() => navigation.navigate('DrawerOpen')}>
//               <Ionicons name="ios-menu" size={30} />
//             </TouchableOpacity>
//           ),
//           headerRight:(
//             <TouchableOpacity onPress={() => navigation.navigate("Login")}>
//               <Ionicons name="ios-settings" size={30} />
//             </TouchableOpacity>
//           ),
//           headerStyle: { paddingRight: 10, paddingLeft: 10 }
//       })
//     },
//     Login: {
//       screen: Login,
//       navigationOptions: (props) => ({
//           title: "L O G I N",
//       })
//     },
//     People: {
//       screen: People,
//       navigationOptions: (props) => ({
//         title: props.navigation.state.params.name
//       })
//     },
//     Register: {
//       screen: Register,
//       navigationOptions: (props) => ({
//         title: "R E G I S T E R",
//       })
//   }
// })
