import React, {useEffect, useState, useRef} from 'react';
import {
  Image,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Dimensions,
  FlatList,
  Alert,
  Animated
} from 'react-native';
import TrackPlayer, {
  Capability,
  Event,
  RepeatMode,
  State,
  usePlaybackState,
  useProgress,
  useTrackPlayerEvents,
} from 'react-native-track-player';
import Slider from '@react-native-community/slider';
import AnimeSongsList from './StoreOfSongsApiCalls';

const { width, height } = Dimensions.get('window');

const setupPlayer = async() => {
  await TrackPlayer.setupPlayer();
  await TrackPlayer.add(AnimeSongsList);
}

const playBack = async(playbackState) => {
  const currentTrack = await TrackPlayer.getCurrentTrack();
  if(currentTrack != null){
    if(playbackState == State.Paused){
      await TrackPlayer.play();
    }
    else{
      await TrackPlayer.pause();
    }
  }
}

export default function Player(){

  const playbackState = usePlaybackState();
  const [indexAnimeSongsList, setIndexAnimeSongsList] = useState(0);
  const ScrollingReference = useRef(new Animated.Value(0)).current;
  const ScrollingReferenceED = useRef(null);
  const [likeAnimation, setLikeAnimation] = useState(false);

  const renderItem = ({index, item}) => {
    return(
      <Animated.View style = {styles.animatedView}>
        <Image
          source = {{uri:item.artwork}}
          style = {{width: '100%', height: '100%', resizeMode: 'stretch' }}
        />
      </Animated.View>
    )
  }

  useEffect(() =>{
    setupPlayer();
    ScrollingReference.addListener(({ value }) => {
      const index = Math.round(value/width);
      setIndexAnimeSongsList(index);
    });
    return() =>(ScrollingReference.removeAllListeners());
  },[])

  const scrollN = () => {
    ScrollingReferenceED.current.scrollToOffset({offset: (indexAnimeSongsList + 1) * width})
  }

  const scrollP = () => {
    ScrollingReferenceED.current.scrollToOffset({offset: (indexAnimeSongsList - 1) * width})
  }

  return(
    <SafeAreaView style = {styles.safeContainer}>
      <View style = {styles.topTextContainer}>
        <Text style = {styles.playing}>PLAYING FROM THE LIBRARY</Text>
        <Text style = {styles.likedSong}>Liked Songs</Text>
      </View>
      <View style = {{paddingHorizontal: 20, marginTop: '10%'}}>
          <Animated.FlatList
            data = {AnimeSongsList}
            renderItem = {renderItem}
            horizontal = {true}
            showsHorizontalScrollIndicator={false}
            keyExtractor = {(item) => item.id}
            onScroll = {Animated.event([{nativeEvent: {contentOffset: {x: ScrollingReference}}}], {useNativeDriver: true})}
            ref = {ScrollingReferenceED}
            style = {{backgroundColor: 'white'}}
          />
        <View style = {styles.artistSongLikeContainer}>
          <View>
            <Text style = {styles.songTitle}>{AnimeSongsList[indexAnimeSongsList].title}</Text>
            <Text style = {{fontSize: 15, color: 'grey'}}>{AnimeSongsList[indexAnimeSongsList].artist}</Text>
          </View>

{/* Animation to the like button */}

          <TouchableOpacity
            style={{position:'absolute', right:0}}
            onPress={() => setLikeAnimation(!likeAnimation)}
          >
            <Image
              style = {styles.imageContainer}
              source =
              {
                likeAnimation ? require('../../assets/heartButton.png') : require('../../assets/greenHeartButton.png')
              }
            />
          </TouchableOpacity>

{/* Animation to the like button */}

        </View>
        <View style = {{marginTop: '4%'}}>
          <Slider
            style = {styles.sliderContainer}
            minimumValue = {0}
            minimumTrackTintColor = "white"
            maximumValue = {100}
            maximumTrackTintColor = "grey"
            thumbTintColor = "white"
          />
        </View>
        <View style = {styles.actionButtonContainer}>
        <TouchableOpacity onPress={() => {}}>
          <Image
            style = {styles.imageContainer}
            source = {require('../../assets/shuffleButton.png')}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={scrollP}>
          <Image
            style = {styles.imageContainer}
            source = {require('../../assets/previousButton.png')}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>playBack(playbackState)}>
        {
          <Image
            style = {styles.playButton}
            source =
            {
              playbackState === State.Playing ? require('../../assets/pauseButton.png'):require('../../assets/play-button.png')
            }
          />
        }
        </TouchableOpacity>
        <TouchableOpacity onPress={scrollN}>
          <Image
            style = {styles.imageContainer}
            source = {require('../../assets/nextButton.png')}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {}}>
          <Image
            style = {styles.imageContainer}
            source = {require('../../assets/repeatButton.png')}
          />
        </TouchableOpacity>
      </View>
      <View style = {{flexDirection: 'row', justifyContent: 'space-between', marginTop: '6%'}}>
        <Image
          source = {require('../../assets/shareButton.png')}
          style = {{height: 18, width: 18}}
        />
        <View style = {{flexDirection: 'row', width: 68, justifyContent: 'space-between'}}>
          <Image
            source = {require('../../assets/shareButton.png')}
            style = {{height: 18, width: 18}}
          />
          <Image
            source = {require('../../assets/shareButton.png')}
            style = {{height: 18, width: 18}}
          />
        </View>
      </View>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  safeContainer:{
    flex: 1,
    backgroundColor: 'black'
  },

  container:{
    marginTop: '5%',
  },

  actionContainer:{
    borderTopWidth: 0.5,
    borderTopColor: 'white',
    alignItems: 'center',
    paddingVertical: 15,
    flexDirection: 'row',
    justifyContent: 'center',
    // justifyContent: 'space-evenly'
  },

  imageContainer:{
    height: 22,
    width: 22,
  },

  topTextContainer: {
    alignItems: 'center',
    marginBottom: '8%'
  },

  likedSong:{
    color: 'white',
    fontSize: 12,
    fontWeight: 'bold',
    letterSpacing: 0.5
  },

  playing: {
    color: 'white',
    fontSize: 10,
    letterSpacing: 1
  },

  playButton:{
    height: 65,
    width: 65,
  },

  actionButtonContainer:{
    // backgroundColor: 'blue',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  artistSongLikeContainer:{
    marginTop: '19%',
    flexDirection: 'row',
    // margin: '4%',
    alignItems: 'center',
    // backgroundColor: 'grey'
  },

  sliderContainer:{
    // backgroundColor: 'yellow',
    alignSelf: 'center',
    width: '100%',
    height: 40,
    flexDirection: 'row',
  },

  animatedView: {
    justifyContent: 'center',
    alignItems: 'center',
    width: width,
    height: height/2.6
  },

  songTitle:{
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white'
  }
});