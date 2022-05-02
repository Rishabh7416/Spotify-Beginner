import { View, Text, Image } from 'react-native'
import React from 'react'

export default function NotificationScreen() {
  return (
    <View style = {{borderWidth: 1, borderColor: 'white', height: 60, overflow: 'hidden', resizeMode: 'contain'}}>
      <Image
        style = {{height: '100%', width: '30%'}}
        source = {{uri:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJEVyZE7e6jAND0IuKaBg_Ve7iDxvvF-LkeAEBkBvm_ZQ3kiVNLZStiBKrUmCl_fww_nw&usqp=CAU'}}
      />
    </View>
  )
}