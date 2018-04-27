import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export default class Selection extends React.Component {
  constructor(props){
    super(props)
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.inner}>
          <Image source={{uri: this.props.item.img_one}} style={styles.photos}/>              
        </View>
      </View>         
    );
  };
}

const styles = StyleSheet.create({
  container:{
    // flex: 1,
    flexWrap: 'wrap',
    justifyContent: 'center'
  },
  inner:{
    // flexDirection: 'row',
  },
  photos:{
    width: 130,
    height: 170
  },
  // selection: {
  //   height: 450, 
  //   flexDirection: 'row', 
  //   flexWrap: 'wrap',
  //   backgroundColor: 'transparent'
  // },
  // select: {
  //   width:130, 
  //   height: 180,
  //   flexDirection: 'row', 
  //   borderWidth: 1,
  //   borderColor: '#FF6E40',
  //   marginLeft: 15,
  //   marginTop: 30,
  //   borderRadius: 10
  // },
});