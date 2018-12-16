/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TextInput} from 'react-native';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Hello World !!!'+
    'welcome to my world chitti !!!',
});

type Props = {};
export default class App extends Component<Props> {
  constructor(props){
    super(props);
    this.state={text: 'useless plceholder'};
    this.changeText = this.changeText.bind(this);
  }
  changeText(newText){
    this.setState({
      text:newText
      });
  }
  render() {
    return (
      <View style={styles.container}>
        <TextInput style={{height: 40, borderColor: 'black', borderWidth: 1}}
          onChangeText = {this.changeText}
          value = {this.state.text} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
