import { View, Text, Image } from 'react-native';
import React from 'react';

const Container = ({imagesSec, names}) => {
  return (
    <View>
      <View style ={{
          color: 'white',
          height: 150,
          width: 150,
        }}>
          <Image
            style = {{height: '100%', width: '100%', resizeMode: 'stretch'}}
            source = {{uri: imagesSec.imageDataContainer}}
          />
      </View>
    </View>
  )
}
export {Container};

const Container1 = ({imagesSec, names}) => {
  return (
    <View>
      <View style ={{color: 'white', height: 110, width: 110,}}>
          <Image
            style = {{height: '100%', width: '100%', resizeMode: 'stretch'}}
            source = {{uri: imagesSec.imageDataContainer}}
          />
      </View>
      {/* <Text style = {{color: 'grey', marginTop: 12}}>{names}</Text>  */}
    </View>
  )
}
export {Container1};

const Container2 = ({imagesSec, names}) => {
  return (
    <View>
      <View style ={{color: 'white', height: 110, width: 110,}}>
          <Image
            style = {{height: '100%', width: '100%', resizeMode: 'stretch'}}
            source = {{uri: imagesSec.imageDataContainer}}
          />
      </View>
      {/* <Text style = {{color: 'grey', marginTop: 12}}>{names}</Text>  */}
    </View>
  )
}
export {Container2};

const SearchImageContainer = ({images}) => {
  return(
    <View>
      <Image
        style = {{height: 90, width: 170, borderRadius: 5,marginVertical:8, marginHorizontal:8}}
        source = {{uri: images.url}}
      />
      {/* <Text style = {{color: 'white'}}>Pop</Text> */}
    </View>
  )
}
export {SearchImageContainer};

const Container3 = () => {
  return(
    <View style = {{backgroundColor: 'yellow', width: '40%', height: 50, marginVertical: '1%'}}>
      <Text style = {{}}>Rishabh</Text>
    </View>
  )
}
export {Container3};