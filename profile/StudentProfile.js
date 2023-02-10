import { StyleSheet, Text, View,ScrollView } from 'react-native'
import React from 'react'
import Ionicons from '@expo/vector-icons/Ionicons';

const StudentProfile = () => {
  return (
    <ScrollView>
    <View>
      <Ionicons 
        name="ios-person-circle-outline" 
        size={80} 
        color="black"
        style={styles.icon}
        />
      <Text style={styles.text}>Ayush Soni</Text>
      <Text style={styles.text}>11802288</Text>
      <Text style={styles.text}>P132:B.Tech.(Computer Science & Engineering(2018)</Text>
      <Text style={styles.grid}>Basic</Text>
      <Text style={{fontWeight: 'bold'}}>Username:</Text>
      <Text>Ayush Soni</Text>
      <Text style={{fontWeight: 'bold'}}>Father Name:</Text>
      <Text>Nirankar Soni</Text>
      <Text style={{fontWeight: 'bold'}}>Mother Name:</Text>
      <Text>Sarla Soni</Text>
      <Text style={{fontWeight: 'bold'}}>Gender:</Text>
      <Text>Male</Text>
      <Text style={{fontWeight: 'bold'}}>Blood Group:</Text>
      <Text>B+</Text>
      <Text style={{fontWeight: 'bold'}}>Date Of Birth:</Text>
      <Text>12/07/2000</Text>
      <Text style={{fontWeight: 'bold'}}>Contact Number:</Text>
      <Text>7814958568</Text>
      <Text style={{fontWeight: 'bold'}}>Adhaar Number:</Text>
      <Text>1234567890</Text>
      <Text style={{fontWeight: 'bold'}}>Address:</Text>
      <Text>544g/896 Balaganj Lucknow</Text>
      <Text></Text>
      <Text style={styles.grid}>Acadmic Details</Text>
      <Text style={{fontWeight: 'bold'}}>Roll Number:</Text>
      <Text>11</Text>
      <Text style={{fontWeight: 'bold'}}>Course:</Text>
      <Text>CSE</Text>
      <Text style={{fontWeight: 'bold'}}>Class:</Text>
      <Text>B-Tech</Text>
      <Text style={{fontWeight: 'bold'}}>Admission Number:</Text>
      <Text>11803288</Text>
      <Text style={{fontWeight: 'bold'}}>Section:</Text>
      <Text>k182022</Text>
    </View>
    </ScrollView>
  )
}

export default StudentProfile

const styles = StyleSheet.create({
    icon:{
        textAlign:"center"
    },
    text:{
        textAlign:"center",
        color:"black"
    },
    grid:{
        marginTop:10,
        width:"100%",
        height:40,
        borderRadius:4,
        elevation:4,
        backgroundColor:'#77773c',
        shadowColor:'black',
        shadowOpacity:0.25,
        shadowOffset:{width:0,height:2},
        shadowRadius:8,
        //end grid
        textAlign:"center",
        textAlignVertical: "center",
        fontWeight: 'bold',
        fontSize:18
        }
})