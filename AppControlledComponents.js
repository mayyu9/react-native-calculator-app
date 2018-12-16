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
    this.state={uname: '', pword:'' };
    this.loginBtnHandler = this.loginBtnHandler.bind(this);
  }
  loginBtnHandler(){
    //const username = this._username._lastNativeText;
    //const password = this._password._lastNativeText;
    console.log(this.state.uname+' '+ this.state.pword);
  }
  render() {

    return (
      <View style={styles.container}>
        <Text>User Name</Text>
        <TextInput style={{borderColor: 'black', borderBottomWidth: 1, marginBottom: 10}}
          defaultValue={this.state.uname}
          onChangeText = {text => this.setState({uname:text})} />

        <Text>Password</Text>
        <TextInput style={{ borderColor: 'black', borderBottomWidth: 1, marginBottom: 20}}
          defaultValue={this.state.pword}
          onChangeText = {text => this.setState({pword:text})} />
        <Button title= "Login" onPress={this.loginBtnHandler} />

        <Text>{this.state.uname} { this.state.pword}</Text>
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
