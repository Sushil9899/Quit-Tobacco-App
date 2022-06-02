import React,{Component} from "react"
import {Text,View,StyleSheet,ImageBackground,TouchableOpacity,} from "react-native"

import {RFValue} from "react-native-responsive-fontsize"

export default class DisadvantagesScreen extends Component{
  render(){
    return(
      <View style = {styles.container}>
<ImageBackground source = {require("../assets/Img-3.jpg")}
style = {styles.bgImg}>

<View style = {styles.titleBar}>

      <Text style = {styles.text}> Disadvantages </Text>
    

   </View>
   <View style = {styles.box}>
    <Text style = {styles.point}>1. It causes cancer.</Text>
      <Text></Text>
       
      <Text style = {styles.point}>2. It causes breathing issues. </Text>
      <Text></Text>
      <Text style = {styles.point}>3. It increases the risk of heart attack.</Text>
      <Text></Text>
      <Text style = {styles.point}>4. It causes stroke.</Text>
      <Text></Text>
      <Text style = {styles.point}>5. It damage mouth.</Text>
      <Text></Text>
       <Text style = {styles.point}>6. It can lead to death.</Text>
      <Text></Text>
      </View>
 </ImageBackground>
   

    
   
   
  
      </View>
   

    )
  }
}
const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:"blue",
    alignItems:"center",
    justifyContent:"center"

  },
  text:{
    color:"white",
    fontSize:30,
    fontWeight:"bold"
  },
  bgImg:{
    flex:1,
    resizeMode:"cover",
    width :RFValue(350),
  },
  titleBar:{
    flex: 0.1,
  justifyContent:"center",
    alignItems:"center",
    backgroundColor:"red"
  },
   point:{
   color: "white",
   fontSize:20,
   fontWeight:"bold",
   marginTop:50
  },
   box:{
    flex:0.7
  }
  
})