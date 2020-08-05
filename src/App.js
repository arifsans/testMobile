import React, {Component} from 'react';
import Router from './config/router';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';

class App extends Component {
  render() {
    return (
      <NavigationContainer>
      <Router/>
      </NavigationContainer>
    );
  }
}
export default App;
