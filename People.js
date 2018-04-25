import React, {Component} from 'react';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';

function People() {
  console.log(peopleData['OprahWinfrey'].photo);
    return (
      <View style={styles.container}>
        <Image 
        style={styles.photo} resizeMode="contain" 
        source={peopleData['OprahWinfrey'].photo} />
        <View style={styles.description}><Text>{peopleData['OprahWinfrey'].text}</Text></View>
        <View style={styles.schedule}>
        <ScrollView>
          <Text>{peopleData['OprahWinfrey'].list.map(listItem => {
              return listItem + '\n';
            })}</Text>
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
    alignSelf:'center'
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

const peopleData = {
  OprahWinfrey: {
    photo: require('./assets/oprah-winfrey.jpg'),
    text: '오프라 윈프리는 가난과 인종차별이라는 장애물을 뛰어넘고 인간에 대한 공감과 진실한 소통으로 가장 낮은 곳에서 절정의 인생에 이른 흑인 여성입니다. 오프라 윈프리의 부지런함은 그녀의 성공의 큰 요소 중 하나였습니다. 오프라 윈프리의 삶을 살아보세요!',
    list: ['7:00AM 기상', '8:00AM 운동', '9:00AM 아침식사', '11:00PM 취침', '7:00AM 기상', '8:00AM 운동', '9:00AM 아침식사', '11:00PM 취침', '7:00AM 기상', '8:00AM 운동', '9:00AM 아침식사', '11:00PM 취침', '7:00AM 기상', '8:00AM 운동', '9:00AM 아침식사', '11:00PM 취침', '7:00AM 기상', '8:00AM 운동', '9:00AM 아침식사', '11:00PM 취침', '7:00AM 기상', '8:00AM 운동', '9:00AM 아침식사', '11:00PM 취침']
  }
}