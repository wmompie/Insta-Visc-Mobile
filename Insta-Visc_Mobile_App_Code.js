import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Picker, Image, TextInput, TouchableWithoutFeedback,KeyboardAvoidingView} from 'react-native';
//import DismissKeyboard from 'dismissKeyboard';
import { Linking } from 'react-native';
import {Keyboard} from 'react-native'
import {RFPercentage, RFValue} from 'react-native-responsive-fontsize';

import { createAppContainer } from 'react-navigation';
import { createStackNavigator} from 'react-navigation-stack';

import FirstPage from './pages/FirstPage';
import SecondPage from './pages/SecondPage';






const green = '#009432';
const black = 'black';


const styles = StyleSheet.create({

  MainContainer: {
    justifyContent:'center',
    flex: 1,
    margin: 10
  },

  TextInputStyle: {
    textAlign: 'center',
    fontSize: RFValue(24),


    height: '5%',
    width: '80%',
    borderColor: 'gray',
    borderWidth: 1.5,
    borderRadius: 5
  },

  version: {
    fontSize: RFPercentage(2),
  },

  gardco: {
    color: '#e60d2e',
    fontWeight: '500',
    fontSize: RFPercentage(3),

  },
  error: {
    color: 'red',
    fontSize: RFPercentage(3),
  },

  calculation: {
    fontSize: RFPercentage(3),
    color: 'black',
    justifyContent: 'center',
  },

  picker1: {
    fontSize: RFPercentage(3),
    width: '80%',
    height: '30%',
    justifyContent: "flex-start",
  },

  picker2: {
    fontSize: RFValue(3),
    width: '80%',
    height: '5%',
    justifyContent: "center",
    alignSelf: "center",
    backgroundColor: 'silver',
  }
});

