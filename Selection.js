import React from 'react';
import { StyleSheet, Text, View, Image, ImageBackground } from 'react-native';

export default class Selection extends React.Component {
  constructor(props){
    super(props)
  }

  render() {
    return (
      <View style={styles.container}>
          <ImageBackground source={{uri: this.props.item.img_two}} style={styles.photos}>
          <Text style={styles.text}>{this.props.item.name}</Text>
        </ImageBackground>              
      </View>
    );
  };
}

const styles = StyleSheet.create({
  container:{
    // flexDirection: 'row',
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-around",
    flexWrap: 'wrap',
  },
  photos:{
    flex: 1,
    flexWrap: 'wrap',
    flexDirection: "row",
    opacity: 0.79,
    justifyContent:'center',
    alignItems: 'center'
  },
  text:{
    color: 'ghostwhite',
    fontSize: 20,
    fontWeight: 'bold',
  }
});