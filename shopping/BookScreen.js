import React, { useEffect, useState } from 'react'
import {SafeAreaView,View,FlatList,StyleSheet,Text,StatusBar,Image,Pressable, Button} from 'react-native';

const Item = ({ item }) => (

  <View style={styles.item}>
    <Image style={styles.image} source={require('../assets/book.png')} />
    <View style={styles.lineStyle}/>
    <View style={{flexDirection:"column",marginLeft:15}}>
    <Text>{item.title}</Text>
    <Text style={{ color: "#fcb103" }}>&#9733;&#9733;&#9733;&#9733;</Text>
    <View style={{flexDirection:"row",}}>
      <Text>${item.price}</Text>
      <View style={{marginLeft:50,backgroundColor:"red",width:70,height:25,}}>
      <Text style={{alignSelf:"center",color:'white',marginTop:1}}>Buy Now</Text>
      </View>
      
    </View>
    </View>

  </View>


);
const BookScreen = () => {
  const [data, setData] = useState([])
  useEffect(() => {
    fetch('http://192.168.1.47:4002/v1/user/getbooks', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzZTM5MWZmNjcxMmFmMDdiMWM1MDk2MyIsInVzZXJuYW1lIjoibmFraXRhIiwiaWF0IjoxNjc1ODYwMjM5LCJleHAiOjE2NzY0NjUwMzl9.ZY7Jtkw0sgvUcftoCAskQWgVgvH_QuH8mTAjo7G9DXY'
      },
      body: JSON.stringify({
        "shortBy": "1",
        "page": "1",
        "size": "2",
        "order": "1"
      })
    })
      .then(res => res.json())
      .then(res => setData(res))
      .then(console.log(data))
      .then(console.log(data.statusCode))
  }, [])
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={data.data}
        renderItem={Item}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:"#bc8f8f",
   
  },
  item: {
    flexDirection:"row",
    backgroundColor: 'white',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius:20,
    elevation: 4,
    backgroundColor: '#FFFFFF',
    shadowColor: 'black',
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
  },
  title: {
    fontSize: 32,
  },
  lineStyle: {
    width: 2,
    backgroundColor: '#909090',
    height:"100%",
    marginLeft:15
    
  },
});
export default BookScreen;