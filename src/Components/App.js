/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Header, Button } from './Common';

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <View>
        <Header headerText="Auth" />
        <Text>My new app</Text>
      </View>
    );
  }
}
