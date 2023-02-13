import { Image, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Result = () => {
  return (
    <View style={{padding:7,backgroundColor:"#bc8f8f",flex:1}}>
      <Text style={styles.container1}>Result</Text>
      <View style={styles.container}>
      <View style={styles.cab}>
        <Text >Subject</Text>
        
        <Text >Grade</Text>
      </View>
      <View style={styles.lineStyle} />
      <View style={styles.cab1}>
        <Text>Int:222 Enviromental studies</Text>
        <Text>A</Text>
      </View>
      <View style={styles.lineStyle1}/>
      <View style={styles.cab1}>
      <Text>Int 222 Enviromental studies</Text>
        <Text>A</Text>
      </View>
      <View style={styles.lineStyle1}/>
      <View style={styles.cab1}>
      <Text>Int 222 Enviromental studies</Text>
        <Text>A</Text>
      </View>
      <View style={styles.lineStyle1}/>
      <View style={styles.cab1}>
      <Text>Int 222 Enviromental studies</Text>
        <Text>A</Text>
      </View>
      <View style={styles.lineStyle1}/>
      <View style={styles.cab1}>
      <Text>Int 222 Enviromental studies</Text>
        <Text>A</Text>
      </View>
      <View style={styles.lineStyle1}/>
      <View style={styles.cab1}>
      <Text>Int 222 Enviromental studies</Text>
        <Text>A</Text>
      </View>
      <View style={styles.lineStyle1}/>
      </View>
    </View>
  )
}
export default Result
const styles = StyleSheet.create({
  cab:{
    flexDirection:"row",marginTop:20,justifyContent:"space-between",marginHorizontal:50
  },
  cab1:{
    flexDirection:"row",justifyContent:"space-around",marginTop:20,height:43,
  },
  lineStyle1: {
    borderWidth: 0.5,
    borderColor: '#EAEAEA',
  
},
  lineStyle: {
    borderWidth: 0.5,
    borderColor: '#EAEAEA',
    marginHorizontal:1.5
},
button:{
    backgroundColor:"green",
    marginVertical:10,
    borderRadius:20,
    textAlign:"center",
    borderWidth:1
},
image:{
    width:90,
    height:70,
    marginHorizontal:10,
    marginVertical:10,
},
text:{
    marginVertical:20,
    marginHorizontal:20,
},
container:{
    marginHorizontal:6,
    marginTop:10,
    height:470,
    borderRadius:40,
    elevation:4,
    backgroundColor:'white',
    shadowColor:'black',
    shadowOpacity:0.25,
    shadowOffset:{width:0,height:2},
    shadowRadius:8,
},
container1:{
  flexDirection:"row",
  marginHorizontal:6,
  height:50,
  borderRadius:54,
  elevation:4,
  backgroundColor:'white',
  shadowColor:'black',
  shadowOpacity:0.25,
  shadowOffset:{width:0,height:2},
  shadowRadius:8,
  textAlignVertical: "center",
  textAlign:"center"
}
})