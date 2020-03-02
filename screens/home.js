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

export default class Home extends Component{
    render() {
        const {navigation} = this.props
        return (
          <View>
              <ImageBackground source={require('../assets/new_background.jpeg')} style={{width:'100%' , height:'100%'}}>
              <View style={{ flex: 1,alignItems: 'center' , justifyContent:'center' ,padding:40}}>
                    <View>
                        <Text>Hello</Text>
                    </View>
                    <View>
                        <Text>token:{JSON.stringify(navigation.getParam('token'))}</Text>
                    </View>
                </View>
              </ImageBackground>
          </View>
        );    
      }
}