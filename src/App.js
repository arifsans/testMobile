import React from 'react';
import {
  StyleSheet,
  View,
  ScrollView,
} from 'react-native';
import Header from './components/header';
import {LinearGradient} from expo;

export default function App() {
  return (
    <View style={styles.mainContainer}>
      <Header/>
      <ScrollView>
        <View>
          <LinearGradient
          colors={['#0093DD','#8445A2','#DD127B']}
          style={{flex:1}}
          start={{x:0, y:0}}
          end={{x:1, y:1}}/>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    padding: 17,
  },
});
