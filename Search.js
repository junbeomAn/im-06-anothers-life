import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class App3 extends React.Component {
  constructor(props) {
    super(props)
    this.state = {};
  }

  render() {
    return (
      <View>
        <StackNav screenProps={this.props.data} />
      </View>
    )
  }
}