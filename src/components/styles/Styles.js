import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    inputContainer:{
        borderWidth: 0.5,
        width: '90%',
        height: 50,
        borderRadius: 30,
        textAlign: 'center',
        borderColor: 'grey',
        marginTop: '5%'
  },
    container:{
        alignItems: 'center',
        marginTop: '15%'
        // justifyContent: 'center',
        // backgroundColor: 'black'
    },
    
    mainContainer:{
    //   backgroundColor: 'black',
    },
  
    headerContainer:{
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: '15%'
    },
  
    midContainer:{
      marginTop: '18%',
      alignItems: 'center',
    },
  
    textStyles: {
      fontSize: 40,
      fontWeight: 'bold',
      textAlign: 'center'
    },
  
    imageStyles:{
      height: 60,
      width: 60
    },
  
    logInStyle: {
      height: 55,
      width: '90%',
      borderWidth: 0.5,
      borderRadius: 42,
      textAlign: 'center',
      borderColor: 'grey',
      alignItems:'center',
      justifyContent:'center',
      marginTop:20
    },
  
    signUpStyle:{
      fontSize: 20,
      height: 55,
      width: '90%',
      backgroundColor: 'green',
      textAlign: 'center',
      borderRadius: 42,
      fontWeight: 'bold',
      alignItems:'center',
      justifyContent:'center'
    } 
  });

export default styles;