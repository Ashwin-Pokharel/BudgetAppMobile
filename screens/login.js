import React, { Component } from 'react';
import { Text, View, ImageBackground } from 'react-native';

import {
    StyleSheet,
    SafeAreaView,
    Alert,
    Image,
    StatusBar,
    TouchableOpacity,
    TouchableNativeFeedback
  } from 'react-native';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { 
    Input,
    Button
    } from 'react-native-elements';

import { FormLabel, FormInput, FormValidationMessage } from 'react-native-elements'
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { color } from 'react-native-reanimated';

import {CustomButton} from '../components/customButton.js'

 export default class Login extends Component{
      render(){
          return(
            <View>
                <ImageBackground source = {require('../assets/new_background.jpeg')} style={{width: '100%', height: '100%'}}>
                    <View style={{ flex: 1,alignItems: 'center' , justifyContent:'flex-start', paddingTop:140}}>
                        <View>
                            <Image source = {require('../assets/recent_logo.png')} style = {{width :300 , height :300}}></Image>
                        </View>
                        <Input 
                            placeholder = "  Email  "
                            leftIcon = {{ type: 'MaterialCommunityIcons', name:'account-box'}}
                            style = {inputStye.formInput}
                        />
                        <Input 
                            placeholder = "  Password  "
                            leftIcon = {{ type: 'MaterialCommunityIcons', name:'lock-reset'}}
                            style = {inputStye.formInput}
                        />
                        <View style={{alignContent:'center' , alignItems:'center'}}>
                            <CustomButton
                            title = 'Log In'>
                            onPress ={()=>Alert('login Pressed')}
                            </CustomButton>
                        </View>
                    </View>
                </ImageBackground>
            </View>
          );
      }
  }

  function login(url , user_name , password) {
    
      
  }

  var inputStye = StyleSheet.create({
      formInput:{
       borderBottomWidth: 100,  
    }
    });