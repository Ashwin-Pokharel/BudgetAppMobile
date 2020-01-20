import React from 'react';
import { TouchableOpacity, StyleSheet , Text } from 'react-native';

export const CustomButton = (props) =>{
    const { title = 'Enter', style = {}, textStyle = {}, onPress = {} } = props;

    return(
        <TouchableOpacity onPress={onPress} style={[styles.button, style]}>
            <Text style={[styles.text, textStyle]}>{props.title}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button:{
        alignItems:'center',
        justifyContent:'center',
        backgroundColor : '#343434',
        width : 100,
        height : 40,
        margin : 30,
        borderRadius:25
    },
    text:{
        fontSize:20, 
        color:'#ffffff'
    }
})