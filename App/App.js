/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { StackNavigator, TabNavigator } from 'react-navigation';

import InitialScene from './scenes/InitialScene';
import SecondScene1 from './scenes/SecondScene1';
import SecondScene2 from './scenes/SecondScene2';
import SecondScene3 from './scenes/SecondScene3';
import SecondScene4 from './scenes/SecondScene4';

const SubNavigator = TabNavigator(
  {
    SecondScene1: { screen: SecondScene1 },
    SecondScene2: { screen: SecondScene2 },
    SecondScene3: { screen: SecondScene3 },
    SecondScene4: { screen: SecondScene4 },
  },
  {
    initialRouteName: 'SecondScene1',
    backBehavior: 'none',
  },
);

const MainNavigator = StackNavigator(
  {
    InitialScene: { screen: InitialScene },
    OtherScenes: { screen: SubNavigator },
  },
  {
    initialRouteName: 'InitialScene',
  },
);

// eslint-disable-next-line react/prefer-stateless-function
export default class App extends Component {
  render() {
    return (
      <MainNavigator />
    );
  }
}
