import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import { Home, Detail } from '../../pages';

const Stack = createStackNavigator();

const  Router = () => {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={Home} options={{headerShown: false}}/>
      <Stack.Screen name="Detail" component={Detail} />
    </Stack.Navigator>
  )
}

export default Router;
