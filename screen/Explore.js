import React, { Component } from "react";
import { StyleSheet, Text, View ,Image,ScrollView} from "react-native";
import { AntDesign } from '@expo/vector-icons';
export default class Explore extends Component {
render(){
    return(
        <View>
            <View style={{flex:1,paddingTop:15}}>
      <Text style={styles.cart}>Similar Products</Text>
      <View style={{height:140,marginTop:20}}>
<ScrollView horizontal={true}>
  <View style={{height:170,width:170 ,marginLeft:20,borderWidth:1,borderRadius:7,borderColor:'#dddddd'}}>
<View style={{flex:2}}>
<Image style={{flex:1,width:null,height:null,resizeMode:'cover'}} source ={require('../assets/differ.jpg')}/>
</View>
<View style={{flex:1 ,paddingLeft:10,paddingTop:10}}>
<Text>Sneakers</Text>
</View>
  </View>
  <View style={{height:170,width:170 ,marginLeft:30,borderWidth:1,borderRadius:7,borderColor:'#dddddd'}}>
<View style={{flex:2}}>
<Image style={{flex:1,width:null,height:null,resizeMode:'cover'}} source ={require('../assets/work.jpg')}/>
</View>
<View style={{flex:1 ,paddingLeft:10,paddingTop:10}}>
<Text>Nike Workout</Text>
</View>
  </View>
</ScrollView>
      </View>
    </View>
    
    <Text style={styles.carts}>$11.2                          Check-Out   <AntDesign name="arrowright" size={24} color="white" /></Text>
        </View>
       
    )
   }
}
const styles = StyleSheet.create({
cart: {
   padding:5,
    shadowColor:'black',
    shadowOpacity:0.2,
    elevation:1,
    fontSize: 18,
    fontWeight: 'bold'
  },
  carts:{
    flexDirection:'row',
    padding:10,
    color:'white',
    backgroundColor:'skyblue',
    marginHorizontal:20,
    shadowOffset:{width:0,height:0},
    shadowColor:'black',
    shadowOpacity:0.2,
    elevation:1,
   borderRadius:7, 
   textAlign:'center',
   justifyContent:'center',
    fontSize: 18,
    fontWeight: 'bold'
  }
})
