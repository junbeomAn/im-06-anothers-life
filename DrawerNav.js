import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, Text, View, ActivityIndicator, StatusBar, Button, Image, FlatList } from 'react-native';
import { DrawerNavigator, TabNavigator } from 'react-navigation';
import Main from './Main';
import Logout from './Logout';

class MyHomeScreen extends React.Component {
  static navigationOptions = {
    drawerLabel: 'Home',
    drawerIcon: ({ tintColor }) => (
      <Image
        source={require('./assets/icon.png')}
        style={[styles.icon, {tintColor: tintColor}]}
      />
    ),
  };

  render() {
    return (
      <Button
        onPress={() => this.props.navigation.navigate('Notifications')}
        title="Go to notifications"
      />
    );
  }
}

class MyNotificationsScreen extends React.Component {
  static navigationOptions = {
    drawerLabel: 'Notifications',
    drawerIcon: ({ tintColor }) => (
      <Image
        source={require('./assets/icon.png')}
        style={[styles.icon, {tintColor: tintColor}]}
      />
    ),
  };

  render() {
    return (
      <Button 
        onPress={() => this.props.navigation.goBack()}
        title="Go back home"
      />
    );
  }
}

// class Logout extends React.Component {
//   static navigationOptions = {
//     drawerLabel: 'Settings',
//     drawerIcon: ({ tintColor }) => (
//       <Image
//         source={require('./assets/icon.png')}
//         style={[styles.icon, {tintColor: tintColor}]}
//       />
//     ),
//   };

//   render() {
//     return (
//       <Button
//         onPress={() => this.props.navigation.goBack()}
//         title="Now Settings!"
//       />
//     );
//   }
// }

const styles = StyleSheet.create({
  icon: {
    width: 24,
    height: 24,
  },
});

export default DrawerNav = DrawerNavigator({
  Home: {
    screen: Main,
  },
  Logout: {
    screen: Logout //(props) => <Logout screenProps={props.screenProps}/>  
},
  Settings: {
    screen: Logout
  }
});
