import React, { Component } from 'react';
import { Text, View, ImageBackground } from 'react-native';

import {
    StyleSheet,
    SafeAreaView,
    Alert,
    Image,
    StatusBar,
    TouchableOpacity,
    TouchableNativeFeedback,
    form
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

export default class Register extends Component{
    constructor(){
        super()
        this.state = {
            username : '',
            email : '',
            password : '',
        }
    }
    render(){
        return(
            <View>
            <ImageBackground source = {require('../assets/new_background.jpeg')} style={{width: '100%', height: '100%'}}>
                <View style={{ flex: 1,alignItems: 'center' , justifyContent:'flex-start', paddingTop:140}}>
                    <View>
                        <Image source = {require('../assets/recent_logo.png')} style = {{width :300 , height :300}}></Image>
                    </View>
                    <Input 
                        placeholder = "  Username  "
                        leftIcon = {{ type: 'MaterialCommunityIcons', name:'account-box'}}
                        style = {inputStyle.formInput}
                        onChangeText = {(username => this.setState({username}))}
                        returnKeyType = 'next'
                        autoCapitalize = 'none'
                        value = {this.state.username}
                    />
                    <Input 
                        placeholder = "  Password  "
                        leftIcon = {{ type: 'MaterialCommunityIcons', name:'lock'}}
                        style = {inputStyle.formInput}
                        onChangeText = {(password => this.setState({password}))}
                        value = {this.state.password}
                        autoCapitalize = "none"
                        returnKeyType = 'next'
                    />
                    <Input
                        placeholder = "    Email    "
                        leftIcon = {{ type: 'MaterialCommunityIcons', name:'email'}}
                        style = {inputStyle.formInput}
                        onChangeText = {(email => this.setState({email}))}
                        value = {this.state.email}
                        autoCapitalize = 'none'
                        returnKeyType = 'next'
                    />
                    <View style={{alignContent:'center' , alignItems:'center'}}>
                        <CustomButton
                        title = 'Register'
                        onPress = {()=>register(this.state.username , this.state.email , this.state.password)}>
                        </CustomButton>
                    </View>
                </View>
            </ImageBackground>
        </View>
        );
    }
}

function register(username , email , password){
    
    fetch('http://127.0.0.1:8000/accountRest/register',{
        method : 'POST',
        headers: {
            'Content-type': 'application/json'
        },
        body:JSON.stringify({
            'username':username,
            'email':email,
            'password':password

        }),
    }).then((response) => response.json())
    .catch(error =>{
        alert('error')
    })
    .then((response) => {
        alert(response['token'])
        })
        
        return;
}
    

var inputStyle = StyleSheet.create({
    formInput:{
     borderBottomWidth: 100,  
  }
  });