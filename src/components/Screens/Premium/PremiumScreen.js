import  React from 'react';
import { View, Text, SafeAreaView, StyleSheet, Image } from 'react-native';
import Player from '../../player/Player';

const PremiumScreen = () => {
  return (
    <SafeAreaView style = {{flex:1, backgroundColor: 'black'}}>
      {/* <Player/> */}
    </SafeAreaView>
  );
}


const styles = StyleSheet.create({
  first_container:{
    flex: 1,
    padding: 16
  },

  second_container:{ 
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },

  text_container:{
    fontSize: 25,
    textAlign: 'center',
    marginBottom: 16,
    color: 'white'
  },

  image_container:{
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 50,
    height: 80,
    width: 80,
  }
});
export default PremiumScreen;