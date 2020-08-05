import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  ScrollView,
  Dimensions,
} from 'react-native';
import Header from '../../components/header';
import Antrian from '../../components/antrian';
import Menu from '../../components/menu';
import Banner from '../../components/banner';
import ApiBerita from '../../components/api';

const screenHeight = Dimensions.get('window').height;
class Home extends Component {
  render() {
    return (
      <View style={styles.mainContainer}>
        <Header />
          <ScrollView>
            <Antrian />
            <Menu />
            <Banner />
            <ApiBerita/>
          </ScrollView>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  mainContainer: {
    padding: 17,
  },
});

export default Home;
