import React , {Component} from "react"
import {Text,View,StyleSheet,ImageBackground} from "react-native"
import {RFValue} from "react-native-responsive-fontsize"
export default class HomeScreen extends Component{
  render(){
    return(
      <View style = {styles.container}>
      <ImageBackground source = {require('../assets/Gif-1.gif')}
      style = {styles.bgImg}>
      <View style = {styles.titleBar}>
      
      <Text style = {styles.text}> QUIT TOBACCO APP </Text>
</View>
</ImageBackground>
      </View>
    )
  }
}
const styles = StyleSheet.create({

  container:{
    flex:1,
    alignItems:"center",
    justifyContent : "center",
    backgroundColor:"grey"
  },
  text:{
    color:"white",
    fontSize:30,
    fontWeight:"bold",
    
  },
  bgImg:{
    flex:1,
    resizeMode:"cover",
    width : RFValue(360),
  
  },
  titleBar:{
    flex:0.1,
    justifyContent:"center",
    alignItems:"center",
    backgroundColor:"blue"
  }
})