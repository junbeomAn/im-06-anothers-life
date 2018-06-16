import React from 'react';
import { StyleSheet, Text, View, ImageBackground} from 'react-native';
import {LinearGradient} from 'expo';

export default class Developers extends React.Component {
  constructor(props) {
    super(props);
    // this.state = {
    //   token: true
    // }
  }

  render() {
    // const { screenProps } = this.props;
    return (
      <View style={styles.container}>
        <View style={styles.card}>
          <ImageBackground
            source={{uri: 'https://scontent-frt3-2.cdninstagram.com/vp/67caabf6aef96a29a000a586e938be93/5B28048E/t51.2885-15/s640x640/sh0.08/e35/c135.0.810.810/28153522_896443677182091_6951817946293338112_n.jpg'}}
            style={styles.photo}>
            <LinearGradient
              colors={['transparent', 'rgba(0,0,0,1)']}
              style={styles.gradient}
              start={{ x: 0, y: 1 }}
              end={{ x: 1, y: 1 }}
            />
          </ImageBackground>
          <View style={styles.info}>
            <Text style={styles.name}>이슬</Text>
            <Text style={{ color: 'white' }}>sudaseul@gmail.com</Text>
          </View>
        </View>

        <View style={styles.space}/>

        <View style={styles.card}>
        <ImageBackground
            source={{uri: 'http://ko.areumdri.wikidok.net/api/File/Real/57beaad006441c2264e8ac10'}}
            style={styles.photo}>
            <LinearGradient
              colors={['transparent', 'rgba(0,0,0,1)']}
              style={styles.gradient}
              start={{ x: 0, y: 1 }}
              end={{ x: 1, y: 1 }}
            />
        </ImageBackground>
          <View style={styles.info}>
            <Text style={styles.name}>안준범</Text>
            <Text style={{ color: 'white' }}>wnsqja8744@gmail.com</Text>
          </View>
        </View>

        <View style={styles.space}/>

        <View style={styles.card}>
        <ImageBackground
            source={{uri: 'http://cfile238.uf.daum.net/image/25228F40513D67570AF928'}}
            style={styles.photo}>
            <LinearGradient
              colors={['transparent', 'rgba(0,0,0,1)']}
              style={styles.gradient}
              start={{ x: 0, y: 1 }}
              end={{ x: 1, y: 1 }}
            />
        </ImageBackground>
          <View style={styles.info}>
            <Text style={styles.name}>한영재</Text>
            <Text style={{ color: 'white' }}>han6318@naver.com</Text>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  gradient: {
    display: 'flex',
    height: '100%',
    width: '100%'
  },
  space: {
    height: 10,
  },
  card: {
    display: 'flex',
    height: '30%',
    width: '80%',
    flexDirection: 'row',
    backgroundColor: '#000000'
  },
  photo: {
    display: 'flex',
    height: '100%',
    width: '40%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  name: {
    fontSize: 25,
    color: 'white',
    paddingBottom: 13
  },
  info: {
    display: 'flex',
    height: '100%',
    width: '60%',
    justifyContent: 'center',
    alignItems: 'center',
  }
})