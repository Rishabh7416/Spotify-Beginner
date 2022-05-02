import {
    View,
    Text,
    Image,
    ScrollView,
    SafeAreaView,
    FlatList,
    SectionList
} from 'react-native'
import React from 'react'

export default function Album(props) {
  return (
    <View>
      <Text>{props.artistTop}</Text>
    </View>
  )
}