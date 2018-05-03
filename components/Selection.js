import React from 'react';
import { StyleSheet, Text, View, Image, ImageBackground } from 'react-native';

export default class Selection extends React.Component {
  constructor(props){
    super(props)
  }

  render() {
    return (
      <View style={styles.eachPersonBox}>
        <View style={styles.eachPerson}>
          <ImageBackground source={{uri: this.props.item.img_two}} style={styles.photos}>
            <Text style={styles.text}>{this.props.item.name}</Text>
          </ImageBackground>
          <View style={styles.overlay}/>
        </View>     
      </View>
    );
  };
}

const styles = StyleSheet.create({
  eachPersonBox:{
  },
  eachPerson: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 160,
  },
  photos:{
    flex: 1,
    flexWrap: 'wrap',
    flexDirection: "row",
    justifyContent:'center',
    alignItems: 'center',
    width: '100%'
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