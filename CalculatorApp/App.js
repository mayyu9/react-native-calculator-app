import React, {Component} from 'react';
import {View, Text, StyleSheet, Button, TouchableOpacity} from 'react-native';

export default class App extends Component{
  constructor(props){
    super(props);
    this.state={resultText: '',calculationText:""};
    this.operations = ['Del','+', '-', '*', '/'];
  }

  // this function avoids app crshing when we have eval(22+)
  // here if we have any operator as last character then we return false, which will not call the
  // calculate function.
  validate(){
    const text = this.state.resultText;
    switch(text.slice(-1)){
      case '+':
      case '-':
      case '*':
      case '/':
        return false;
    }
    return true;
  }

  calculateText(){
    const text = this.state.resultText;
    this.setState({calculationText: eval(text)});
  }

  btnPressed(text){
    if(text === '='){
      return this.validate() && this.calculateText()
    }
    this.setState((prevState) => {
      return {resultText: prevState.resultText + text}
    });
  }

  operate(operator){
    switch(operator){
      case 'Del':
        if(this.state.resultText == "") return
        let text = this.state.resultText.split('');
        text.pop();
        this.setState( {resultText: text.join('')});
        break;
        case '+':
        case '-':
        case '*':
        case '/':
        const lastChar = this.state.resultText.split('').pop();
        // below line of code is to remove adding duplicate operators simultaneously
        if(this.operations.indexOf(lastChar) > 0 ) return
          // check if the user has pressed any numbers are not
          if(this.state.resultText == "") return
          this.setState({ resultText: this.state.resultText + operator});
    }
  }
  render(){
    let rows =[];
    let nums = [[1,2,3],[4,5,6],[7,8,9],['.',0,'=']];
    for(let i=0; i<4; i++){
      let row =[];
      for(let j=0; j<3; j++){
        row.push(<TouchableOpacity key={nums[i][j]} onPress={() => this.btnPressed(nums[i][j])} style={styles.btn}>
          <Text style={styles.btnText}>{nums[i][j]}</Text>
          </TouchableOpacity>
        )
      }
      rows.push(<View key={i} style={styles.row}>{row}</View>)
    }

    let ops = [];
    for(let i=0; i<5; i++){
      ops.push(<TouchableOpacity key={this.operations[i]} onPress = {() => this.operate(this.operations[i])} style={styles.btn}>
        <Text style={styles.btnText}>{this.operations[i]}</Text>
        </TouchableOpacity>
      )
    }

    return(
      <View style={styles.container}>
        <View style={styles.result}>
          <Text style={styles.resultText}>
            {this.state.resultText}
          </Text>
        </View>
        <View style={styles.calculation}>
          <Text style={styles.calculationText}>
          {this.state.calculationText}
          </Text>
        </View>
        <View style={styles.buttons}>
          <View style={styles.numbers}>
            {rows}
          </View>
          <View style={styles.operations}>
            {ops}
          </View>
        </View>
      </View>
    );
  }
}

const styles= StyleSheet.create({
  container:{
    flex: 1
  },
  btn:{
    flex: 1,
    alignItems: 'center',
    alignSelf: 'stretch',
    justifyContent: 'center'
  },
  btnText:{
    fontSize:30,
    color:'white'
  },
  result:{
    flex:2,
    backgroundColor:'white',
    justifyContent:'center',
    alignItems:'flex-end'
  },
  resultText:{
    fontSize: 34,
    fontFamily:'Arial',
    color:'black'
  },
  calculation:{
    flex:1,
    backgroundColor:'white',
    justifyContent:'center',
    alignItems:'flex-end'
  },
  calculationText:{
    fontSize: 24,
    fontFamily:'Arial',
    color:'black'
  },
  buttons:{
    flex:7,
    flexDirection:'row'
  },
  numbers:{
    flex:3,
    backgroundColor:'#454246',
    color: 'white'
  },
  row:{
    flex: 1,
    flexDirection:'row',
    justifyContent:'space-around',
    alignItems:'center'
  },
  operations:{
    flex:1,
    justifyContent:'space-around',
    alignItems:'stretch',
    backgroundColor: '#656265',
    color:'white'
  },
});
