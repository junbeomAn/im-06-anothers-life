import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, ScrollView, ImageBackground } from 'react-native';
import { LinearGradient } from 'expo';

function UserLists({ user }) {
  const admin = '관리자';
  const guest = '일반회원';
  return (
    <View style={styles.eachUserBox}>
      <View style={styles.eachUser}>
        <Text style={styles.name}>{user.username}</Text>
        <Text style={styles.text}>EMAIL : {user.email}</Text>
        <Text style={styles.auth}>{(user.admin) ? admin : guest }</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  eachUserBox: {
    paddingTop: 7,
    marginBottom: 30,
    backgroundColor: '#EFE6E0',
    borderWidth: 1,
    borderRadius: 10,
    borderColor: '#EFE6E0',
  },
  eachUser: {
    paddingTop: 2,
    alignItems: 'center',
    justifyContent: 'center',
    height: 80,
  },
  name: {
    color: '#303846',
    fontSize: 18,
    paddingBottom: 8,
  },
  text: {
    color: '#858B9F',
    fontSize: 15,
    paddingBottom: 8,
  },
  auth: {
    color: '#E26E84',
    fontSize: 15,
    paddingBottom: 8,
  },
});

export default UserLists;