import React, {Component} from 'react';
import { StyleSheet, Text, View, Image, ScrollView, ImageBackground } from 'react-native';
import { LinearGradient } from 'expo';

function People(props) {
  var {name, description, img_one, img_two, schedule} = props.navigation.state.params;
    return (
      <View style={styles.container}>
          <ImageBackground style={styles.photo} source={{uri: img_one}}>
          <LinearGradient colors={['transparent', 'rgba(0,0,0,0.6)', 'rgba(0,0,0,1)']} style={styles.gradient}>
            <View style={styles.opacity}>
            <View style={styles.topHalf}/>
            <View style={styles.description}>
                  <Text style={styles.desText}>{description}</Text>
            </View>
            </View>
            </LinearGradient>
          </ImageBackground>
          <View style={styles.bottom}>
              <ScrollView style={styles.scroll}>
                <View style={styles.padding}>
                  {schedule.map((listItem, index) => {
                    var result = `${listItem.time}     ${listItem.task}\n`;
                    return <View style={styles.schedule} key={index}><Text style={styles.schFont}>{result}</Text></View>;
                  })}
                </View>
              </ScrollView>
          </View>
      </View>
    );
  }
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  photo: {
    display: 'flex',
    height: '50%'
  },
  opacity: {
    backgroundColor: 'rgba(255,255,255, 0.2)',
    display: 'flex',
    height: '100%'
  },
  gradient: {
    display: 'flex',
    height: '100%'
  },
  topHalf: {
    flex: 1
  },
  description: {
    padding: 10
  },
  desText: {
    color: 'rgb(229,229,229)',
    fontSize: 20,
    lineHeight: 30,
    padding: 8,
    paddingBottom: 15,
    textAlign: 'center'
  },
  bottom: {
    display: 'flex',
    backgroundColor: '#f3f4f7',
    height: '50%',
  },
  scroll: {
    flex: 4,
    paddingBottom: 10
  },
  schedule: {
    borderTopWidth: 1,
    borderColor: '#e5e5e5',
    padding: 5
  },
  schFont: {
    lineHeight: 20,
    fontSize: 13,
  }
});

export default People;