import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Subscription} from './screens';
import AppNavigator from './navigator';

const App = () => {
  const Stack = createNativeStackNavigator();
  return <AppNavigator />;
};

export default App;
