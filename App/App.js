/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { StackNavigator } from 'react-navigation';

import InitialScene from './scenes/InitialScene';

const MainNavigator = StackNavigator(
  {
    InitialScene: { screen: InitialScene },
  },
  {
    initialRouteName: 'InitialScene',
    headerMode: 'none',
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
