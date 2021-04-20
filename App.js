import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View,Image,Dimensions,ScrollView } from 'react-native';
const { width, height } = Dimensions.get('window')

export default function App() {
  return (
    <View style={styles.container}>
      <Image style={{width:420,height:220}} source ={require('./assets/image.jpg')}/>
    <Text style={styles.title}>Nike Original</Text>
      <Text style={styles.author}>$5.6   <Text style={{color:'gray',textDecorationLine:'line-through'
    }}>694</Text> <Text style={styles.freeshop}>Free Shop</Text></Text>
<ScrollView
  scrollEventThrottle={16}>
    <View style={{flex:1,paddingTop:10}}>
      
      <View style={{height:70,marginTop:10}}>
<ScrollView horizontal={true}>
  <View style={{height:50,width:70 ,marginLeft:20,borderColor:'#dddddd'}}>
<View style={{flex:2}}>
<Image style={{flex:1,width:null,height:null,resizeMode:'cover'}} source ={require('./assets/bag.jpg')}/>
</View>
<View style={{flex:1 ,paddingLeft:10,paddingTop:10}}>
<Text>Bag</Text>
</View>
  </View>
  <View style={{height:50,width:70 ,marginLeft:50,borderColor:'#dddddd'}}>
<View style={{flex:2}}>
<Image style={{flex:1,width:null,height:null,resizeMode:'cover'}} source ={require('./assets/trolly.png')}/>
</View>
<View style={{flex:1 ,paddingLeft:10,paddingTop:10}}>
<Text>Trolly</Text>
</View>
  </View>
  <View style={{height:50,width:70 ,marginLeft:50,borderColor:'#dddddd'}}>
<View style={{flex:2}}>
<Image style={{flex:1,width:null,height:null,resizeMode:'cover'}} source ={require('./assets/images.png')}/>
</View>
<View style={{flex:1 ,paddingLeft:10,paddingTop:10}}>
<Text>Cart</Text>
</View>

  </View>
</ScrollView>
      </View>
    </View>
</ScrollView>

      <Text style={styles.text}>Whoever said that money can’t buy happiness, simply didn’t know where to go- shopping online.Shopping things I’m an artistAll you need is love and a credit card....
      <Text style={{color:'green'}}> View more</Text></Text>
    
      <Text style={styles.cart}> Add to Cart</Text>
<ScrollView
  scrollEventThrottle={16}>
    <View style={{flex:1,paddingTop:15}}>
      <Text style={{fontSize:18,fontWeight:'bold',paddingHorizontal:10}}>Similar Products</Text>
      <View style={{height:150,marginTop:20}}>
<ScrollView horizontal={true}>
  <View style={{height:170,width:170 ,marginLeft:20,borderWidth:0.5,borderColor:'#dddddd'}}>
<View style={{flex:2}}>
<Image style={{flex:1,width:null,height:null,resizeMode:'cover'}} source ={require('./assets/differ.jpg')}/>
</View>
<View style={{flex:1 ,paddingLeft:10,paddingTop:10}}>
<Text>Sneakers</Text>
</View>
  </View>
  <View style={{height:170,width:150 ,marginLeft:50,borderWidth:0.5,borderColor:'#dddddd'}}>
<View style={{flex:2}}>
<Image style={{flex:1,width:null,height:null,resizeMode:'cover'}} source ={require('./assets/work.jpg')}/>
</View>
<View style={{flex:1 ,paddingLeft:10,paddingTop:10}}>
<Text>Nike Workout</Text>
</View>
  </View>
</ScrollView>
      </View>
    </View>
</ScrollView>
        <Text style={styles.carts}>$11.2                             Check-Out  - 12</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  title: {
    paddingLeft:10,
    paddingTop:10,
    color: 'black',
    fontSize: 22,
    fontWeight: 'bold'
},
author:{
  paddingTop:10,
paddingLeft:10,
fontSize:20,
color:'green'
},
text:{
  color: 'gray',
  fontSize: 15,
  paddingBottom:15
},
cart: {
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
},
similar: {
  paddingLeft:10,
  paddingTop:10,
  color: 'black',
  fontSize: 18,
  fontWeight: 'bold'
},
freeshop:{
  color:'white',
    backgroundColor:'skyblue',
    paddingLeft:50,
   height: 30,
   borderRadius:7, 
   textAlign:'center',
   borderWidth: 1,
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
});