export default class LotsOfStyles extends Component {
  constructor(){
    super();
    this.state = {
        PickerValue: '',
        PickerValue2: '',
        value: 'val',
        value1: '',
        value2: '',
        visc: '',
        time: '___',
        calculation: 'calc1',
        calculation2:'calc2',
        bool: 'true',
        first: 'false',
        second: 'true',
        error: '',
        errormsg: 'Outside of Cup Range',
        count:0,
        counter: [],


        color1: 'black',
        color2: 'black',
        color3: 'black',
        color4: 'black',
        color5: 'black',
        color6: 'black',
        color7: 'black',
        color8: 'black',
        color9: 'black',
        color10: 'black',
        color11: 'black',
        color12: 'black',
        color13: 'black',
        color14: 'black',
        color15: 'black',
        color16: 'black',
        color17: 'black',
        color18: 'black',
        color19: 'black',
        color20: 'black',
        color21: 'black',
        color22: 'black',
        color23: 'black',
        color24: 'black',
        color25: 'black',
        color26: 'black',
        color27: 'black',
        color28: 'black',
        color29: 'black',
        color30: 'black',
        color31: 'black',
        color32: 'black',
        color33: 'black',
        color34: 'black',
        color35: 'black',
        color36: 'black',
        color37: 'black',
        color38: 'black',
        color39: 'black',
        color40: 'black',
        color41: 'black',
        color42: 'black',
        color43: 'black',
        color44: 'black',
        color45: 'black',
        color46: 'black',
        color47: 'black',
        color48: 'black',
        color49: 'black',
        color50: 'black',
        color51: 'black',
        color52: 'black',
        color53: 'black',
        color54: 'black',
        color55: 'black',
        color56: 'black',
        color57: 'black',


        gator1: 'false',
        gator2: 'false',
        gator3: 'false',

    }
  };

color = (visc) => {
  if (visc < 10 || visc > 36){
    this.setState({color1: black})
  }
  else {
    this.setState({color1: green})
  }

  if (visc < 19 || visc > 156){
    this.setState({color2: black})
  }
  else {
    this.setState({color2: green})
  }

  if (visc < 64 || visc > 596){
    this.setState({color3: black})
  }
  else {
    this.setState({color3: green})
  }

  if (visc < 79 || visc > 784){
    this.setState({color4: black})
  }
  else {
    this.setState({color4: green})
  }

  if (visc < 161 || visc > 1401){
    this.setState({color5: black})
  }
  else {
    this.setState({color5: green})
  }

  if (visc < 15 || visc > 78){
    this.setState({color6: black})
  }
  else {
    this.setState({color6: green})
  }

  if (visc < 39 || visc > 238){
    this.setState({color7: black})
  }
  else {
    this.setState({color7: green})
  }

  if (visc < 63 || visc > 604){
    this.setState({color8: black})
  }
  else {
    this.setState({color8: green})
  }

  if (visc < 97 || visc > 899){
    this.setState({color9: black})
  }
  else {
    this.setState({color9: green})
  }

  if (visc < 219 || visc > 1627){
    this.setState({color10: black})
  }
  else {
    this.setState({color10: green})
  }

  if (visc < 2 || visc > 14){
    this.setState({color11: black})
  }
  else {
    this.setState({color11: green})
  }

  if (visc < 12 || visc > 40){
    this.setState({color12: black})
  }
  else {
    this.setState({color12: green})
  }

  if (visc < 25 || visc > 120){
    this.setState({color13: black})
  }
  else {
    this.setState({color13: green})
  }

  if (visc < 29 || visc > 273){
    this.setState({color14: black})
  }
  else {
    this.setState({color14: green})
  }

  if (visc < 53 || visc > 441){
    this.setState({color15: black})
  }
  else {
    this.setState({color15: green})
  }

  if (visc < 215 || visc > 1413){
    this.setState({color16: black})
  }
  else {
    this.setState({color16: green})
  }

  if (visc < 29 || visc > 273){
    this.setState({color17: black})
  }
  else {
    this.setState({color17: green})
  }

  if (visc < 34 || visc > 441){
    this.setState({color18: black})
  }
  else {
    this.setState({color18: green})
  }

  if (visc < 77 || visc > 1413){
    this.setState({color19: black})
  }
  else {
    this.setState({color19: green})
  }

  if (visc < 11 || visc > 48){
    this.setState({color20: black})
  }
  else {
    this.setState({color20: green})
  }

  if (visc < 19 || visc > 136){
    this.setState({color21: black})
  }
  else {
    this.setState({color21: green})
  }

  if (visc < 35 || visc > 320){
    this.setState({color22: black})
  }
  else {
    this.setState({color22: green})
  }

  if (visc < 167 || visc > 1125){
    this.setState({color23: black})
  }
  else {
    this.setState({color23: green})
  }

  if (visc < 7 || visc > 42){
    this.setState({color24: black})
  }
  else {
    this.setState({color24: green})
  }

  if (visc < 35 || visc > 149){
    this.setState({color25: black})
  }
  else {
    this.setState({color25: green})
  }

  if (visc < 142 || visc > 684){
    this.setState({color26: black})
  }
  else {
    this.setState({color26: green})
  }

  if (visc < 69 || visc > 545){
    this.setState({color27: black})
  }
  else {
    this.setState({color27: green})
  }

  if (visc < 2 || visc > 14){
    this.setState({color28: black})
  }
  else {
    this.setState({color28: green})
  }

  if (visc < 12 || visc > 40){
    this.setState({color29: black})
  }
  else {
    this.setState({color29: green})
  }

  if (visc < 25 || visc > 120){
    this.setState({color30: black})
  }
  else {
    this.setState({color30: green})
  }

  if (visc < 29 || visc > 273){
    this.setState({color31: black})
  }
  else {
    this.setState({color31: green})
  }

  if (visc < 34 || visc > 441){
    this.setState({color32: black})
  }
  else {
    this.setState({color32: green})
  }

  if (visc < 77 || visc > 1413){
    this.setState({color33: black})
  }
  else {
    this.setState({color33: green})
  }

  if (visc < 5 || visc > 52){
    this.setState({color34: black})
  }
  else {
    this.setState({color34: green})
  }

  if (visc < 19 || visc > 163){
    this.setState({color35: black})
  }
  else {
    this.setState({color35: green})
  }

  if (visc < 84 || visc > 823){
    this.setState({color36: black})
  }
  else {
    this.setState({color36: green})
  }

  if (visc < 187 || visc > 2611){
    this.setState({color37: black})
  }
  else {
    this.setState({color37: green})
  }

  if (visc < 38 || visc > 545){
    this.setState({color38: black})
  }
  else {
    this.setState({color38: green})
  }

  if (visc < 11 || visc > 48){
    this.setState({color39: black})
  }
  else {
    this.setState({color39: green})
  }

  if (visc < 19 || visc > 136){
    this.setState({color40: black})
  }
  else {
    this.setState({color40: green})
  }

  if (visc < 35 || visc > 320){
    this.setState({color41: black})
  }
  else {
    this.setState({color41: green})
  }

  if (visc < 167 || visc > 1125){
    this.setState({color42: black})
  }
  else {
    this.setState({color42: green})
  }

  if (visc < 7 || visc > 165){
    this.setState({color43: black})
  }
  else {
    this.setState({color43: green})
  }

  if (visc < 117 || visc > 582){
    this.setState({color44: black})
  }
  else {
    this.setState({color44: green})
  }

  if (visc < 498 || visc > 2297){
    this.setState({color45: black})
  }
  else {
    this.setState({color45: green})
  }

  if (visc < 3445 || visc > 15408){
    this.setState({color46: black})
  }
  else {
    this.setState({color46: green})
  }

  if (visc < 0 || visc > 60){
    this.setState({color47: black})
  }
  else {
    this.setState({color47: green})
  }

  if (visc < 30 || visc > 230){
    this.setState({color48: black})
  }
  else {
    this.setState({color48: green})
  }

  if (visc < 150 || visc > 830){
    this.setState({color49: black})
  }
  else {
    this.setState({color49: green})
  }

  if (visc < 230 || visc > 1100){
    this.setState({color50: black})
  }
  else {
    this.setState({color50: green})
  }

  if (visc < 460 || visc > 1800){
    this.setState({color51: black})
  }
  else {
    this.setState({color51: green})
  }

  if (visc < 70 || visc > 370){
    this.setState({color52: black})
  }
  else {
    this.setState({color52: green})
  }



}

color2 = (time) => {
  if (time < 39.89 || time > 60.05){
    this.setState({color1: black})
  }
  else {
    this.setState({color1: green})
  }

  if (time < 20.07 || time > 60.15){
    this.setState({color2: black})
  }
  else {
    this.setState({color2: green})
  }

  if (time < 11.43 || time > 60.04){
    this.setState({color3: black})
  }
  else {
    this.setState({color3: green})
  }

  if (time < 10.70 || time > 59.97){
    this.setState({color4: black})
  }
  else {
    this.setState({color4: green})
  }

  if (time < 9.99 || time > 59.99){
    this.setState({color5: black})
  }
  else {
    this.setState({color5: green})
  }

  if (time < 31.08 || time > 60.23){
    this.setState({color6: black})
  }
  else {
    this.setState({color6: green})
  }

  if (time < 18.93 || time > 59.97){
    this.setState({color7: black})
  }
  else {
    this.setState({color7: green})
  }

  if (time < 11.18 || time > 59.98){
    this.setState({color8: black})
  }
  else {
    this.setState({color8: green})
  }

  if (time < 10.01 || time > 60.02){
    this.setState({color9: black})
  }
  else {
    this.setState({color9: green})
  }

  if (time < 10.01 || time > 59.99){
    this.setState({color10: black})
  }
  else {
    this.setState({color10: green})
  }

  if (time < 28.34 || time > 62.13){
    this.setState({color11: black})
  }
  else {
    this.setState({color11: green})
  }

  if (time < 29.71 || time > 60.44){
    this.setState({color12: black})
  }
  else {
    this.setState({color12: green})
  }

  if (time < 18.48 || time > 51.41){
    this.setState({color13: black})
  }
  else {
    this.setState({color13: green})
  }

  if (time < 11.47 || time > 60.08){
    this.setState({color14: black})
  }
  else {
    this.setState({color14: green})
  }

  if (time < 9.89 || time > 60.04){
    this.setState({color15: black})
  }
  else {
    this.setState({color15: green})
  }

  if (time < 9.98 || time > 60.02){
    this.setState({color16: black})
  }
  else {
    this.setState({color16: green})
  }

  if (time < 22.94 || time > 120.16){
    this.setState({color17: black})
  }
  else {
    this.setState({color17: green})
  }

  if (time < 15.96 || time > 120.09){
    this.setState({color18: black})
  }
  else {
    this.setState({color18: green})
  }

  if (time < 9.99 || time > 120.03){
    this.setState({color19: black})
  }
  else {
    this.setState({color19: green})
  }

  if (time < 22.21 || time > 59.91){
    this.setState({color20: black})
  }
  else {
    this.setState({color20: green})
  }

  if (time < 14.03 || time > 59.99){
    this.setState({color21: black})
  }
  else {
    this.setState({color21: green})
  }

  if (time < 9.95 || time > 59.94){
    this.setState({color22: black})
  }
  else {
    this.setState({color22: green})
  }

  if (time < 9.95 || time > 59.71){
    this.setState({color23: black})
  }
  else {
    this.setState({color23: green})
  }

  if (time < 15.28 || time > 49.67){
    this.setState({color24: black})
  }
  else {
    this.setState({color24: green})
  }

  if (time < 15.18 || time > 55.04){
    this.setState({color25: black})
  }
  else {
    this.setState({color25: green})
  }

  if (time < 12.01 || time > 49.98){
    this.setState({color26: black})
  }
  else {
    this.setState({color26: green})
  }

  if (time < 10.02 || time > 60.04){
    this.setState({color27: black})
  }
  else {
    this.setState({color27: green})
  }

  if (time < 56.68 || time > 124.26){
    this.setState({color28: black})
  }
  else {
    this.setState({color28: green})
  }

  if (time < 59.41 || time > 120.87){
    this.setState({color29: black})
  }
  else {
    this.setState({color29: green})
  }

  if (time < 36.96 || time > 102.81){
    this.setState({color30: black})
  }
  else {
    this.setState({color30: green})
  }

  if (time < 22.94 || time > 120.16){
    this.setState({color31: black})
  }
  else {
    this.setState({color31: green})
  }

  if (time < 15.96 || time > 120.09){
    this.setState({color32: black})
  }
  else {
    this.setState({color32: green})
  }

  if (time < 9.99 || time > 120.03){
    this.setState({color33: black})
  }
  else {
    this.setState({color33: green})
  }

  if (time < 27.62 || time > 121.11){
    this.setState({color34: black})
  }
  else {
    this.setState({color34: green})
  }

  if (time < 23.15 || time > 133.33){
    this.setState({color35: black})
  }
  else {
    this.setState({color35: green})
  }

  if (time < 17.03 || time > 119.96){
    this.setState({color36: black})
  }
  else {
    this.setState({color36: green})
  }

  if (time < 9.99 || time > 120){
    this.setState({color37: black})
  }
  else {
    this.setState({color37: green})
  }

  if (time < 14.94 || time > 120.08){
    this.setState({color38: black})
  }
  else {
    this.setState({color38: green})
  }

  if (time < 22.21 || time > 59.91){
    this.setState({color39: black})
  }
  else {
    this.setState({color39: green})
  }

  if (time < 14.03 || time > 59.99){
    this.setState({color40: black})
  }
  else {
    this.setState({color40: green})
  }

  if (time < 9.95 || time > 59.94){
    this.setState({color41: black})
  }
  else {
    this.setState({color41: green})
  }

  if (time < 9.95 || time > 59.71){
    this.setState({color42: black})
  }
  else {
    this.setState({color42: green})
  }

  if (time < 25.09 || time > 111.1){
    this.setState({color43: black})
  }
  else {
    this.setState({color43: green})
  }

  if (time < 25.1 || time > 120.92){
    this.setState({color44: black})
  }
  else {
    this.setState({color44: green})
  }

  if (time < 24.97 || time > 110.92){
    this.setState({color45: black})
  }
  else {
    this.setState({color45: green})
  }

  if (time < 25 || time > 110.9){
    this.setState({color46: black})
  }
  else {
    this.setState({color46: green})
  }

  if (time < 29 || time > 83.55){
    this.setState({color47: black})
  }
  else {
    this.setState({color47: green})
  }

  if (time < 22.57 || time > 79.71){
    this.setState({color48: black})
  }
  else {
    this.setState({color48: green})
  }

  if (time < 20.32 || time > 78.44){
    this.setState({color49: black})
  }
  else {
    this.setState({color49: green})
  }

  if (time < 20.54 || time > 79.32){
    this.setState({color50: black})
  }
  else {
    this.setState({color50: green})
  }

  if (time < 20 || time > 78.26){
    this.setState({color51: black})
  }
  else {
    this.setState({color51: green})
  }

  if (time < 25 || time > 100){
    this.setState({color52: black})
  }
  else {
    this.setState({color52: green})
  }


}


count = (input) => {
  if (input !== 0){
    this.state.counter[this.state.count] = input;
    let add = this.state.count + 1
    this.setState({
      count: add
    })
  }
}

catch = (input) => {
  if (input > -900 && input < 500000){
    let output = input;
    return output;
  }
  else {
    let output = '';
    return output;
  }
}


handleChangetext = (input) => {
  const calculated = this.calculate(this.state.PickerValue,input, this.state.bool,this.state.first, this.state.second);
  const calculatedValue = this.catch(calculated)
  this.count(this.state.PickerValue)
  this.setState(
    {
      bool: 'true',
      second: 'false',
      value1: input,
      value: input,
      value2: `${calculatedValue}`,
    }
  );
}


handleChangetext2 = (input) => {
  const calculated2 = this.calculate(this.state.PickerValue, input, this.state.bool,this.state.first, this.state.second);
  const calculatedValue2 = this.catch(calculated2)
  this.count(this.state.PickerValue)
  this.setState({
    bool: 'false',
    second: 'false',
    value2: input,
    value: input,
    value1: `${calculatedValue2}`,

  })
}


gardcoclick = () => {
  Linking.openURL('https://www.gardco.com/Products/Viscometers/c/18631').catch(err => console.error('An error occured', err));
}

// gator1 = () => {
//   this.setState({gator1: 'true'})

//   if( this.state.gator1 == 'true' && this.state.gator2 == 'true' && this.state.gator3 == 'true'){
//     alert('Go Gators!')
//     this.setState({
//       gator1: 'false',
//       gator2: 'false',
//       gator3: 'false',
//     })
//   }
// }

gator2 = () => {
  this.setState({gator2: 'true'})

  if(this.state.gator2 == 'true' && this.state.gator3 == 'true'){
    alert('RISE UP!')
    this.setState({
      gator1: 'false',
      gator2: 'false',
      gator3: 'false',
    })
  }
}

gator3 = () => {
  this.setState({gator3: 'true'})

  if(this.state.gator2 == 'true' && this.state.gator3 == 'true'){
    alert('Go Gators!')
    this.setState({
      gator1: 'false',
      gator2: 'false',
      gator3: 'false',
    })
  }
}

calculate = (cup, x, bool, first, second) => {
  if (first == 'false' && second == 'false'){
    if (bool == 'true'){
      this.color2(x);
      if (cup == '1') {
          let calc = 0.875*x - (993/x);
          calc = calc.toFixed(2);



          if (calc < 10 || calc > 36 ){
            this.setState({
              error: this.state.errormsg,
            })
          }
          else{
            this.setState({
              error: '',
            })
          }
          this.setState({value2: calc});

          return calc;

        }
      else if (cup == '2') {
          let calc = 2.80*x - (747/x);
          calc = calc.toFixed(2);



          if (calc < 19 || calc > 156 ){
            this.setState({error: this.state.errormsg})
          }
          else{
            this.setState({error: ''})
          }
          this.setState({value2: calc});

          return calc;

        }
      else if (cup == '3') {
          let calc = 10.09*x - (587/x);
          calc = calc.toFixed(2);


          if (calc < 64 || calc > 596 ){
            this.setState({error: this.state.errormsg})
          }
          else{
            this.setState({error: ''})
          }

          this.setState({value2: calc});

          return calc;

        }
      else if (cup == '4') {
          let calc = 13.26*x - (673/x);
          calc = calc.toFixed(2);


          if (calc < 79 || calc > 784 ){
            this.setState({error: this.state.errormsg})
          }
          else{
            this.setState({error: ''})
          }

          this.setState({value2: calc});

          return calc;

        }
      else if (cup == '5') {
          let calc = 23.56*x - (744/x);
          calc = calc.toFixed(2);


          if (calc < 161 || calc > 1401 ){
            this.setState({error: this.state.errormsg})
          }
          else{
            this.setState({error: ''})
          }

          this.setState({value2: calc});

          return calc;

        }
        else if (cup == '6') {
          let calc = 1.59*x - (1070/x);
          calc = calc.toFixed(2);


          if (calc < 15 || calc > 78 ){
            this.setState({error: this.state.errormsg})
          }
          else{
            this.setState({error: ''})
          }

          this.setState({value2: calc});

          return calc;

        }

        else if (cup == '7') {
          let calc = 4.18*x - (760/x);
          calc = calc.toFixed(2);


          if (calc < 39 || calc > 238 ){
            this.setState({error: this.state.errormsg})
          }
          else{
            this.setState({error: ''})
          }

          this.setState({value2: calc});

          return calc;

        }

        else if (cup == '8') {
          let calc = 10.23*x - (575/x);
          calc = calc.toFixed(2);


          if (calc < 63 || calc > 604 ){
            this.setState({error: this.state.errormsg})
          }
          else{
            this.setState({error: ''})
          }

          this.setState({value2: calc});

          return calc;

        }
        else if (cup == '9') {
          let calc = 15.13*x - (545/x);
          calc = calc.toFixed(2);


          if (calc < 97 || calc > 899 ){
            this.setState({error: this.state.errormsg})
          }
          else{
            this.setState({error: ''})
          }

          this.setState({value2: calc});

          return calc;

        }

        else if (cup == '10') {
          let calc = 27.27*x - (540/x);
          calc = calc.toFixed(2);


          if (calc < 219 || calc > 1627 ){
            this.setState({error: this.state.errormsg})
          }
          else{
            this.setState({error: ''})
          }

          this.setState({value2: calc});

          return calc;

        }

        else if (cup == '11') {
          let calc = 0.266*x - (157/x);
          calc = calc.toFixed(2);


          if (calc < 2 || calc > 14 ){
            this.setState({error: this.state.errormsg})
          }
          else{
            this.setState({error: ''})
          }

          this.setState({value2: calc});

          return calc;

        }

        else if (cup == '12') {
          let calc = 0.744*x - (300/x);
          calc = calc.toFixed(2);


          if (calc < 12 || calc > 40 ){
            this.setState({error: this.state.errormsg})
          }
          else{
            this.setState({error: ''})
          }

          this.setState({value2: calc});

          return calc;

        }

        else if (cup == '13') {
          let calc = 2.48*x - (385/x);
          calc = calc.toFixed(2);


          if (calc < 25 || calc > 120 ){
            this.setState({error: this.state.errormsg})
          }
          else{
            this.setState({error: ''})
          }

          this.setState({value2: calc});

          return calc;

        }

        else if (cup == '14') {
          let calc = 4.62*x - (275/x);
          calc = calc.toFixed(2);


          if (calc < 29 || calc > 273 ){
            this.setState({error: this.state.errormsg})
          }
          else{
            this.setState({error: ''})
          }

          this.setState({value2: calc});

          return calc;

        }

        else if (cup == '15') {
          let calc = 7.4*x - (200/x);
          calc = calc.toFixed(2);


          if (calc < 53 || calc > 441 ){
            this.setState({error: this.state.errormsg})
          }
          else{
            this.setState({error: ''})
          }

          this.setState({value2: calc});

          return calc;

        }
        else if (cup == '16') {
          let calc = 23.60*x - (204/x);
          calc = calc.toFixed(2);


          if (calc < 215 || calc > 1413 ){
            this.setState({error: this.state.errormsg})
          }
          else{
            this.setState({error: ''})
          }

          this.setState({value2: calc});

          return calc;

        }

        else if (cup == '17') {
          let calc = 2.31*x - (550/x);
          calc = calc.toFixed(2);


          if (calc < 29 || calc > 273 ){
            this.setState({error: this.state.errormsg})
          }
          else{
            this.setState({error: ''})
          }

          this.setState({value2: calc});

          return calc;

        }

        else if (cup == '18') {
          let calc = 3.7*x - (400/x);
          calc = calc.toFixed(2);


          if (calc < 34 || calc > 441 ){
            this.setState({error: this.state.errormsg})
          }
          else{
            this.setState({error: ''})
          }

          this.setState({value2: calc});

          return calc;

        }

        else if (cup == '19') {
          let calc = 11.8*x - (408/x);
          calc = calc.toFixed(2);


          if (calc < 77 || calc > 1413 ){
            this.setState({error: this.state.errormsg})
          }
          else{
            this.setState({error: ''})
          }

          this.setState({value2: calc});

          return calc;

        }

        else if (cup == '20') {
          let calc = 0.85*x - (175/x);
          calc = calc.toFixed(2);


          if (calc < 11 || calc > 48 ){
            this.setState({error: this.state.errormsg})
          }
          else{
            this.setState({error: ''})
          }

          this.setState({value2: calc});

          return calc;

        }

        else if (cup == '21') {
          let calc = 2.32*x - (190/x);
          calc = calc.toFixed(2);


          if (calc < 19 || calc > 136 ){
            this.setState({error: this.state.errormsg})
          }
          else{
            this.setState({error: ''})
          }

          this.setState({value2: calc});

          return calc;

        }

        else if (cup == '22') {
          let calc = 5.39*x - (185/x);
          calc = calc.toFixed(2);


          if (calc < 35 || calc > 320 ){
            this.setState({error: this.state.errormsg})
          }
          else{
            this.setState({error: ''})
          }

          this.setState({value2: calc});

          return calc;

        }

        else if (cup == '23') {
          let calc = 18.9*x - (210/x);
          calc = calc.toFixed(2);


          if (calc < 167 || calc > 1125 ){
            this.setState({error: this.state.errormsg})
          }
          else{
            this.setState({error: ''})
          }

          this.setState({value2: calc});

          return calc;

        }

        else if (cup == '24') {
          let calc = 0.866*x - (100/x);
          calc = calc.toFixed(2);


          if (calc < 7 || calc > 42 ){
            this.setState({error: this.state.errormsg})
          }
          else{
            this.setState({error: ''})
          }

          this.setState({value2: calc});

          return calc;

        }

        else if (cup == '25') {
          let calc = 2.74*x - (100/x);
          calc = calc.toFixed(2);


          if (calc < 35 || calc > 149 ){
            this.setState({error: this.state.errormsg})
          }
          else{
            this.setState({error: ''})
          }

          this.setState({value2: calc});

          return calc;

        }

        else if (cup == '26') {
          let calc = 13.8*x - (285/x);
          calc = calc.toFixed(2);


          if (calc < 142 || calc > 684 ){
            this.setState({error: this.state.errormsg})
          }
          else{
            this.setState({error: ''})
          }

          this.setState({value2: calc});

          return calc;

        }

        else if (cup == '27') {
          let calc = 9.14*x - (226/x);
          calc = calc.toFixed(2);


          if (calc < 69 || calc > 545 ){
            this.setState({error: this.state.errormsg})
          }
          else{
            this.setState({error: ''})
          }

          this.setState({value2: calc});

          return calc;

        }

        else if (cup == '28') {
          let calc = 0.133*x - (313/x);
          calc = calc.toFixed(2);


          if (calc < 2 || calc > 14 ){
            this.setState({error: this.state.errormsg})
          }
          else{
            this.setState({error: ''})
          }

          this.setState({value2: calc});

          return calc;

        }

        else if (cup == '29') {
          let calc = 0.372*x - (600/x);
          calc = calc.toFixed(2);


          if (calc < 12 || calc > 40 ){
            this.setState({error: this.state.errormsg})
          }
          else{
            this.setState({error: ''})
          }

          this.setState({value2: calc});

          return calc;

        }

        else if (cup == '30') {
          let calc = 1.24*x - (770/x);
          calc = calc.toFixed(2);


          if (calc < 25 || calc > 120 ){
            this.setState({error: this.state.errormsg})
          }
          else{
            this.setState({error: ''})
          }

          this.setState({value2: calc});

          return calc;

        }

        else if (cup == '31') {
          let calc = 2.31*x - (550/x);
          calc = calc.toFixed(2);


          if (calc < 29 || calc > 273 ){
            this.setState({error: this.state.errormsg})
          }
          else{
            this.setState({error: ''})
          }

          this.setState({value2: calc});

          return calc;

        }

        else if (cup == '32') {
          let calc = 3.7*x - (400/x);
          calc = calc.toFixed(2);


          if (calc < 34 || calc > 441 ){
            this.setState({error: this.state.errormsg})
          }
          else{
            this.setState({error: ''})
          }

          this.setState({value2: calc});

          return calc;

        }

        else if (cup == '33') {
          let calc = 11.8*x - (408/x);
          calc = calc.toFixed(2);


          if (calc < 77 || calc > 1413 ){
            this.setState({error: this.state.errormsg})
          }
          else{
            this.setState({error: ''})
          }

          this.setState({value2: calc});

          return calc;

        }

        else if (cup == '34') {
          let calc = 0.443*x - (200/x);
          calc = calc.toFixed(2);


          if (calc < 5 || calc > 52 ){
            this.setState({error: this.state.errormsg})
          }
          else{
            this.setState({error: ''})
          }

          this.setState({value2: calc});

          return calc;

        }

        else if (cup == '35') {
          let calc = 1.37*x - (200/x);
          calc = calc.toFixed(2);


          if (calc < 19 || calc > 163 ){
            this.setState({error: this.state.errormsg})
          }
          else{
            this.setState({error: ''})
          }

          this.setState({value2: calc});

          return calc;

        }

        else if (cup == '36') {
          let calc = 6.9*x - (570/x);
          calc = calc.toFixed(2);


          if (calc < 84 || calc > 823 ){
            this.setState({error: this.state.errormsg})
          }
          else{
            this.setState({error: ''})
          }

          this.setState({value2: calc});

          return calc;

        }

        else if (cup == '37') {
          let calc = 21.78*x - (306/x);
          calc = calc.toFixed(2);


          if (calc < 187 || calc > 2611 ){
            this.setState({error: this.state.errormsg})
          }
          else{
            this.setState({error: ''})
          }

          this.setState({value2: calc});

          return calc;

        }

        else if (cup == '38') {
          let calc = 4.57*x - (452/x);
          calc = calc.toFixed(2);


          if (calc < 38 || calc > 545 ){
            this.setState({error: this.state.errormsg})
          }
          else{
            this.setState({error: ''})
          }

          this.setState({value2: calc});

          return calc;

        }

        else if (cup == '39') {
          let calc = 0.85*x - (175/x);
          calc = calc.toFixed(2);


          if (calc < 11 || calc > 48 ){
            this.setState({error: this.state.errormsg})
          }
          else{
            this.setState({error: ''})
          }

          this.setState({value2: calc});

          return calc;

        }

        else if (cup == '40') {
          let calc = 2.32*x - (190/x);
          calc = calc.toFixed(2);


          if (calc < 19 || calc > 136 ){
            this.setState({error: this.state.errormsg})
          }
          else{
            this.setState({error: ''})
          }

          this.setState({value2: calc});

          return calc;

        }

        else if (cup == '41') {
          let calc = 5.39*x - (185/x);
          calc = calc.toFixed(2);


          if (calc < 35 || calc > 320 ){
            this.setState({error: this.state.errormsg})
          }
          else{
            this.setState({error: ''})
          }

          this.setState({value2: calc});

          return calc;

        }

        else if (cup == '42') {
          let calc = 18.9*x - (210/x);
          calc = calc.toFixed(2);


          if (calc < 167 || calc > 1125 ){
            this.setState({error: this.state.errormsg})
          }
          else{
            this.setState({error: ''})
          }

          this.setState({value2: calc});

          return calc;

        }

        else if (cup == '43') {
          let calc = 1.55*x - (800/x);
          calc = calc.toFixed(2);


          if (calc < 7 || calc > 165 ){
            this.setState({error: this.state.errormsg})
          }
          else{
            this.setState({error: ''})
          }

          this.setState({value2: calc});

          return calc;

        }

        else if (cup == '44') {
          let calc = 4.82*x - (100/x);
          calc = calc.toFixed(2);


          if (calc < 117 || calc > 582 ){
            this.setState({error: this.state.errormsg})
          }
          else{
            this.setState({error: ''})
          }

          this.setState({value2: calc});

          return calc;

        }

        else if (cup == '45') {
          let calc = 20.75*x - (500/x);
          calc = calc.toFixed(2);


          if (calc < 498 || calc > 2297 ){
            this.setState({error: this.state.errormsg})
          }
          else{
            this.setState({error: ''})
          }

          this.setState({value2: calc});

          return calc;

        }

        else if (cup == '46') {
          let calc = 139*x - (750/x);
          calc = calc.toFixed(2);


          if (calc < 3445 || calc > 15408 ){
            this.setState({error: this.state.errormsg})
          }
          else{
            this.setState({error: ''})
          }

          this.setState({value2: calc});

          return calc;

        }

        else if (cup == '47') {
          let calc = 1.1*(x - 29);
          calc = calc.toFixed(2);


          if (calc < 0 || calc > 60 ){
            this.setState({error: this.state.errormsg})
          }
          else{
            this.setState({error: ''})
          }

          this.setState({value2: calc});

          return calc;

        }
        else if (cup == '48') {
          let calc = 3.5*(x - 14);
          calc = calc.toFixed(2);


          if (calc < 30 || calc > 230 ){
            this.setState({error: this.state.errormsg})
          }
          else{
            this.setState({error: ''})
          }

          this.setState({value2: calc});

          return calc;
        }

        else if (cup == '49') {
          let calc = 11.7*(x - 7.5);
          calc = calc.toFixed(2);


          if (calc < 150 || calc > 830 ){
            this.setState({error: this.state.errormsg})
          }
          else{
            this.setState({error: ''})
          }

          this.setState({value2: calc});

          return calc;
        }

        else if (cup == '50') {
          let calc = 14.8*(x - 5);
          calc = calc.toFixed(2);


          if (calc < 230 || calc > 1100 ){
            this.setState({error: this.state.errormsg})
          }
          else{
            this.setState({error: ''})
          }

          this.setState({value2: calc});

          return calc;
        }

        else if (cup == '51') {
          let calc = 23*(x);
          calc = calc.toFixed(2);


          if (calc < 460 || calc > 1800 ){
            this.setState({error: this.state.errormsg})
          }
          else{
            this.setState({error: ''})
          }

          this.setState({value2: calc});

          return calc;
        }

        else if (cup == '52') {
          let calc = 3.28*x - (220/x);
          calc = calc.toFixed(2);


          if (calc < 70 || calc > 370 ){
            this.setState({error: this.state.errormsg})
          }
          else{
            this.setState({error: ''})
          }

          this.setState({value2: calc});

          return calc;
        }
    }










    else{
      this.color(x);
      if (cup == '1') {
        if (x < 10 || x > 36 ){
          this.setState({error: this.state.errormsg})
        }
        else{
          this.setState({error: ''})
        }
        let calc = Math.sqrt((x*x)+3476);
        let calc2 = parseFloat(x);
        calc2 = (calc + calc2) / 1.75 ;
        calc2 = calc2.toFixed(2);
        this.setState({value1: calc2});

        return calc2;
      }
      else if (cup == '2') {
        let calc = Math.sqrt((x*x)+8366);
        let calc2 = parseFloat(x);
        calc2 = (calc + calc2) / 5.60 ;
        calc2 = calc2.toFixed(2);

        if (x < 19 || x > 156 ){
          this.setState({error: this.state.errormsg})
        }
        else{
          this.setState({error: ''})
        }
        this.setState({value1: calc2});

        return calc2;
      }
      else if (cup == '3') {
        let calc = Math.sqrt((x*x)+23691);
        let calc2 = parseFloat(x);
        calc2 = (calc + calc2) / 20.18 ;
        calc2 = calc2.toFixed(2);

        if (x < 64 || x > 596 ){
          this.setState({error: this.state.errormsg})
        }
        else{
          this.setState({error: ''})
        }
        this.setState({value1: calc2});

        return calc2;
        }
      else if (cup == '4') {
        let calc = Math.sqrt((x*x)+35696);
        let calc2 = parseFloat(x);
        calc2 = (calc + calc2) / 26.52 ;
        calc2 = calc2.toFixed(2);

        if (x < 79 || x > 784 ){
          this.setState({error: this.state.errormsg})
        }
        else{
          this.setState({error: ''})
        }
        this.setState({value1: calc2});

        return calc2;

        }
      else if (cup == '5') {
          let calc = Math.sqrt((x*x)+70115);
          let calc2 = parseFloat(x);
          calc2 = (calc + calc2) / 47.12 ;
          calc2 = calc2.toFixed(2);
          if (x < 161 || x > 1401 ){
            this.setState({error: this.state.errormsg})
          }
          else{
            this.setState({error: ''})
          }
          this.setState({value1: calc2});

          return calc2;
        }

        else if (cup == '6') {
          let calc = Math.sqrt((x*x)+6805);
          let calc2 = parseFloat(x);
          calc2 = (calc + calc2) / 3.18 ;
          calc2 = calc2.toFixed(2);
          if (x < 15 || x > 78 ){
            this.setState({error: this.state.errormsg})
          }
          else{
            this.setState({error: ''})
          }
          this.setState({value1: calc2});

          return calc2;
        }

        else if (cup == '7') {
          let calc = Math.sqrt((x*x)+12707);
          let calc2 = parseFloat(x);
          calc2 = (calc + calc2) / 8.36 ;
          calc2 = calc2.toFixed(2);
          if (x < 39 || x > 238 ){
            this.setState({error: this.state.errormsg})
          }
          else{
            this.setState({error: ''})
          }
          this.setState({value1: calc2});

          return calc2;
        }

        else if (cup == '8') {
          let calc = Math.sqrt((x*x)+23529);
          let calc2 = parseFloat(x);
          calc2 = (calc + calc2) / 20.46 ;
          calc2 = calc2.toFixed(2);
          if (x < 63 || x > 604 ){
            this.setState({error: this.state.errormsg})
          }
          else{
            this.setState({error: ''})
          }
          this.setState({value1: calc2});

          return calc2;
        }

        else if (cup == '9') {
          let calc = Math.sqrt((x*x)+32983);
          let calc2 = parseFloat(x);
          calc2 = (calc + calc2) / 30.26 ;
          calc2 = calc2.toFixed(2);
          if (x < 97 || x > 899 ){
            this.setState({error: this.state.errormsg})
          }
          else{
            this.setState({error: ''})
          }
          this.setState({value1: calc2});

          return calc2;
        }

        else if (cup == '10') {
          let calc = Math.sqrt((x*x)+58903);
          let calc2 = parseFloat(x);
          calc2 = (calc + calc2) / 54.54 ;
          calc2 = calc2.toFixed(2);
          if (x < 219 || x > 1627 ){
            this.setState({error: this.state.errormsg})
          }
          else{
            this.setState({error: ''})
          }
          this.setState({value1: calc2});

          return calc2;
        }

        else if (cup == '11') {
          let calc = Math.sqrt((x*x)+167);
          let calc2 = parseFloat(x);
          calc2 = (calc + calc2) / 0.532 ;
          calc2 = calc2.toFixed(2);
          if (x < 2 || x > 14 ){
            this.setState({error: this.state.errormsg})
          }
          else{
            this.setState({error: ''})
          }
          this.setState({value1: calc2});

          return calc2;
        }

        else if (cup == '12') {
          let calc = Math.sqrt((x*x)+893);
          let calc2 = parseFloat(x);
          calc2 = (calc + calc2) / 1.488 ;
          calc2 = calc2.toFixed(2);
          if (x < 12 || x > 40 ){
            this.setState({error: this.state.errormsg})
          }
          else{
            this.setState({error: ''})
          }
          this.setState({value1: calc2});

          return calc2;
        }

        else if (cup == '13') {
          let calc = Math.sqrt((x*x)+3819);
          let calc2 = parseFloat(x);
          calc2 = (calc + calc2) / 4.96 ;
          calc2 = calc2.toFixed(2);
          if (x < 25 || x > 120 ){
            this.setState({error: this.state.errormsg})
          }
          else{
            this.setState({error: ''})
          }
          this.setState({value1: calc2});

          return calc2;
        }

        else if (cup == '14') {
          let calc = Math.sqrt((x*x)+5082);
          let calc2 = parseFloat(x);
          calc2 = (calc + calc2) / 9.24 ;
          calc2 = calc2.toFixed(2);
          if (x < 29 || x > 273 ){
            this.setState({error: this.state.errormsg})
          }
          else{
            this.setState({error: ''})
          }
          this.setState({value1: calc2});

          return calc2;
        }

        else if (cup == '15') {
          let calc = Math.sqrt((x*x)+5920);
          let calc2 = parseFloat(x);
          calc2 = (calc + calc2) / 14.8 ;
          calc2 = calc2.toFixed(2);
          if (x < 53 || x > 441 ){
            this.setState({error: this.state.errormsg})
          }
          else{
            this.setState({error: ''})
          }
          this.setState({value1: calc2});
          return calc2;
        }

        else if (cup == '16') {
          let calc = Math.sqrt((x*x)+19258);
          let calc2 = parseFloat(x);
          calc2 = (calc + calc2) / 47.2 ;
          calc2 = calc2.toFixed(2);
          if (x < 215 || x > 1413 ){
            this.setState({error: this.state.errormsg})
          }
          else{
            this.setState({error: ''})
          }
          this.setState({value1: calc2});

          return calc2;
        }

        else if (cup == '17') {
          let calc = Math.sqrt((x*x)+5082);
          let calc2 = parseFloat(x);
          calc2 = (calc + calc2) / 4.62 ;
          calc2 = calc2.toFixed(2);
          if (x < 29 || x > 273 ){
            this.setState({error: this.state.errormsg})
          }
          else{
            this.setState({error: ''})
          }
          this.setState({value1: calc2});

          return calc2;
        }

        else if (cup == '18') {
          let calc = Math.sqrt((x*x)+5920);
          let calc2 = parseFloat(x);
          calc2 = (calc + calc2) / 7.4 ;
          calc2 = calc2.toFixed(2);
          if (x < 34 || x > 441 ){
            this.setState({error: this.state.errormsg})
          }
          else{
            this.setState({error: ''})
          }
          this.setState({value1: calc2});

          return calc2;
        }

        else if (cup == '19') {
          let calc = Math.sqrt((x*x)+19258);
          let calc2 = parseFloat(x);
          calc2 = (calc + calc2) / 23.60 ;
          calc2 = calc2.toFixed(2);
          if (x < 77 || x > 1413 ){
            this.setState({error: this.state.errormsg})
          }
          else{
            this.setState({error: ''})
          }
          this.setState({value1: calc2});

          return calc2;
        }

        else if (cup == '20') {
          let calc = Math.sqrt((x*x)+595);
          let calc2 = parseFloat(x);
          calc2 = (calc + calc2) / 1.7 ;
          calc2 = calc2.toFixed(2);
          if (x < 11 || x > 48 ){
            this.setState({error: this.state.errormsg})
          }
          else{
            this.setState({error: ''})
          }
          this.setState({value1: calc2});

          return calc2;
        }

        else if (cup == '21') {
          let calc = Math.sqrt((x*x)+1763);
          let calc2 = parseFloat(x);
          calc2 = (calc + calc2) / 4.64 ;
          calc2 = calc2.toFixed(2);
          if (x < 19 || x > 136 ){
            this.setState({error: this.state.errormsg})
          }
          else{
            this.setState({error: ''})
          }
          this.setState({value1: calc2});

          return calc2;
        }

        else if (cup == '22') {
          let calc = Math.sqrt((x*x)+3989);
          let calc2 = parseFloat(x);
          calc2 = (calc + calc2) / 10.78 ;
          calc2 = calc2.toFixed(2);
          if (x < 35 || x > 320 ){
            this.setState({error: this.state.errormsg})
          }
          else{
            this.setState({error: ''})
          }
          this.setState({value1: calc2});

          return calc2;
        }

        else if (cup == '23') {
          let calc = Math.sqrt((x*x)+15876);
          let calc2 = parseFloat(x);
          calc2 = (calc + calc2) / 37.8 ;
          calc2 = calc2.toFixed(2);
          if (x < 167 || x > 1125 ){
            this.setState({error: this.state.errormsg})
          }
          else{
            this.setState({error: ''})
          }
          this.setState({value1: calc2});

          return calc2;
        }

        else if (cup == '24') {
          let calc = Math.sqrt((x*x)+354);
          let calc2 = parseFloat(x);
          calc2 = (calc + calc2) / 1.772 ;
          calc2 = calc2.toFixed(2);
          if (x < 7 || x > 42 ){
            this.setState({error: this.state.errormsg})
          }
          else{
            this.setState({error: ''})
          }
          this.setState({value1: calc2});

          return calc2;
        }

        else if (cup == '25') {
          let calc = Math.sqrt((x*x)+1096);
          let calc2 = parseFloat(x);
          calc2 = (calc + calc2) / 5.48 ;
          calc2 = calc2.toFixed(2);
          if (x < 35 || x > 149 ){
            this.setState({error: this.state.errormsg})
          }
          else{
            this.setState({error: ''})
          }
          this.setState({value1: calc2});

          return calc2;
        }

        else if (cup == '26') {
          let calc = Math.sqrt((x*x)+15732);
          let calc2 = parseFloat(x);
          calc2 = (calc + calc2) / 27.6 ;
          calc2 = calc2.toFixed(2);
          if (x < 142 || x > 684 ){
            this.setState({error: this.state.errormsg})
          }
          else{
            this.setState({error: ''})
          }
          this.setState({value1: calc2});

          return calc2;
        }

        else if (cup == '27') {
          let calc = Math.sqrt((x*x)+8263);
          let calc2 = parseFloat(x);
          calc2 = (calc + calc2) / 18.28 ;
          calc2 = calc2.toFixed(2);
          if (x < 69 || x > 545 ){
            this.setState({error: this.state.errormsg})
          }
          else{
            this.setState({error: ''})
          }
          this.setState({value1: calc2});
          return calc2;
        }

        else if (cup == '28') {
          let calc = Math.sqrt((x*x)+167);
          let calc2 = parseFloat(x);
          calc2 = (calc + calc2) / 0.266 ;
          calc2 = calc2.toFixed(2);
          if (x < 2 || x > 14 ){
            this.setState({error: this.state.errormsg})
          }
          else{
            this.setState({error: ''})
          }
          this.setState({value1: calc2});

          return calc2;
        }

        else if (cup == '29') {
          let calc = Math.sqrt((x*x)+893);
          let calc2 = parseFloat(x);
          calc2 = (calc + calc2) / 0.744 ;
          calc2 = calc2.toFixed(2);
          if (x < 12 || x > 40 ){
            this.setState({error: this.state.errormsg})
          }
          else{
            this.setState({error: ''})
          }
          this.setState({value1: calc2});

          return calc2;
        }

        else if (cup == '30') {
          let calc = Math.sqrt((x*x)+3819);
          let calc2 = parseFloat(x);
          calc2 = (calc + calc2) / 2.48 ;
          calc2 = calc2.toFixed(2);
          if (x < 25 || x > 120 ){
            this.setState({error: this.state.errormsg})
          }
          else{
            this.setState({error: ''})
          }
          this.setState({value1: calc2});

          return calc2;
        }

        else if (cup == '31') {
          let calc = Math.sqrt((x*x)+5082);
          let calc2 = parseFloat(x);
          calc2 = (calc + calc2) / 4.62 ;
          calc2 = calc2.toFixed(2);
          if (x < 29 || x > 273 ){
            this.setState({error: this.state.errormsg})
          }
          else{
            this.setState({error: ''})
          }
          this.setState({value1: calc2});

          return calc2;
        }

        else if (cup == '32') {
          let calc = Math.sqrt((x*x)+5920);
          let calc2 = parseFloat(x);
          calc2 = (calc + calc2) / 7.4 ;
          calc2 = calc2.toFixed(2);
          if (x < 34 || x > 441 ){
            this.setState({error: this.state.errormsg})
          }
          else{
            this.setState({error: ''})
          }
          this.setState({value1: calc2});

          return calc2;
        }

        else if (cup == '33') {
          let calc = Math.sqrt((x*x)+19258);
          let calc2 = parseFloat(x);
          calc2 = (calc + calc2) / 23.60 ;
          calc2 = calc2.toFixed(2);
          if (x < 77 || x > 1413 ){
            this.setState({error: this.state.errormsg})
          }
          else{
            this.setState({error: ''})
          }
          this.setState({value1: calc2});

          return calc2;
        }

        else if (cup == '34') {
          let calc = Math.sqrt((x*x)+354);
          let calc2 = parseFloat(x);
          calc2 = (calc + calc2) / 0.886 ;
          calc2 = calc2.toFixed(2);
          if (x < 5 || x > 52 ){
            this.setState({error: this.state.errormsg})
          }
          else{
            this.setState({error: ''})
          }
          this.setState({value1: calc2});

          return calc2;
        }

        else if (cup == '35') {
          let calc = Math.sqrt((x*x)+1096);
          let calc2 = parseFloat(x);
          calc2 = (calc + calc2) / 2.74 ;
          calc2 = calc2.toFixed(2);
          if (x < 19 || x > 163 ){
            this.setState({error: this.state.errormsg})
          }
          else{
            this.setState({error: ''})
          }
          this.setState({value1: calc2});

          return calc2;
        }

        else if (cup == '36') {
          let calc = Math.sqrt((x*x)+15732);
          let calc2 = parseFloat(x);
          calc2 = (calc + calc2) / 13.8 ;
          calc2 = calc2.toFixed(2);
          if (x < 84 || x > 823 ){
            this.setState({error: this.state.errormsg})
          }
          else{
            this.setState({error: ''})
          }
          this.setState({value1: calc2});

          return calc2;
        }

        else if (cup == '37') {
          let calc = Math.sqrt((x*x)+26659);
          let calc2 = parseFloat(x);
          calc2 = (calc + calc2) / 43.56 ;
          calc2 = calc2.toFixed(2);
          if (x < 187 || x > 2611 ){
            this.setState({error: this.state.errormsg})
          }
          else{
            this.setState({error: ''})
          }
          this.setState({value1: calc2});

          return calc2;
        }

        else if (cup == '38') {
          let calc = Math.sqrt((x*x)+8263);
          let calc2 = parseFloat(x);
          calc2 = (calc + calc2) / 9.14 ;
          calc2 = calc2.toFixed(2);
          if (x < 38 || x > 545 ){
            this.setState({error: this.state.errormsg})
          }
          else{
            this.setState({error: ''})
          }
          this.setState({value1: calc2});

          return calc2;
        }

        else if (cup == '39') {
          let calc = Math.sqrt((x*x)+595);
          let calc2 = parseFloat(x);
          calc2 = (calc + calc2) / 1.7 ;
          calc2 = calc2.toFixed(2);
          if (x < 11 || x > 48 ){
            this.setState({error: this.state.errormsg})
          }
          else{
            this.setState({error: ''})
          }
          this.setState({value1: calc2});

          return calc2;
        }

        else if (cup == '40') {
          let calc = Math.sqrt((x*x)+1763);
          let calc2 = parseFloat(x);
          calc2 = (calc + calc2) / 4.64 ;
          calc2 = calc2.toFixed(2);
          if (x < 19 || x > 136 ){
            this.setState({error: this.state.errormsg})
          }
          else{
            this.setState({error: ''})
          }
          this.setState({value1: calc2});

          return calc2;
        }

        else if (cup == '41') {
          let calc = Math.sqrt((x*x)+3989);
          let calc2 = parseFloat(x);
          calc2 = (calc + calc2) / 10.78 ;
          calc2 = calc2.toFixed(2);
          if (x < 35 || x > 320 ){
            this.setState({error: this.state.errormsg})
          }
          else{
            this.setState({error: ''})
          }
          this.setState({value1: calc2});

          return calc2;
        }

        else if (cup == '42') {
          let calc = Math.sqrt((x*x)+15876);
          let calc2 = parseFloat(x);
          calc2 = (calc + calc2) / 37.8 ;
          calc2 = calc2.toFixed(2);
          if (x < 167 || x > 1125 ){
            this.setState({error: this.state.errormsg})
          }
          else{
            this.setState({error: ''})
          }
          this.setState({value1: calc2});

          return calc2;
        }

        else if (cup == '43') {
          let calc = Math.sqrt((x*x)+4960);
          let calc2 = parseFloat(x);
          calc2 = (calc + calc2) / 3.1 ;
          calc2 = calc2.toFixed(2);
          if (x < 7 || x > 165 ){
            this.setState({error: this.state.errormsg})
          }
          else{
            this.setState({error: ''})
          }
          this.setState({value1: calc2});

          return calc2;
        }

        else if (cup == '44') {
          let calc = Math.sqrt((x*x)+1928);
          let calc2 = parseFloat(x);
          calc2 = (calc + calc2) / 9.64 ;
          calc2 = calc2.toFixed(2);
          if (x < 117 || x > 582 ){
            this.setState({error: this.state.errormsg})
          }
          else{
            this.setState({error: ''})
          }
          this.setState({value1: calc2});

          return calc2;
        }

        else if (cup == '45') {
          let calc = Math.sqrt((x*x)+41500);
          let calc2 = parseFloat(x);
          calc2 = (calc + calc2) / 41.5 ;
          calc2 = calc2.toFixed(2);
          if (x < 498|| x > 2297 ){
            this.setState({error: this.state.errormsg})
          }
          else{
            this.setState({error: ''})
          }
          this.setState({value1: calc2});

          return calc2;
        }

        else if (cup == '46') {
          let calc = Math.sqrt((x*x)+417000);
          let calc2 = parseFloat(x);
          calc2 = (calc + calc2) / 278 ;
          calc2 = calc2.toFixed(2);
          if (x < 3445 || x > 15408 ){
            this.setState({error: this.state.errormsg})
          }
          else{
            this.setState({error: ''})
          }
          this.setState({value1: calc2});

          return calc2;
        }

        else if (cup == '47') {
          let calc = (x/1.1)+29
          calc = calc.toFixed(2);
          if (x< 0 || x > 60 ){
            this.setState({error: this.state.errormsg})
          }
          else{
            this.setState({error: ''})
          }
          this.setState({value1: calc});

          return calc;
        }

        else if (cup == '48') {
          let calc = (x/3.5)+14
          calc = calc.toFixed(2);
          if (x< 30 || x > 230 ){
            this.setState({error: this.state.errormsg})
          }
          else{
            this.setState({error: ''})
          }
          this.setState({value1: calc});

          return calc;
        }

        else if (cup == '49') {
          let calc = (x/11.7)+7.5
          calc = calc.toFixed(2);
          if (x< 150 || x > 830 ){
            this.setState({error: this.state.errormsg})
          }
          else{
            this.setState({error: ''})
          }
          this.setState({value1: calc});

          return calc;
        }

        else if (cup == '50') {
          let calc = (x/14.8)+5
          calc = calc.toFixed(2);
          if (x< 230 || x > 1100 ){
            this.setState({error: this.state.errormsg})
          }
          else{
            this.setState({error: ''})
          }
          this.setState({value1: calc});

          return calc;
        }

        else if (cup == '51') {
          let calc = (x/23)
          calc = calc.toFixed(2);
          if (x< 460 || x > 1800 ){
            this.setState({error: this.state.errormsg})
          }
          else{
            this.setState({error: ''})
          }
          this.setState({value1: calc});

          return calc;
        }

        else if (cup == '52') {
          let calc = Math.sqrt((x*x)+2886.4);
          let calc2 = parseFloat(x);
          calc2 = (calc + calc2) / 6.56 ;
          calc2 = calc2.toFixed(2);
          if (x < 70|| x > 370 ){
            this.setState({error: this.state.errormsg})
          }
          else{
            this.setState({error: ''})
          }
          this.setState({value1: calc2});

          return calc2;
        }

    }
    this.setState({PickerValue2 : cup})
  }
  this.setState({PickerValue2 : cup})
}






