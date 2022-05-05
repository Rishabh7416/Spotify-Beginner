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
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { NavigationContainer, NavigationRouteContext } from '@react-navigation/native';
import HomeScreen from '../Home/HomeScreen';
import SearchScreen from '../Search/SearchScreen';
import LibraryScreen from '../Library/LibraryScreen';
import PremiumScreen from '../Premium/PremiumScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from '../LogSign/LogInScreen';
import UserLogin from '../LogSign/UserLogin';
import Player from '../../player/Player';
import ProfileScreen from './ProfileScreen';

const Tab = createMaterialBottomTabNavigator();
const Stack = createNativeStackNavigator();
const Homestack = createNativeStackNavigator();

export default function Routes(){
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen options={{headerShown: false}} name = "LoginScreen" component = {LoginScreen}/>
        <Stack.Screen options={{headerShown: false}} name = "UserLogin" component = {UserLogin}/>
        <Stack.Screen options={{headerShown: false}} name = "Player" component = {Player}/>
        <Stack.Screen options={{headerShown: false}} name = "BottomTabs" component = {BottomTabs}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export function ProfileRoute(){
  return(
    <Homestack.Navigator>
      <Homestack.Screen options={{headerShown: false}} name = "Home" component = {HomeScreen}/>
      <Homestack.Screen options={{headerShown: false}} name = "ProfileScreen" component = {ProfileScreen}/>
    </Homestack.Navigator>
  )
}

export function BottomTabs(){
  return(
      <Tab.Navigator
        initialRouteName="ProfileRoute"
        activeColor='white'
        inactiveColor='grey'
        shifting={false}
        barStyle={{backgroundColor:'black'}}
      >
        <Tab.Screen name="Home" component={ProfileRoute}
          options = {{tabBarIcon: ({focused}) => (
          <Image
            style = {{height: 24, width: 24}}
            source = {focused?
              require('../../../assets/homeActiveIcon.png'):
              require('../../../assets/homepageButtonActive.png')
          }/>
        )}}
        />
        <Tab.Screen name="Search" component={SearchScreen}
          options = {{tabBarIcon: ({focused}) => (
          <Image
            style = {{height: 23 , width: 23}}
            source = {focused?
              require('../../../assets/searchInactiveIcon.png'):
              require('../../../assets/searchInactiveIcon.png')
            }/>
        )}}
        />
        <Tab.Screen name="Your Library" component={LibraryScreen}
          options = {{tabBarIcon: ({focused}) => (
          <Image
            style = {{height: 24 , width: 24}}
            source = {focused?
              require('../../../assets/libraryIcon.png'):
              require('../../../assets/libraryIcon.png')
            }
          />
        )}}
        />
        <Tab.Screen name="Premium" component={PremiumScreen}
          options = {{tabBarIcon: ({focused}) => (
          <Image
            style = {{height: 24, width: 24}}
            source = {focused?
              require('../../../assets/spotifyTabIcon.png'):
              require('../../../assets/spotifyTabIcon.png')
            }
          />
        )}}
        />
      </Tab.Navigator>
  )
}