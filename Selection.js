import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export default class Selection extends React.Component {

  render() {
    return (
      <View >    
         <View style={styles.select}>
            <View style={{width: 130, height: 180}}>
              <Image source={require('./assets/oprah-winfrey.jpg')} style={styles.photos}/>              
            </View>
          </View>                 
      </View>
    );
  };
}

const styles = StyleSheet.create({
  photos:{
    width: 130,
    height: 170
  },
  selection: {
    height: 450, 
    flexDirection: 'row', 
    // borderColor: '#FF6E40',
    flexWrap: 'wrap',
    backgroundColor: 'transparent'
  },
  select: {
    width:130, 
    height: 180,
    flexDirection: 'row', 
    borderWidth: 1,
    borderColor: '#FF6E40',
    marginLeft: 15,
    marginTop: 30,
    borderRadius: 10
  },
 

});