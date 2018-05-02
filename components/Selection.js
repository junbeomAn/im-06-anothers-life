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
        <View style={styles.overlay}/>            
      </View>
    );
  };
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-around",
    flexWrap: 'wrap',
  },
  photos:{
    flex: 1,
    flexWrap: 'wrap',
    flexDirection: "row",
    justifyContent:'center',
    alignItems: 'center'
  },
  text:{
    color: 'white',
    fontSize: 20,
    paddingTop: 70,
    fontFamily: 'DaehanB'
    
  },
  overlay:{
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(88, 88, 88, 0.4)"
  }
});