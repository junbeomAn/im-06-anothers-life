import React, { Component } from 'react';
import { TouchableOpacity } from 'react-native';
import { StackNavigator} from 'react-navigation'
import { Ionicons, FontAwesome } from "@expo/vector-icons";
import SettingsScreen from './SettingsScreen'
// import DrawerNav from "./DrawerNav";
import App from "./App2"
import People from "./People";
import Login from "./Login";
import Register from "./Register";
import Authen from "./Authen";

export const SignedIn = StackNavigator({    // 로그인 된 상태의 페이지 모임
    Main: {
        screen: App,
        navigationOptions:({navigation}) => ({
            title: "Home",
            headerLeft:(
              <TouchableOpacity onPress={() => navigation.navigate('Settings')}>
                {/* <Ionicons name="ios-menu" size={30} /> */}
                <FontAwesome name="star" size={25  }/>
              </TouchableOpacity>
            ),
            headerRight:(
              <TouchableOpacity onPress={() => navigation.navigate('Settings')}>
                <Ionicons name="ios-settings" size={30} />
              </TouchableOpacity>
            ),
            headerStyle: { paddingRight: 10, paddingLeft: 10 }
        })
    },
    Authen: {
      screen: Authen,
      navigationOptions: (props) => ({
        title: "Authen",
      })
    },
    Login: {
      screen: Login,
      navigationOptions: (props) => ({
        title: "Login",
      })
    },
    Settings: {
        screen: SettingsScreen,
        navigationOptions: (props) => ({
            title: "Settings",
        })
    },
    People: {
        screen: People,
        navigationOptions: (props) => ({
          title: props.navigation.state.params.name
        })
    }    
    
}, {
  initialRouteName: 'Main'
})

export const SignedOut = StackNavigator({ // 로그인안된상태의 페이지모임. 필요없어보임
  Login: {
    screen: Login,
    navigationOptions: (props) => ({
      title: "L O G I N"       
    })
  },

  Register: {
    screen: Register,
    navigationOptions: (props) => ({
      title: "Register",
    })
  }
}, {
  initialRouteName: 'Login'
});
