import React, { Component } from "react";
import { StyleSheet, Text, View ,ScrollView, Linking } from "react-native";
import { SliderBox } from "react-native-image-slider-box";
 import { AntDesign } from '@expo/vector-icons';
 import { Entypo } from '@expo/vector-icons'; 
 import Explore from './screen/Explore';
 import Buttons from './screen/Buttons'
export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      images: [
        require('./assets/image.jpg'),
        require('./assets/images.jpg'),
        require('./assets/shoes.jpg'),
        require('./assets/differ.jpg'), 
      ]
    };
    this.actualText = "Whoever said that money can’t buy happiness, simply didn’t know where to go- shopping online.Shopping things I’m an artistAll you need is love and a credit card. Whoever said that money can’t buy happiness, simply didn’t know where to go- shopping online.Shopping things I’m an artistAll you need is love and a credit card.";
    this.state.val = true; 
   
  }
  sayHello(){
    this.setState({val: !this.state.val});
    console.log(this.state.val);
  }
  

  render() {
    return (
      <View style={styles.container}>
        <SliderBox
          images={this.state.images}
          onCurrentImagePressed={index =>
            console.warn(`image ${index} pressed`)
          }
        />
          <Text style={styles.title}>Nike Original</Text>
          <View style={{flexDirection:"row"}}>
      <View style={{paddingLeft:10}}>
      <Text style={styles.author}>$5.6  <Text style={{color:'gray',textDecorationLine:'line-through'
    }}>694</Text></Text>
      </View>
      <View style={{paddingLeft:200,paddingBottom:10}}>
    <Text style={styles.freeshop}>Free Shop</Text>
    </View>
    </View>
    <View style={{paddingBottom:80}}>
      <Buttons/>
    </View>

    {this.state.val ?
      <Text style={styles.text}>{this.actualText.substring(0,101)+ "..."}
      <Text style={{color:'green'}}  onPress={() => this.sayHello()}>View more</Text></Text>
    : 
      <Text style={styles.text}>{this.actualText}
      <Text style={{color:'green'}}  onPress={() => this.sayHello()}> View less</Text></Text>
    
      }

        <View style={{flexDirection:"row"}}>
      <View style={{paddingLeft:20, paddingTop:4}}>
        <AntDesign name="heart" size={35} color="red" />
      </View>
    <Text style={styles.cart}>Add to Cart</Text>
    </View>
    <ScrollView horizontal={true}>
      <Explore/>
    </ScrollView>
      </View>
    );
 } 
}
 
const styles = StyleSheet.create({
  container: {
    flex: 1
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
color:'skyblue'
},
text:{
  color: 'gray',
  fontSize: 15,
  paddingBottom:15
},
freeshop:{
  color:'white',
    backgroundColor:'lightblue',
    width:100,
    fontSize:18,
   height: 30,
   borderRadius:5, 
   textAlign:'center',
},
cart: {
  flexDirection:'row',
  padding:10,
  height:50,
  width:300,
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
  fontSize: 20,
  fontWeight: 'bold'
},
});