import React from 'react';
import {StyleSheet, View, ScrollView, Text, Image} from 'react-native';
import Header from './components/header';
import Antrian from './components/antrian';
import Menu from './components/menu';
import Banner from './components/banner';
import ApiBerita from './components/api';

export default function App() {
  return (
    <View style={styles.mainContainer}>
      <Header />
      <ScrollView>
        <Antrian />
        <Menu />
        <Banner/>
        <ApiBerita/>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    padding: 17,
  },
});
