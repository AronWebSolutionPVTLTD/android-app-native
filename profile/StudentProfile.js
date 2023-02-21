import { StyleSheet, Text, View,ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import Ionicons from '@expo/vector-icons/Ionicons';
import { baseUrl } from '../api/apiConstants';


const StudentProfile = () => {
  const [data, setData] = useState([])
  
  useEffect(() => {
    fetch(baseUrl+'getacademic_details', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzZTlmZWIzZmQ0NDIwNDljYWRiMWJiNSIsInVzZXJuYW1lIjoibmFraXRhIiwiaWF0IjoxNjc2Mjc5NDkwLCJleHAiOjE2NzY4ODQyOTB9.QSTxYB1Sy_j1bxMMNSyR6Ll6XtJArT-UXvyXNr3oRJM'
      },
      body: JSON.stringify({
        "academicId":"63e9ffeff1f6ff23f1e758c1"
      })
    })
      // .then(res => res.json())
      // .then(res => setData(res.data))
      // .then(console.log(data))
      // .then(console.log(data))
      // .then(console.log(data.Class))
      // .then(console.log(data.userId?.Adhar_number))
      // aarav
      .then(res => res.json()).then((res)=>{
        setData(res.data)
        console.log("res",res)
    }).catch((err)=>console.log("err",err))
  }, [])
  return (
    <ScrollView>
    <View>
      <Ionicons 
        name="ios-person-circle-outline" 
        size={80} 
        color="black"
        style={styles.icon}
        />
      <Text style={styles.text}>{data.userId?.username}</Text>
      <Text style={styles.text}>{data.course}</Text>
      <Text style={styles.text}>{data.admission_number}</Text>
      <Text style={styles.grid}>Basic</Text>
      <Text style={{fontWeight: 'bold'}}>Username:</Text>
      <Text>{data.userId?.username}</Text>
      <Text style={{fontWeight: 'bold'}}>Father Name:</Text>
      <Text>{data.userId?.father_name}</Text>
      <Text style={{fontWeight: 'bold'}}>Mother Name:</Text>
      <Text>{data.userId?.mother_name}</Text>
      <Text style={{fontWeight: 'bold'}}>Gender:</Text>
      <Text>{data.userId?.gender}</Text>
      <Text style={{fontWeight: 'bold'}}>Blood Group:</Text>
      <Text>{data.userId?.blood_group}</Text>
      <Text style={{fontWeight: 'bold'}}>Date Of Birth:</Text>
      <Text>{data.userId?.date_of_birth}</Text>
      <Text style={{fontWeight: 'bold'}}>Contact Number:</Text>
      <Text>{data.userId?.contact_number}</Text>
      <Text style={{fontWeight: 'bold'}}>Adhaar Number:</Text>
      <Text>{data.userId?.Adhar_number}</Text>
      <Text style={{fontWeight: 'bold'}}>Address:</Text>
      <Text></Text>
      <Text></Text>
      <Text style={styles.grid}>Acadmic Details</Text>
      <Text style={{fontWeight: 'bold'}}>Roll Number:</Text>
      <Text>{data.roll_number}</Text>
      <Text style={{fontWeight: 'bold'}}>Course:</Text>
      <Text>{data.course}</Text>
      <Text style={{fontWeight: 'bold'}}>Class:</Text>
      <Text>{data.Class}</Text>
      <Text style={{fontWeight: 'bold'}}>Admission Number:</Text>
      <Text>{data.admission_number}</Text>
      <Text style={{fontWeight: 'bold'}}>Section:</Text>
      <Text>{data.section}</Text>
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