  render() {
    //const{ value1, value2} = this.state

    if (this.state.PickerValue == 0 && this.state.first == 'false'){
      let recount = this.state.count - 1;
      let xx = this.state.counter[recount];
      this.setState({
        PickerValue: `${xx}`,
        count: recount
      })
    }
      return (
        // <KeyboardAvoidingView
        // style = {{flex:1}}
        // behavior = 'padding'
        // >
        <TouchableWithoutFeedback onPress = {() => {this.calculate(this.state.PickerValue,this.state.value, this.state.bool,this.state.first, this.state.second), Keyboard.dismiss
        }}>
          <View style = {{flex: 3, flexDirection: 'column', justifyContent: "flex-start", alignItems: "center"}}>

            <View style = {{width: '100%', height: '6%', backgroundColor: '#e60d2e'}}/>

            <Image source = {{uri: 'https://www.gardco.com/medias/gardco-logo.svg?context=bWFzdGVyfGltYWdlc3wxMTE1NnxpbWFnZS9zdmcreG1sfGg3Mi9oNWIvOTE0Mjk0NjY2MDM4Mi9nYXJkY28tbG9nby5zdmd8ZWNiNDk4MDc3MmQwNmMzMmEwMDU0YzQyOWY4YWRhYzgwMjMxOTczYjBiOWRhNzZjZjQxNTc3NTg1ZjhjMTMxNQ'}}
            style={{width: '80%', height: '15%'}}
            resizeMode = "contain"
            />


            <View style = {{ height: '2%', backgroundColor: 'white'}}></View>


            {/* GO GATORS */}

            {/* <View style = {{ width: '8%',height: '6%', backgroundColor: "black", position: "absolute", justifyContent: "flex-start", alignSelf: "flex-start"}}
              onStartShouldSetResponder = {() => this.gator1()}
            ></View> */}

            <View style = {{ width: '6%',height: '6%', position: "absolute", left: '94%', top: '94%'}}
              onStartShouldSetResponder = {() => this.gator2}
            ></View>

            <View style = {{ width: '6%',height: '6%', position: "absolute", left: '0%', top: '94%'}}
              onStartShouldSetResponder = {() => this.gator3}
            ></View>

             {(Platform.OS === 'android')?
            <View style = {{ height: '3%', backgroundColor: 'white'}}></View> :
            <View/>
            }


            <Text
            style={styles.calculation}
            allowFontScaling = {false}
            >Time (seconds)</Text>


              <TextInput
                // placeholder = ''
                // placeholderTextColor = 'black'
                style = {styles.TextInputStyle}
                allowFontScaling = {false}
                keyboardType={'numeric'}
                autoCapitalize = "none"
                onChangeText = {this.handleChangetext}
                value = {this.state.value1}
                returnKeyLabel = 'Done'
                returnKeyType = 'done'
                onSubmitEditing = { ( ) => {this.calculate(this.state.PickerValue,this.state.value, this.state.bool,this.state.first, this.state.second)}}
              />






            <View style = {{ height: '5%', backgroundColor: 'white'}}></View>

            <Text
            style={styles.calculation}
            allowFontScaling = {false}
            >Viscosity (cSt)</Text>

            {/* <View style = {{width: 10000, height: '5%', backgroundColor: '#b2bec3',justifyContent: "center",alignItems: 'center'}} */}

                <TextInput
                  // placeholder = '90909'
                  // placeholderTextColor = 'black'
                  style = {styles.TextInputStyle}
                  allowFontScaling = {false}
                  autoCapitalize = "none"
                  keyboardType={'numeric'}
                  onChangeText = {this.handleChangetext2}
                  value = {this.state.value2}
                  returnKeyLabel = 'Done'
                  returnKeyType = 'done'
                  onSubmitEditing = { ( ) => {this.calculate(this.state.PickerValue,this.state.value, this.state.bool,this.state.first, this.state.second)}}
                />

                {/* <Input
                placeholder = '99'

                /> */}
            {/* </View> */}

            <View style = {{ width: '80%' ,height: '5%',justifyContent: "center",alignItems: 'center'}}>
              <Text style = {styles.error}>{this.state.error}</Text>
            </View>


            {(Platform.OS === 'android')?
            <View style = {{ height: '12%', backgroundColor: 'white'}}></View> :
            <View/>
            }


            {(Platform.OS === 'ios')?
            <Picker
              style = {styles.picker1}
              selectedValue = {this.state.PickerValue}
              // onValueChange ={(itemValue,itemIndex) => this.setState({PickerValue: itemValue})}
              onValueChange ={(itemValue,itemIndex) => {this.calculate(itemValue,this.state.value, this.state.bool, this.state.first, this.state.second), this.setState({PickerValue: itemValue}), this.setState({first: 'false'})}}
              >
              <Picker.Item label = "Select a Cup" value ="0"/>
              <Picker.Item color = {this.state.color1} label = "EZ #1" value = "1"/>
              <Picker.Item color = {this.state.color2} label = "EZ #2" value = "2"/>
              <Picker.Item color = {this.state.color3} label = "EZ #3" value = "3"/>
              <Picker.Item color = {this.state.color4} label = "EZ #4" value = "4"/>
              <Picker.Item color = {this.state.color5} label = "EZ #5" value = "5"/>

              <Picker.Item color = {this.state.color6} label = "S90 #1" value = "6"/>
              <Picker.Item color = {this.state.color7} label = "S90 #2" value = "7"/>
              <Picker.Item color = {this.state.color8} label = "S90 #3" value = "8"/>
              <Picker.Item color = {this.state.color9} label = "S90 #4" value = "9"/>
              <Picker.Item color = {this.state.color10} label = "S90 #5" value = "10"/>

              <Picker.Item color = {this.state.color47} label = "BYK Zahn Cup #1" value = "47"/>
              <Picker.Item color = {this.state.color48} label = "BYK Zahn Cup #2" value = "48"/>
              <Picker.Item color = {this.state.color49} label = "BYK Zahn Cup #3" value = "49"/>
              <Picker.Item color = {this.state.color50} label = "BYK Zahn Cup #4" value = "50"/>
              <Picker.Item color = {this.state.color51} label = "BYK Zahn Cup #5" value = "51"/>

              <Picker.Item color = {this.state.color11} label = "Mini Ford Dip #0" value = "11"/>
              <Picker.Item color = {this.state.color12} label = "Mini Ford Dip #1" value = "12"/>
              <Picker.Item color = {this.state.color13} label = "Mini Ford Dip #2" value = "13"/>
              <Picker.Item color = {this.state.color14} label = "Mini Ford Dip #3" value = "14"/>
              <Picker.Item color = {this.state.color15} label = "Mini Ford Dip #4" value = "15"/>
              <Picker.Item color = {this.state.color16} label = "Mini Ford Dip #5" value = "16"/>

              <Picker.Item color = {this.state.color17} label = "Ford Dip #3" value = "17"/>
              <Picker.Item color = {this.state.color18} label = "Ford Dip #4" value = "18"/>
              <Picker.Item color = {this.state.color19} label = "Ford Dip #5" value = "19"/>

              <Picker.Item color = {this.state.color20} label = "Fisher Dip Cup #1" value = "20"/>
              <Picker.Item color = {this.state.color21} label = "Fisher Dip Cup #2" value = "21"/>
              <Picker.Item color = {this.state.color22} label = "Fisher Dip Cup #3" value = "22"/>
              <Picker.Item color = {this.state.color23} label = "Fisher Dip Cup #4" value = "23"/>

              <Picker.Item color = {this.state.color24} label = "Iso Dip 3mm" value = "24"/>
              <Picker.Item color = {this.state.color25} label = "Iso Dip 4mm" value = "25"/>
              <Picker.Item color = {this.state.color26} label = "Iso Dip 5mm" value = "26"/>

              <Picker.Item color = {this.state.color27} label = "Mini Din Dip 4mm" value = "27"/>

              <Picker.Item color = {this.state.color28} label = "Ford Cup #0" value = "28"/>
              <Picker.Item color = {this.state.color29} label = "Ford Cup #1" value = "29"/>
              <Picker.Item color = {this.state.color30} label = "Ford Cup #2" value = "30"/>
              <Picker.Item color = {this.state.color31} label = "Ford Cup #3" value = "31"/>
              <Picker.Item color = {this.state.color32} label = "Ford Cup #4" value = "32"/>
              <Picker.Item color = {this.state.color33} label = "Ford Cup #5" value = "33"/>

              <Picker.Item color = {this.state.color34} label = "Iso Cup 3mm" value = "34"/>
              <Picker.Item color = {this.state.color35} label = "Iso Cup 4mm" value = "35"/>
              <Picker.Item color = {this.state.color52} label = "Iso Cup 5mm" value = "52"/>
              <Picker.Item color = {this.state.color36} label = "Iso Cup 6mm" value = "36"/>
              <Picker.Item color = {this.state.color37} label = "Iso Cup 8mm" value = "37"/>

              <Picker.Item color = {this.state.color38} label = "Din Cup 4mm" value = "38"/>

              <Picker.Item color = {this.state.color39} label = "Fisher Cup #1" value = "39"/>
              <Picker.Item color = {this.state.color40} label = "Fisher Cup #2" value = "40"/>
              <Picker.Item color = {this.state.color41} label = "Fisher Cup #3" value = "41"/>
              <Picker.Item color = {this.state.color42} label = "Fisher Cup #4" value = "42"/>

              <Picker.Item color = {this.state.color43} label = "Parlin Cup #1" value = "43"/>
              <Picker.Item color = {this.state.color44} label = "Parlin Cup #2" value = "44"/>
              <Picker.Item color = {this.state.color45} label = "Parlin Cup #3" value = "45"/>
              <Picker.Item color = {this.state.color46} label = "Parlin Cup #4" value = "46"/>


              </Picker>

              :


              <Picker
              style = {styles.picker2}
              selectedValue = {this.state.PickerValue}
              // onValueChange ={(itemValue,itemIndex) => this.setState({PickerValue: itemValue})}
              onValueChange ={(itemValue,itemIndex) => {this.calculate(itemValue,this.state.value, this.state.bool, this.state.first, this.state.second), this.setState({PickerValue: itemValue}), this.setState({first: 'false'}), this.count(itemValue)}}
              >

              <Picker.Item label = "Select a Cup" value ="0"/>
              <Picker.Item color = {this.state.color1} label = "EZ #1" value = "1"/>
              <Picker.Item color = {this.state.color2} label = "EZ #2" value = "2"/>
              <Picker.Item color = {this.state.color3} label = "EZ #3" value = "3"/>
              <Picker.Item color = {this.state.color4} label = "EZ #4" value = "4"/>
              <Picker.Item color = {this.state.color5} label = "EZ #5" value = "5"/>

              <Picker.Item color = {this.state.color6} label = "S90 #1" value = "6"/>
              <Picker.Item color = {this.state.color7} label = "S90 #2" value = "7"/>
              <Picker.Item color = {this.state.color8} label = "S90 #3" value = "8"/>
              <Picker.Item color = {this.state.color9} label = "S90 #4" value = "9"/>
              <Picker.Item color = {this.state.color10} label = "S90 #5" value = "10"/>

              <Picker.Item color = {this.state.color47} label = "BYK Zahn Cup #1" value = "47"/>
              <Picker.Item color = {this.state.color48} label = "BYK Zahn Cup #2" value = "48"/>
              <Picker.Item color = {this.state.color49} label = "BYK Zahn Cup #3" value = "49"/>
              <Picker.Item color = {this.state.color50} label = "BYK Zahn Cup #4" value = "50"/>
              <Picker.Item color = {this.state.color51} label = "BYK Zahn Cup #5" value = "51"/>

              <Picker.Item color = {this.state.color11} label = "Mini Ford Dip #0" value = "11"/>
              <Picker.Item color = {this.state.color12} label = "Mini Ford Dip #1" value = "12"/>
              <Picker.Item color = {this.state.color13} label = "Mini Ford Dip #2" value = "13"/>
              <Picker.Item color = {this.state.color14} label = "Mini Ford Dip #3" value = "14"/>
              <Picker.Item color = {this.state.color15} label = "Mini Ford Dip #4" value = "15"/>
              <Picker.Item color = {this.state.color16} label = "Mini Ford Dip #5" value = "16"/>

              <Picker.Item color = {this.state.color17} label = "Ford Dip #3" value = "17"/>
              <Picker.Item color = {this.state.color18} label = "Ford Dip #4" value = "18"/>
              <Picker.Item color = {this.state.color19} label = "Ford Dip #5" value = "19"/>

              <Picker.Item color = {this.state.color20} label = "Fisher Dip Cup #1" value = "20"/>
              <Picker.Item color = {this.state.color21} label = "Fisher Dip Cup #2" value = "21"/>
              <Picker.Item color = {this.state.color22} label = "Fisher Dip Cup #3" value = "22"/>
              <Picker.Item color = {this.state.color23} label = "Fisher Dip Cup #4" value = "23"/>

              <Picker.Item color = {this.state.color24} label = "Iso Dip 3mm" value = "24"/>
              <Picker.Item color = {this.state.color25} label = "Iso Dip 4mm" value = "25"/>
              <Picker.Item color = {this.state.color26} label = "Iso Dip 5mm" value = "26"/>

              <Picker.Item color = {this.state.color27} label = "Mini Din Dip 4mm" value = "27"/>

              <Picker.Item color = {this.state.color28} label = "Ford Cup #0" value = "28"/>
              <Picker.Item color = {this.state.color29} label = "Ford Cup #1" value = "29"/>
              <Picker.Item color = {this.state.color30} label = "Ford Cup #2" value = "30"/>
              <Picker.Item color = {this.state.color31} label = "Ford Cup #3" value = "31"/>
              <Picker.Item color = {this.state.color32} label = "Ford Cup #4" value = "32"/>
              <Picker.Item color = {this.state.color33} label = "Ford Cup #5" value = "33"/>

              <Picker.Item color = {this.state.color34} label = "Iso Cup 3mm" value = "34"/>
              <Picker.Item color = {this.state.color35} label = "Iso Cup 4mm" value = "35"/>
              <Picker.Item color = {this.state.color52} label = "Iso Cup 5mm" value = "52"/>
              <Picker.Item color = {this.state.color36} label = "Iso Cup 6mm" value = "36"/>
              <Picker.Item color = {this.state.color37} label = "Iso Cup 8mm" value = "37"/>

              <Picker.Item color = {this.state.color38} label = "Din Cup 4mm" value = "38"/>

              <Picker.Item color = {this.state.color39} label = "Fisher Cup #1" value = "39"/>
              <Picker.Item color = {this.state.color40} label = "Fisher Cup #2" value = "40"/>
              <Picker.Item color = {this.state.color41} label = "Fisher Cup #3" value = "41"/>
              <Picker.Item color = {this.state.color42} label = "Fisher Cup #4" value = "42"/>

              <Picker.Item color = {this.state.color43} label = "Parlin Cup #1" value = "43"/>
              <Picker.Item color = {this.state.color44} label = "Parlin Cup #2" value = "44"/>
              <Picker.Item color = {this.state.color45} label = "Parlin Cup #3" value = "45"/>
              <Picker.Item color = {this.state.color46} label = "Parlin Cup #4" value = "46"/>




              </Picker>

              }

            {(Platform.OS === 'android')?
            <View style = {{ height: '7%', backgroundColor: 'white'}}></View> :
            <View/>
            }


            <View style = {{ height: '9%', backgroundColor: 'white'}}></View>


            <Text style = {styles.version}
            allowFontScaling = {false}
            >Version: 1.0.4</Text>

            <View style = {{ width: '80%' ,height: '5%',justifyContent: "center",alignItems: 'center'}}
              onStartShouldSetResponder = {() => this.gardcoclick}
              >
              <Text style={styles.gardco}
              allowFontScaling = {false}
              >gardco.com</Text>
            </View>

            <Button title='Go next'
             onPress={() =>navigate('SecondPage')}
            />






          </View>
        </TouchableWithoutFeedback>

      // </KeyboardAvoidingView>
      );

  }

}
