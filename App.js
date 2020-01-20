import React, { Component } from 'react';
import { Text, View, ImageBackground } from 'react-native';

import {
  StyleSheet,
  SafeAreaView,
  Alert,
  Image,
  StatusBar,
  TouchableOpacity,
} from 'react-native';

import {
  Button,
  Input,
} from 'react-native-elements'

import { Colors } from 'react-native/Libraries/NewAppScreen';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Login from './screens/login'

class HomeScreen extends Component {
  render() {
    return (
      <View>
        <ImageBackground source = {require('./assets/new_background.jpeg')} style={{width: '100%', height: '100%'}}>
          <View style={{ flex: 1, justifyContent: "center", alignItems: "center"}}>

            <View>
              <Image source = {require('./assets/recent_logo.png')} style = {{width :300 , height :300}}></Image>
            </View>

            <View>
              <Button
                title = "Log In"
                style = {styles.logIn}
                onPress = {()=>this.props.navigation.navigate('loginForm')}
                type='outline'
                raised = {true}
              ></Button>
            </View>
            <Separator></Separator>
            <View>
              <Button
                title = "Sign Up"
                style = {styles.logIn}
                >
              </Button>
            </View>
            </View>
        </ImageBackground>
      </View>
    );    
  }
}



const styles = StyleSheet.create({
  logIn:{
    fontSize:10,
    width:200,
    borderRadius:50,
  },
  separator: {
    marginVertical: 8,
    borderBottomColor: '#737373',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
});

function Separator() {
  
  return <View style={styles.separator} />;
}

const navigator = createStackNavigator({
  home:
    {
      screen: HomeScreen,
      navigationOptions:{
        headerShown:false,
      }
    },
  loginForm:
  {
    screen : Login,
    navigationOptions:{
      headerShown:false,
    }
  },
},{
    initialRouteName : 'home'
  }
);

const AppContainer =  createAppContainer(navigator);

export default  class App extends React.Component{
  render(){
    return <AppContainer/>
  }
}


