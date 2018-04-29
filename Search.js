import React from 'react';
import { ThemeProvider, StyleSheet, Text, View, TextInput, Modal } from 'react-native';

export default class Search extends React.Component {
  constructor(props) {
    super(props)
    this.state = {};
  }

  render() { // screenProps === 데이터
    const { screenProps } = this.props;
    console.log(screenProps); 
    return (
      <View>
        <TextInput placeholder="입력">1111</TextInput>
        <ThemeProvider ><Toolbar leftElement="menu" centerElement="Searchable" searchable={{ autoFocus: true, placeholder: 'Search', }} /></ThemeProvider> 
      </View>
    )
  }
}