import { StyleSheet, Text, View, Button, TextInput, Pressable, Image } from 'react-native'
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
const ForgotScreen = () => {
    const navigation = useNavigation();
    const [data, setData] = useState([])
    const [email, setEmail] = useState('')
    
    const send = () => {
        fetch('http://192.168.100.167:4002/v1/user/forgotPassword', {
            method: 'POST',
            headers: { 
                'Accept': 'application/json',
                'Content-Type':'application/json'
         },
         body: JSON.stringify({
            email
            // expiresInMins: 60, // optional
          })
        })
    //     .then(res => res.json())
    //     .then(res => setData(res))
    //     .then(console.log(data))
    //     .then(console.log(data.statusCode))
    //     .then((res) => {
    //     if (data.statusCode == 200) {
    //         navigation.navigate('Check')
    //     }
    // })
    .then(res => res.json()).then((res)=>{
        setData(res)
        console.log("res",res)
    navigation.navigate("Check")}).catch((err)=>console.log("err",err))
    }

    return (
        <View>
            <Text style={{marginTop:70,fontWeight:"bold",fontSize:30,textAlign:"center"}}>Forgot Password</Text>
            <Text style={{textAlign:"center",marginVertical:30}}>Enter the email associated with your account {"\n"} and we will send and email with an otp to reset{"\n"} your Password</Text>
            <View>
                <Text style={{ marginHorizontal: 20, marginVertical: 10 }}>Email</Text>
                <TextInput value={email} onChangeText={(email) => setEmail(email)} style={{ marginHorizontal: 20 }} placeholder='Enter your Email' placeholderTextColor="black" />
                <View style={styles.lineStyle} />

                <Pressable onPress={send}>
                    <Text style={styles.text}>Send OTP</Text>
                </Pressable>
            </View>
            
        </View>
    )
}
export default ForgotScreen
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