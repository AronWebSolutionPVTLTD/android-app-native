import { StyleSheet, Text, View, Button, TextInput, Pressable, Image } from 'react-native'
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { baseUrl } from '../api/apiConstants';


const ResetPassword = () => {
    const navigation = useNavigation();
    const[newPassword, setNewPassword]= useState('')
    const[confirmPassword, setConfirmPassword]= useState('')
    const[data, setData] = useState([])
    
    const reset = () => {
        fetch(baseUrl+'reset_password', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type':'application/json',
                'token':'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzZTlmZWIzZmQ0NDIwNDljYWRiMWJiNSIsInVzZXJuYW1lIjoibmFraXRhIiwiaWF0IjoxNjc2Mjc5NDkwLCJleHAiOjE2NzY4ODQyOTB9.QSTxYB1Sy_j1bxMMNSyR6Ll6XtJArT-UXvyXNr3oRJM'
         },
         body: JSON.stringify({
            newPassword,
            confirmPassword
            // expiresInMins: 60, // optional
          })
        })
    //     .then(res => res.json())
    //     .then(res => setData(res))
    //     .then(console.log(data))
    //     .then(console.log(data.statusCode))
    //     .then((res) => {
    //     if (data.statusCode == 200) {
    //         navigation.navigate('Home')
    //     }
    // })
    .then(res => res.json()).then((res)=>{
        setData(res)
        console.log("res",res)
    navigation.navigate("Home")}).catch((err)=>console.log("err",err))
    }

    return (
        <View>
            <Text style={{marginTop:80,fontWeight:"bold",fontSize:30,textAlign:"center"}}>Reset Password</Text>
            <Text style={{marginTop:10,textAlign:"center"}}>Enter new and Conform Password</Text>
            <View>
                <Text style={{ marginHorizontal: 20, marginTop: 50 }}>Password</Text>
                <TextInput value={newPassword} onChangeText={(newPassword) => setNewPassword(newPassword)} style={{ marginHorizontal: 20 }} placeholder='Type your Password' placeholderTextColor="black" />
                <View style={styles.lineStyle} />
                <Text style={{marginHorizontal:20,marginTop:20}}>Re-Type Password</Text>
                <TextInput value={confirmPassword} onChangeText={(confirmPassword) => setConfirmPassword(confirmPassword)} style={{ marginHorizontal: 20,marginTop:10 }} placeholder=' Confirm Password' placeholderTextColor="black" />
                <View style={styles.lineStyle} />
                <Pressable onPress={reset}>
                    <Text style={styles.text}>Change Password</Text>
                </Pressable>
            </View>
        </View>
    )
}
export default ResetPassword
const styles = StyleSheet.create({
    lineStyle: {
        borderWidth: 0.5,
        borderColor: 'black',
        marginHorizontal: 20,
    },
    text: {
        backgroundColor: "black",
        height: 50,
        marginHorizontal: 30,
        marginTop: 20,
        textAlign: "center",
        textAlignVertical: "center",
        borderRadius: 50,
        color: 'white',
    }
})