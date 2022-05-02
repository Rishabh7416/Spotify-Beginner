import React from 'react';
import {View, Text, TextInput} from 'react-native';

export default function CustomInput(props){
    return(
        <View style = {{borderWidth: 1, borderColor: 'white'}}>
        <TextInput
           placeholder = {props.placeholder}
           placeholderTextColor= {props.placeholderTextColor ?? 'white' }
        />
        </View>
    )
}