import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import {
  Image,
  View,
  Text,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import styles from '../../styles/Styles';

export default function LoginScreen({navigation}){
  return(
    <>
    <SafeAreaView>
      <View style = {styles.mainContainer}>
        <View style = {styles.headerContainer}>
          <Image
            style = {styles.imageStyles}
            source = {{uri: 'https://cdn-icons-png.flaticon.com/512/174/174872.png'}}
          />
          <Text style = {styles.textStyles}>Spotify</Text>
        </View>
        <Text style = {{textAlign: 'center', fontSize: 40,fontWeight: 'bold', marginTop: '10%'}}>We play the music. You enjoy. Deal?</Text>
        <View style = {styles.midContainer}>
          <TouchableOpacity 
            style = {styles.signUpStyle} 
            activeOpacity={0.8}
            onPress = {() => {navigation.navigate('UserLogin')}}
          >
            <Text style = {{fontSize: 20, fontWeight: 'bold', color: 'white'}}>SIGN UP</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style = {styles.logInStyle}
            activeOpacity={0.8}
            onPress = {() => {navigation.navigate('BottomTabs')}}
          >
            <Text style = {{fontSize: 20, fontWeight: 'bold',}}>LOG IN</Text>
          </TouchableOpacity>
        </View>
      </View>
      <Text style = {{fontSize: 15, textAlign: 'center', marginTop: 160}}>By clicking on Sign up, you agree to Spotify's Terms and Conditions of Use</Text>
    </SafeAreaView>
    </>
  )
}