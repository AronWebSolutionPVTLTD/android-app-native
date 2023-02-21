import { StyleSheet, Text, View, TextInput, Pressable, Image } from 'react-native'
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { baseUrl } from '../api/apiConstants';
//import AsyncStorage from '@react-native-async-storage/async-storage';
//import SyncStorage from 'sync-storage';
import AsyncStorage from '@react-native-async-storage/async-storage';
const LoginScreen = () => {
    const storeData = async () => {
        try {
          await AsyncStorage.setItem('tokenn', data.data.token)
        } catch (e) {
          // saving error
        }
      }
const getData = async () => {
    try {
      const value = await AsyncStorage.getItem('tokenn')
      console.log(value)
      if(value !== null) {
        // value previously stored
      }
    } catch(e) {
      // error reading value
    }
  }
    const navigation = useNavigation();
        const [username, setUsername] = useState('')
        const [error, setError] = useState('')
        const [password, setPassword] = useState('')
        const [error2, setError2] = useState('')
        // soni1sanga
        // 987564
        function nameValidator(){
            if(username ==""){
                setError("email field can not be empty")
            }
            else{
                setError("")
            }
           }
           function Validator(){
            if(password ==""){
                setError2("password field can not be empty")
            }
            else{
                setError2("")
            }
           }
 const [data, setData] = useState([])
    const login = () => {
      //console.log("gg")
        fetch(baseUrl+'login', {
            method: 'POST',
            headers: { 
                'Content-Type':'application/json'
         },
         body: JSON.stringify({
            username,
            password
          })
        })
        .then(res => res.json()).then((res)=>{
            setData(res)
            console.log("res",res)
        navigation.navigate("Profile")

        // localStorage.setItem('token',data.data.token);
        // let a = localStorage.getItem('token');
        //     console.log(a)
        //SyncStorage.set('token', data.data.token);
        
    }).catch((err)=>console.log("err",err))
//         .then(res => res.json())
//         .then(res => setData(res))
//         .then(console.log(data))
//         .then(console.log(data.statusCode))
//         .then((res) => {
//         if (data.statusCode == 200) {
//             navigation.navigate('Profile')
//         }
//    })
//    .catch((err)=>console.log(err))
    }
    return (
        <View>
            <Text style={{marginVertical:80,fontWeight:"bold",fontSize:30,textAlign:"center"}}>Login</Text>
            <View>
                <Text style={{ marginHorizontal: 20, marginVertical: 10 }}>Username</Text>
                <TextInput  onBlur={()=>nameValidator()} value={username} onChangeText={(username) => setUsername(username)} style={{ marginHorizontal: 20 }} placeholder='Type your Username' placeholderTextColor="black" />
                <View style={styles.lineStyle} />
                <Text style={{color:"red",textAlign:"center"}}>{error}</Text>
                <Text style={{marginHorizontal:20,marginTop:20}}>Password</Text>
                <TextInput onBlur={()=>Validator()} value={password} onChangeText={(password) => setPassword(password)} style={{ marginHorizontal: 20,marginTop:10 }} placeholder='Type your Password' placeholderTextColor="black" />
                <View style={styles.lineStyle} />
                <Text style={{color:"red",textAlign:"center"}}>{error2}</Text>
                <Pressable onPress={() => navigation.navigate('Forgot')}>
               <Text style={{textAlign:"right",marginRight:20}}>Forgot Password?</Text>
               </Pressable>
                <Pressable onPress={()=>{login(),storeData(),getData()}}>
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