import React,{Component} from "react"
import {Text,View,StyleSheet,ImageBackground} from "react-native"
import {RFValue} from "react-native-responsive-fontsize"
export default class QuitTobaccoScreen extends Component{
  render(){
    return(
      <View style = {styles.container}>
<ImageBackground source = {require("../assets/Img-2.jpg")}
style = {styles.bgImg}>
<View style = {styles.titleBar}>
      <Text style = {styles.text}> How To Quit Tobacco?</Text>
      </View>
      <View style = {styles.box}>
        <Text style = {styles.point}>1.Have a plan. Once you've made it your mind to quit smoking and set the  date, develop a plan.</Text>
      <Text></Text>
       
      <Text style = {styles.point}>2. Don't do it alone. It will be easier to quit smoking if you have support from family and friends  . </Text>
      <Text></Text>
      <Text style = {styles.point}>3. Stay busy.</Text>
      <Text></Text>
      <Text style = {styles.point}>4.Avoid smoking triggers.</Text>
      <Text></Text>
      <Text style = {styles.point}>5. Reward your accomplishments.</Text>
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
    backgroundColor:"green",
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
    width : RFValue(350)
  },
  titleBar:{
    flex:0.1,
    justifyContent:"center",
    alignItems:"center",
    backgroundColor:"green"
  },
   point:{
   color: "black",
   fontSize:20,
   fontWeight:"bold",
   marginTop:50
  },
  box:{
    flex:0.7
  }
})