import React, {useState, useEffect} from 'react';
import {
  TouchableOpacity,
  StyleSheet,
  View,
  Text,
  SafeAreaView,
  Image,
  FlatList,
  ScrollView,
  Alert,
} from 'react-native';
// import NotificationScreen from '../NotifIcations/NotificationScreen';
import { Container, Container1, Container2, Container3 } from '../SubScreen/Container';
import { Dimensions } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {Modal} from 'react-native';
import {Data, imageDataContainer, imageDataContainer1} from '../../Data/data';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

//Remember points
//no different API

const HomeScreen = ({navigation}) => {
  // const [state, setState] = useState([]);
  const [visiblemodal, setVisibleModal] = useState(false);
  // const refer = useRef();

  // useEffect(() => {
  //   fetch('https://api.imgflip.com/get_memes')
  //     .then(res => {
  //       return res.json();
  //     })
  //     .then(response => {
  //       console.log('fetch response', response.data.memes);
  //       setState(response.data.memes);
  //     })
  //     .catch(error => {
  //       console.log('error in console', error);
  //     });
  // }, []);

  const renderItem = ({item}) => {
    return (
      <TouchableOpacity onPress={() => navigation.navigate('Player')}>
        <Container imagesSec={item} />
      </TouchableOpacity>
    );
  };

  const renderItem1 = ({item}) => {
    return (
      <TouchableOpacity onPress={() => navigation.navigate('Player')}>
        <Container1 imagesSec={item} />
      </TouchableOpacity>
    );
  };

  const renderItem3 = ({item}) => {
    return(
      <View style = {{flexDirection: 'row'}}>
        <View>
          {
            item.header?
            <Text style = {{color: 'white', fontWeight: 'bold', marginVertical: '6%'}}>{item.header}</Text>:null
          }
          <Text style = {{color: 'white', fontWeight: '600'}}>{item.title}</Text>
          <Text style = {{color: 'grey'}}>{item.description}</Text>
        </View>
        {/* <TouchableOpacity style = {{backgroundColor: 'red'}}>
          <Image style = {{height:40}} source = {{uri: item.imageUrl}}/>
        </TouchableOpacity> */}
      </View>
    )
  }

  const listHeaderComponent = () => {
    console.log("Navigation", navigation)
    return(
      <View>
        <View style = {styles.midContainer}>
          <Text style = {{color: 'white', fontWeight: '700', fontSize: 17}}>Free Account</Text>
          <TouchableOpacity style = {styles.goPremium}>
            <Text style = {{fontWeight: '600'}}>Go Premium</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity onPress={() => {
          navigation.navigate('ProfileScreen')
          setVisibleModal(!visiblemodal)}}
          style = {{flexDirection: 'row', alignItems: 'center', marginTop: '8%'}}>
          <Image
            source = {{ uri: 'https://thecinemaholic.com/wp-content/uploads/2021/03/0_iRU5IQ2KGkDyGzyw.jpg' }}
            style = {{borderRadius: 100/2, height: 65, width: 65}}/>
          <View style = {{marginLeft: '3%'}}>
            <Text style = {{color: 'white', fontSize: 20, fontWeight: '600', letterSpacing: 0.5}}>Eren</Text>
            <Text style = {{color: 'grey', fontSize: 12, fontWeight: '500'}}>View Profile</Text>
          </View>
          <Image
            source = {require('../../../assets/backBtn.png')}
            style = {{height: 15, width: 15, position: 'absolute', right: 0}}
          />
        </TouchableOpacity>
      </View>
    )
  }

  const itemSeparator = () => {
    return <View style={{marginHorizontal: 10}} />;
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <Modal visible = {visiblemodal} animationType='fade'>
        <SafeAreaView style = {{backgroundColor: 'black'}}>
          <View style = {styles.modalContainer}>
            <View style = {styles.modalheaderContainer}>
              <TouchableOpacity
                onPress = {() => {setVisibleModal(!visiblemodal)}}
                style={{left: 6, alignItems:'center', position: 'absolute'}}>
                <Image
                  source = {require('../../../assets/back.png')}
                  style = {{height: 25, width: 25}}
                />
              </TouchableOpacity>
              <Text style = {styles.settingStyle}>Settings</Text>
            </View>
            <FlatList
              data = {Data}
              renderItem = {renderItem3}
              ListHeaderComponent = { listHeaderComponent}
            />
          </View>
        </SafeAreaView>
      </Modal>
      <LinearGradient colors={["#5D08C5", "black", "black", "black", "black", "black", "black", "black"]}>
      <ScrollView showsHorizontalScrollIndicator = {false}>
        <View style={styles.first_container}>
          <View style={styles.second_container}>
            <Text style={styles.text_container}>Good morning</Text>
            <View style={styles.headerContainer}>
              <TouchableOpacity onPress = {() => {}} style={{height:30, width:30, alignItems:'center'}}>
                  <Image
                  style={styles.image_container}
                  source={require('../../../assets/notificationBell.png')}
                />
              </TouchableOpacity>
              <TouchableOpacity onPress = {() => {}} style={{height:22, width:22, alignItems:'center'}}>
                <Image
                  style={styles.image_container}
                  source={require('../../../assets/time.png')}
                />
              </TouchableOpacity>
              <TouchableOpacity
                onPress = {() => {setVisibleModal(!visiblemodal)}}
                style={{height:24, width:24, alignItems:'center'}}
              >
                  <Image
                  style={styles.image_container}
                  source={require('../../../assets/settings.png')}
                />
              </TouchableOpacity>
            </View>
          </View>
          <View style={{marginVertical: 20}}>
            {/* <View>
              <View>
                <Container3/>
                <Container3/>
                <Container3/>
              </View>
              <View>
                <Container3/>
                <Container3/>
                <Container3/>
              </View>
            </View> */}
            <View style = {{marginTop: 40}}>
              <Text style={{fontSize: 20, fontWeight: 'bold', color: 'white', marginBottom: 20}}>More of What you like</Text>
              <FlatList
                data={imageDataContainer1}
                horizontal
                initialNumToRender={5}
                renderItem={renderItem1}
                ItemSeparatorComponent={itemSeparator}
                keyExtractor={item => item.id}
                pagingEnabled={true}
                showsHorizontalScrollIndicator={false}
              />
            </View>
            <View style = {{marginTop: 40}}>
              <Text style={{fontSize: 20, fontWeight: 'bold', color: 'white', marginBottom: 20}}>Charts</Text>
              <FlatList
                data={imageDataContainer}
                horizontal
                initialNumToRender={5}
                renderItem={renderItem}
                ItemSeparatorComponent={itemSeparator}
                keyExtractor={item => item.id}
                pagingEnabled={true}
                showsHorizontalScrollIndicator={false}
              />
            </View>
            <View style = {{marginTop: 40}}>
              <Text style={{fontSize: 20, fontWeight: 'bold', color: 'white', marginBottom: 20}}>Recently played</Text>
              <FlatList
                data={imageDataContainer1}
                horizontal
                initialNumToRender={5}
                renderItem={renderItem}
                ItemSeparatorComponent={itemSeparator}
                keyExtractor={item => item.id}
                pagingEnabled={true}
                showsHorizontalScrollIndicator={false}
              />
            </View>
            <View style = {{marginTop: 40}}>
              <Text style={{fontSize: 20, fontWeight: 'bold', color: 'white', marginBottom: 20}}>Episodes for you</Text>
              <FlatList
                data={imageDataContainer1}
                horizontal
                initialNumToRender={5}
                renderItem={renderItem}
                ItemSeparatorComponent={itemSeparator}
                keyExtractor={item => item.id}
                pagingEnabled={true}
                showsHorizontalScrollIndicator={false}
              />
            </View>
            <View style = {{marginTop: 40}}>
              <Text style={{fontSize: 20, fontWeight: 'bold', color: 'white', marginBottom: 20}}>Uniquely yours</Text>
              <FlatList
                data={imageDataContainer1}
                horizontal
                initialNumToRender={5}
                renderItem={renderItem}
                ItemSeparatorComponent={itemSeparator}
                keyExtractor={item => item.id}
                pagingEnabled={true}
                showsHorizontalScrollIndicator={false}
              />
            </View>
          </View>
        </View>
      </ScrollView>
      </LinearGradient>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  first_container: {
    flex: 1,
    padding: 10,
  },

  second_container: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  text_container: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
  },

  image_container: {
    borderColor: 'black',
    height: '100%',
    width: '100%',
    resizeMode:'contain',
  },

  modalContainer:{
    height: '100%',
    width: '100%',
    backgroundColor: 'black'
  },

  settingStyle: {
    textAlign: 'center',
    fontSize: 15,
    fontWeight: '700',
    color: 'white'
  },

  goPremium:{
    alignItems: 'center', 
    justifyContent: 'center', 
    width: '35%', 
    height: 40,
    borderRadius: 50, 
    backgroundColor: 'white'
  },

  midContainer: {
    marginTop: '8%',
    height: 90,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between'
  },

  headerContainer: {
    flexDirection: 'row',
    position:'absolute',
    right: 0,
    justifyContent: 'space-between',
    width: '33%',
    alignItems: 'center'
  },

  modalheaderContainer: {
    flexDirection: 'row', 
    alignItems:'center', 
    justifyContent: 'center', 
    backgroundColor: '#313131', 
    height: 58
  }

});

export default HomeScreen;