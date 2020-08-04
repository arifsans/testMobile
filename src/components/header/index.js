import React from 'react';
import {StyleSheet, Text, View, Image, TextInput} from 'react-native';
import logo from '../../assets/images/Logo.png';
import userIcon from '../../assets/icons/userIcon.png';

export default function Header() {
  return (
    <View>
      <View style={styles.header}>
        <Image source={logo} style={styles.logo} />
        <View style={styles.profile}>
          <Text style={{paddingRight: 10}}>Hi, Bagus</Text>
          <Image source={userIcon} style={styles.userIcon} />
        </View>
      </View>
      <View style={styles.searchBar}>
        <TextInput placeholder={'Cari Klinik / Rumah Sakit'} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  logo: {width: 135, height: 40},
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  userIcon: {
    width: 21,
    height: 21,
  },
  profile: {flexDirection: 'row', alignItems: 'center'},
  searchBar: {
    borderWidth: 2,
    opacity: 1,
    borderColor: '#F4F4F4',
    backgroundColor: '#F4F4F4',
    borderRadius: 25,
    fontSize: 12,
    fontFamily: 'Rubik-Medium',
    color: '#B7B7B7',
    margin: 10,
  },
});
