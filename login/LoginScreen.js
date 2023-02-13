import { StyleSheet, Text, View, Button, TextInput, Pressable, Image } from 'react-native'
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
const LoginScreen = () => {
    const navigation = useNavigation();
        const [username, setUsername] = useState('')
        const [password, setPassword] = useState('')
       
        // soni1sanga
        // 987564
        // function user(enteredText){
        //     setUsername(enteredText);
        // }

        // function pass(enteredText){
        //     setPassword(enteredText);
        // }
 const [data, setData] = useState([])
    const login = () => {
       
        fetch('http://192.168.1.47:4002/v1/user/login', {
            method: 'POST',
            headers: { 
                'Accept': 'application/json',
                'Content-Type':'application/json'
         },
         body: JSON.stringify({
            username,
            password
            // expiresInMins: 60, // optional
          })
        })
        .then(res => res.json())
        .then(res => setData(res))
        .then(console.log(data))
        .then(console.log(data.statusCode))
        .then((res) => {
        if (data.statusCode == 200) {
            navigation.navigate('Profile')
        }
    })
    }
    return (
        <View>
            <Text style={{marginVertical:80,fontWeight:"bold",fontSize:30,textAlign:"center"}}>Login</Text>
            <View>
                <Text style={{ marginHorizontal: 20, marginVertical: 10 }}>Username</Text>
                <TextInput value={username} onChangeText={(username) => setUsername(username)} style={{ marginHorizontal: 20 }} placeholder='Type your Username' placeholderTextColor="black" />
                <View style={styles.lineStyle} />
                <Text style={{marginHorizontal:20,marginTop:20}}>Password</Text>
                <TextInput value={password} onChangeText={(password) => setPassword(password)} style={{ marginHorizontal: 20,marginTop:10 }} placeholder='Type your Password' placeholderTextColor="black" />
                <View style={styles.lineStyle} />
                <Pressable onPress={() => navigation.navigate('Forgot')}>
               <Text style={{textAlign:"right",marginRight:20}}>Forgot Password?</Text>
               </Pressable>
                <Pressable onPress={login}>
                {/* () => navigation.navigate('Profile') */}
                    <Text style={styles.text}>Login</Text>
                </Pressable>
                <Text style={{textAlign:"center",marginTop:10}}>or Sign Up using</Text>
                <View style={{flexDirection:"row",marginHorizontal:150,marginVertical:10,justifyContent:'space-evenly'}}>
                <MaterialCommunityIcons name="facebook"  size={40}  color="blue" style={{marginRight:20}}/>
                <Image style={{marginTop:7}} source={require('../assets/google.png')}/>
                <MaterialCommunityIcons name="apple"  size={40} style={{marginLeft:20}}/>
                </View>
            </View>
            <Pressable onPress={() => navigation.navigate('SignUp')}>
            <Text style={{marginTop:100,textAlign:"center"}}>Don't have an account? SignUp</Text>
            </Pressable>
        </View>
    )
}
export default LoginScreen
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
    },
    
})