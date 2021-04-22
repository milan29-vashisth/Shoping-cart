import React, { Component } from "react";
import { StyleSheet, Text, View ,Image,ScrollView} from "react-native";  
export default class Buttons extends Component {
render(){
    return(
    <View>
    <View style={{flex:1,paddingTop:10}}>
      <View style={{height:70,marginTop:10}}>
<ScrollView horizontal={true}>
  <View style={{height:50,width:70 ,marginLeft:25,borderColor:'#dddddd'}}>
<View style={{flex:2}}>
<Image style={{flex:1,width:null,height:null,resizeMode:'cover'}} source ={require('../assets/bag.jpg')}/>

</View>
<View style={{flex:1 ,paddingLeft:20,paddingTop:10}}>
<Text>Bag</Text>
</View>
  </View>
  <View style={{height:50,width:70 ,marginLeft:50,borderColor:'#dddddd'}}>
<View style={{flex:2}}>
<Image style={{flex:1,width:null,height:null,resizeMode:'cover'}} source ={require('../assets/trolly.png')}/>
</View>
<View style={{flex:1 ,paddingLeft:20,paddingTop:10}}>
<Text>Trolly</Text>
</View>
  </View>
  <View style={{height:50,width:70 ,marginLeft:50,borderColor:'#dddddd'}}>
<View style={{flex:2}}>
<Image style={{flex:1,width:null,height:null,resizeMode:'cover'}} source ={require('../assets/images.png')}/>
</View>
<View style={{flex:1 ,paddingLeft:20,paddingTop:10}}>
<Text>Cart</Text>
</View>
  </View>
</ScrollView>
      </View>
    </View>
    </View>
    )
   }
}