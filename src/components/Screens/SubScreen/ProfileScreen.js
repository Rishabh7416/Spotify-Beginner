import { View, Text, Image, TouchableOpacity, StyleSheet, Modal } from 'react-native'
import React, {useState} from 'react'

const ProfileScreen = () => {
    const [visibleModal, setVisibleModal] = useState(true);
  return (
        <View style = {{flex:1, backgroundColor: 'black', paddingTop: '5%'}}>
            <View style = {{flexDirection: 'row', justifyContent: 'space-between'}}>
                <Image style = {{height: 20, width: 20}} source = {require('.././../../assets/backArrow.png')}/>
                <Image style = {{height: 20, width: 20}} source = {require('.././../../assets/profileMenu.png')}/>
            </View>
            <View style = {{alignItems: 'center', marginTop: '10%'}}>
                <Image
                    source = {{uri: 'https://thecinemaholic.com/wp-content/uploads/2021/03/0_iRU5IQ2KGkDyGzyw.jpg'}}
                    style = {{height: 100, width: 100, borderRadius: 100/2}}
                />
                <Text style = {styles.erenStyle}>Eren</Text>
                <TouchableOpacity style = {styles.editStyle}>
                    <Text style = {styles.editProfileStyle}>Edit profile</Text>
                </TouchableOpacity>
                <View style = {styles.container}>
                    <Text style = {{color: 'white', fontSize: 9, letterSpacing: 1}}>FOLLOWERS</Text>
                    <Text style = {{color: 'white', fontSize: 9, letterSpacing: 1}}>FOLLOWING</Text>
                </View>
                <Text style = {{color: 'white', fontWeight: 'bold', fontSize: 16}}>Playlists</Text>
            </View>
            <View style = {{flexDirection: 'row', alignItems: 'center', marginTop: '5%'}}>
                <Image source = {{uri: 'https://thecinemaholic.com/wp-content/uploads/2021/03/0_iRU5IQ2KGkDyGzyw.jpg'}} style = {{height: 50, width: 50}}/>
                <View style = {{marginLeft: '3%'}}>
                    <Text style = {{color: 'white', fontWeight: '600'}}>My Playlist</Text>
                    <Text style = {{color: 'grey', fontSize: 12}}>0 followers</Text>
                </View>
            </View>
            <Modal visible = {!visibleModal}>
                <View style = {{flex: 1, backgroundColor: 'black', alignItems: 'center'}}>
                    <Text style = {{color: 'white'}}>fghkl;lkjh</Text>
                    <Image style = {{height: 200, width: 160, position: 'absolute', bottom: 200}} source = {{uri: 'https://thecinemaholic.com/wp-content/uploads/2021/03/0_iRU5IQ2KGkDyGzyw.jpg'}}/>
                </View>
                <TouchableOpacity style = {{backgroundColor: 'red', flexDirection: 'row'}}>
                    <Image source = {require('../../../assets/invite.png')} style = {{height: 25, width: 25}}/>
                    <Text style = {{color: 'white', marginLeft: 20, fontWeight: 'bold', fontSize: 15}}>Find friends</Text>
                </TouchableOpacity>
            </Modal>
        </View>
    )
}

export default ProfileScreen

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '55%',
        marginVertical: '8%',
    },

    editStyle: {
        borderColor: 'grey',
        justifyContent: 'center',
        borderWidth: 1,
        borderRadius: 40,
        height: 28,
        width: '22%'
    },

    erenStyle: {color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
        marginTop: '5%',
        marginBottom: '9%'
    },

    editProfileStyle: {color: 'white', textAlign: 'center', fontSize: 11, fontWeight: '500'}
});