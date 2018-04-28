import React, {Component} from 'react';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';

function People(props) {
  var {name, description, img_one, img_two, schedule} = props.navigation.state.params;
    return (
      <View style={styles.container}>
        <Image style={styles.photo} source={{uri: img_two}}/>
        <View style={styles.description}>
          <Text>{description}</Text>
        </View>
        <View style={styles.schedule}>
        <ScrollView>
          <Text>
            {schedule.map(listItem => {
              var result = `${listItem.time} : ${listItem.task}\n`;
              return result;
            })}
          </Text>
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
    flex: 3,
    alignItems:'center'
  },
  description: {
    flex: 1.5,
    borderTopWidth: 3,
    borderColor: 'grey',
    backgroundColor: '#f0e2e0'
  },
  schedule: {
    flex: 4,
    backgroundColor: '#f1ded3',
    borderTopWidth: 3,
    borderColor: 'grey'
  }
});

export default People;