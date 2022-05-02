import axios from 'axios';
import  React, {useEffect, useRef, useState} from 'react';
import {
  TouchableOpacity,
  StyleSheet,
  View,
  Text,
  SafeAreaView,
  Image,
  TextInput,
  FlatList,
  Pressable,
  Button
} from 'react-native';
import { SearchImageContainer } from '../SubScreen/Container';
// import CustomInput from './customInputs/customInput';

const SearchScreen = ({img}) => {
  const [state, setState] = useState([]);
  const refer = useRef();

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/photos')
    .then((res) => {
      return res.json();
    })
    .then((response) => {
      setState(response.slice(0, 4));
    })
    .catch((error) => {
      console.log("error in console", error)
    })
  }, []);

  const renderItem = ({item}) => {
    return(
        <View>
            {/* <Image style = {styles.flatlist_image}source = {item}/> */}
            <SearchImageContainer images = {item}/>
        </View>
    )
  }

  const itemSeparator = () => {
    return(
      <View style = {{margin: '1%'}}/>
    )
  }

  // const TopBut = () => { refer.current.scrollToIndex({index: 10}) };
  // const loadData = () => { setState() }

  return (
    <SafeAreaView style = {{flex:1, backgroundColor: 'black'}}>
      <View style = {styles.first_container}>
        <View style = {styles.second_container}>
          <Image
            style = {styles.image_container}
            source = {img}
          />
          <Text style = {styles.text_container}>Search</Text>
        </View>
        <View style = {styles.textView_container}>
          <TextInput
            placeholder='Artists, songs, or podcasts'
            placeholderTextColor='black'
            style = {styles.textinput_container}
          />
        <Text style = {{color: 'white', fontWeight: 'bold', marginVertical: '4%'}}>Your top genres</Text>
        </View>
          <FlatList
            contentContainerStyle = {{alignItems: 'center',}}
            ref = {refer}
            data = {state}
            renderItem = {(item) => {return renderItem(item)}}
            keyExtractor = {(item) => item.id}
            numColumns = {2}
          />
          <Text style = {{color: 'white', fontWeight: 'bold'}}>Rishabh</Text>
          <FlatList
            contentContainerStyle = {{alignItems: 'center',}}
            ref = {refer}
            data = {state}
            renderItem = {(item) => {return renderItem(item)}}
            keyExtractor = {(item) => item.id}
            numColumns = {2}
          />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  button: {
    position: 'absolute',
    width: 50,
    height: 50,
    borderRadius: 50 / 2,
    backgroundColor: 'pink',
    alignItems: 'center',
    justifyContent: 'center',
    right: 30,
    bottom: 30,
  },

  arrow: {
    fontSize: 48,
  },

  first_container:{
    flex: 1,
    backgroundColor: 'black',
    padding: 10
  },

  second_container:{
    flexDirection: 'row',
    alignItems: 'center'
  },

  // third_container:{
  //   flexDirection: 'row',
  //   alignItems: 'center'
  // },

  text_container:{
    fontSize: 22,
    fontWeight: 'bold',
    marginLeft: 12,
    color: 'white',
    // fontFamily: 'sans-serif-thin'
  },

  image_container:{
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 50,
    height: 35,
    width: 35,
  },

  textinput_container:{
    backgroundColor: 'white',
    height: 42,
    borderRadius: 5,
    padding: 10,
    fontSize: 12,
    fontWeight: 'bold'
  },

  textView_container:{
    marginTop: 30
  },

  flatlist_image:{
    marginHorizontal:10,
    marginVertical:10,
    width:172,
    height:110,
    resizeMode:'center',
    borderRadius: 5
  }
});
export default SearchScreen;