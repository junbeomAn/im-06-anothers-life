import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, ScrollView, ImageBackground } from 'react-native';
import { LinearGradient } from 'expo';

function UserLists({ user }) {
  const admin = '관리자';
  const guest = '일반회원';
  return (
    <View style={styles.eachUserBox}>
      <View style={styles.eachUser}>
        <Text style={styles.text}>{user.username}</Text>
        <Text style={styles.text}>{user.email}</Text>
        <Text style={styles.text}>{(user.admin) ? admin : guest }</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  eachUserBox: {
    marginBottom: 30,
    borderWidth: 1,
    borderColor: 'red',
  },
  eachUser: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 80,
  },
  text: {
    color: 'ghostwhite',
    fontSize: 15,
    paddingBottom: 8,
  },
});

export default UserLists;