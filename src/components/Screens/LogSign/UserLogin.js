import {
  View,
  Text,
  SafeAreaView,
  TextInput,
  StyleSheet,
  Image,
  TouchableOpacity
} from 'react-native'
import React from 'react'
import styles from '../../styles/Styles';

export default function UserLogin({navigation}) {
  const Validation = () => {

  }

  return (
    <SafeAreaView>
      <View style = {styles.headerContainer}>
          <Image
            style = {styles.imageStyles}
            source = {{uri: 'https://cdn-icons-png.flaticon.com/512/174/174872.png'}}
          />
          <Text style = {styles.textStyles}>Spotify</Text>
        </View>
      <View style = {styles.container}>
        <TextInput
          style = {styles.inputContainer}
          placeholder = "Email address or username"
          placeholderTextColor = "black"
        />
        {/* {
          <Text>Invalid Email Id</Text>
        } */}
        <TextInput
          style = {styles.inputContainer}
          placeholder = "Password"
          placeholderTextColor = "black"
        /> 
        <TouchableOpacity onPress = {() => {navigation.navigate('LoginScreen')}} style = {[styles.logInStyle, {backgroundColor: 'green'}]}>
          <Text style = {{fontSize: 20, fontWeight: 'bold', color: 'white'}}>LOG IN</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}