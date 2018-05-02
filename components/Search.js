import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image, ScrollView, ImageBackground } from 'react-native';
import { Font, AppLoading } from 'expo';
import { LinearGradient } from 'expo';

export default class Search extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      text: '',
      data: this.props.screenProps,
      specific: '',
    };
  }
  
  _search = (name) => {
    this.state.data.map(item => {
      if (item.name === name) {
        return this.setState({ specific: item })
      }
    })
  }

  render() {
    return (
      <View style={styles.containerSearch}>
        <View>
          <TextInput
            style={styles.searchBar}
            placeholder='검색명을 입력하세요'
            onChangeText={(text) => this._search(text)}>
          </TextInput>
        </View>

        {this.state.specific ? 
          <View style={styles.container}>
            <ImageBackground style={styles.photo} source={{ uri: this.state.specific.img_one }}>
              <LinearGradient colors={['transparent', 'rgba(0,0,0,0.6)', 'rgba(0,0,0,1)']} style={styles.gradient}>
                <View style={styles.opacity}>
                  <View style={styles.topHalf} />
                  <View style={styles.description}>
                    <Text style={styles.desText}>{this.state.specific.description}</Text>
                  </View>
                </View>
              </LinearGradient>
            </ImageBackground>
            <View style={styles.bottom}>
              <ScrollView style={styles.scroll}>
                <View style={styles.padding}>
                  {this.state.specific.schedule.map((listItem, index)=> {
                    var result = `${listItem.time}     ${listItem.task}\n`;
                    return <View style={styles.schedule} key={index}><Text style={styles.schFont}>{result}</Text></View>;
                  })}
                </View>
              </ScrollView>
            </View>
          </View> : <Text>Nothing</Text>}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  containerSearch:{
    flex: 1,
    alignItems: 'center',
  },
  searchBar:{
    padding: 3,
    width: 250,
    borderWidth: 1,
    borderColor: 'darkgrey',
    textAlign: 'center',
  },
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