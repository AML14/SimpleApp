/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { Platform } from 'react-native';
import { StackNavigator, TabNavigator } from 'react-navigation';

import InitialScene from './scenes/InitialScene';
import SecondScene1 from './scenes/SecondScene1';
import SecondScene2 from './scenes/SecondScene2';
import SecondScene3 from './scenes/SecondScene3';
import SecondScene4 from './scenes/SecondScene4';

const tabBarOptions = (Platform.OS === 'android') ?
  {
    style: { backgroundColor: '#303F9F' },
    indicatorStyle: { backgroundColor: '#FF4081' },
  } :
  {};

const tabNavigatorConfig = {
  backBehavior: 'none',
  tabBarPosition: 'bottom',
  tabBarOptions,
};

const SubNavigator = TabNavigator(
  {
    SecondScene1: { screen: SecondScene1 },
    SecondScene2: { screen: SecondScene2 },
    SecondScene3: { screen: SecondScene3 },
    SecondScene4: { screen: SecondScene4 },
  },
  {
    initialRouteName: 'SecondScene1',
    tabNavigatorConfig,
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
