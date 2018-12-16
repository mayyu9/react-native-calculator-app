/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TextInput, Button} from 'react-native';

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
    //this.state={uname: '', pword:'' };
    this.loginBtnHandler = this.loginBtnHandler.bind(this);
  }
  loginBtnHandler(){
    const username = this._username._lastNativeText;
    const password = this._password._lastNativeText;
    // this.setState({
    //   uname:username,
    //   pword:password
    //   })
  }
  render() {

    return (
      <View style={styles.container}>
        <Text>User Name</Text>
        <TextInput style={{borderColor: 'black', borderBottomWidth: 1, marginBottom: 10}}
          ref = { input => this._username=input} />

        <Text>Password</Text>
        <TextInput style={{ borderColor: 'black', borderBottomWidth: 1, marginBottom: 20}}
          ref = { input => this._password=input} />
        <Button title= "Login" onPress={this.loginBtnHandler} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 30,
    backgroundColor: '#F5FCFF',
  },
});
