import axios from 'axios';
import  React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  Image,
  TouchableOpacity,
  FlatList,
  TextInput
} from 'react-native';
import {Modal} from 'react-native';
import {Data, imageDataContainer, imageDataContainer1} from '../../Data/data';

const LibraryScreen = ({navigation}) => {

  const [data, setData] = useState([]);
  const [modalsVisible, setModalsVisible] = useState(false);
  // useEffect(() => {
  //   axios.get('https://jsonplaceholder.typicode.com/photos')
  //   .then((response) => {
  //     setData(response.data.slice(0, 10));
  //   })
  //   .catch((error) => {
  //     console.log("errors", error);
  // })
  // }, [])

  const renderItem = ({item}) => {
    return(
      <View>
        <TouchableOpacity onPress={() => navigation.navigate("Player")} style = {{flexDirection: 'row', alignItems: 'center'}}>
            <Image
              style = {{height: 60, width: 60}}
              source = {{uri: item.imageDataContainer}}
            />
            <View>
              <Text style = {{color: 'white', marginLeft: 18, fontWeight: '500'}}>{item.name}</Text>
              <Text style = {{color: 'grey', marginLeft: 18, fontWeight: '500', fontSize: 10}}>{item.name}</Text>
          </View>
          </TouchableOpacity>
      </View>
    )
  }

  const itemSeparatorComponent = () =>{
    return(
      <View style={{height:'2%'}}/>
    )
  }

  return (
    <>
    <Modal visible = {modalsVisible} animationType='fade'>
      <SafeAreaView style = {{backgroundColor: 'black'}}>
        <View style = {{height: '100%', width: '100%', backgroundColor: 'black'}}>
          <View style = {{flexDirection: 'row', alignItems:'center'}}>
            <TouchableOpacity onPress = {() => {setModalsVisible(!modalsVisible)}} style={{width:'10%'}}>
              <Image
                source = {require('../../../assets/left-arrow.png')}
                style = {{height: 20, width: 20, marginLeft: 10}}
              />
            </TouchableOpacity>
              <TextInput
                style = {styles.textInputStyle}
                placeholder = "Search Your Library"
                placeholderTextColor = "#CECECE"
              />
            </View>
            <Text style = {{textAlign: 'center', color: 'white'}}>Find your favorite</Text>
        </View>
      </SafeAreaView>
    </Modal>

    <SafeAreaView style = {{flex: 1, backgroundColor: 'black'}}>
      <View style = {styles.first_container}>
        <View style = {styles.second_container}>
          {/* <Image style = {styles.image_container} source = {img}/> */}
          <Text style = {styles.text_container}>Your Library</Text>
          <View style = {styles.imageContainerStyle}>
            <TouchableOpacity onPress = {() => {setModalsVisible(!modalsVisible)}}>
              <Image
                style = {{height: 25, width: 25}}
                source = {require('../../../assets/magnifying-glass.png')}
              />
            </TouchableOpacity>
            <TouchableOpacity>
            <Image
                style = {{height: 18, width: 19}}
                source = {require('../../../assets/plus.png')}
              />
            </TouchableOpacity>
          </View>
        </View>
        <View style = {{flexDirection: 'row', justifyContent:'space-between', width:'62%', marginTop: 20}}>
          <TouchableOpacity style = {styles.buttonStyle}>
            <Text style = {{color: 'white', textAlign: 'center', fontSize: 11}}>Playlists</Text>
          </TouchableOpacity>
          <TouchableOpacity style = {styles.buttonStyle}>
            <Text style = {{color: 'white', textAlign: 'center', fontSize: 11}}>Artists</Text>
          </TouchableOpacity>
          <TouchableOpacity style = {styles.buttonStyle}>
            <Text style = {{color: 'white', textAlign: 'center', fontSize: 11}}>Albums</Text>
          </TouchableOpacity>
        </View>
        <View style = {{flexDirection: 'row', alignItems: 'center', marginTop: 30}}>
          <TouchableOpacity>
          <Image
            style = {{height: 9, width: 8}}
            source = {require('../../../assets/downarrow.png')}
          />
          </TouchableOpacity>
          <TouchableOpacity>
          <Image
            style = {{height: 9, width: 8}}
            source = {require('../../../assets/uparrow.png')}
          />
          </TouchableOpacity>
          <Text style = {{fontWeight: '500', color: 'white', fontSize: 12, marginHorizontal: 12}}>Most recent</Text>
        </View>
        <FlatList
          style = {{marginTop: '5%'}}
          data = {imageDataContainer}
          renderItem = {renderItem}
          ItemSeparatorComponent = {itemSeparatorComponent}
        />
      </View>
    </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  textInputStyle:{
    backgroundColor: '#1E1E1E',
    height: 35,
    width: '85%',
    borderRadius: 5,
    fontSize: 12,
    fontWeight: '700',
    padding: 10
  },

  first_container:{
    padding: 10,
    backgroundColor: 'black',
    flex: 1,
  },

  imageContainerStyle: {
    width: '20%',
    flexDirection: 'row',
    alignItems: 'center',

    justifyContent: 'space-between',
    // marginLeft:150
  },

  second_container:{
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent:'space-between'
    // backgroundColor: 'yellow'
  },

  // third_container:{
  //   flexDirection: 'row',
  //   alignItems: 'center'
  // },

  text_container:{
    fontSize: 18,
    fontWeight: 'bold',
    // marginLeft: 12,
    color: 'white',
    // fontFamily: 'sans-serif-thin'
  },

  image_container:{
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 50,
    height: 38,
    width: 38,
  },

  buttonStyle: {
    height: 32,
    width: 70,
    borderWidth: 0.5,
    // padding: 5,
    borderColor: 'grey',
    borderRadius: 17,
    alignItems: 'center',
    justifyContent:'center'
  }
});
export default LibraryScreen;