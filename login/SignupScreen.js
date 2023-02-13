import { StyleSheet, Text, View, Button, TextInput, Pressable, Image } from 'react-native'
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
const SignupScreen = () => {
    const navigation = useNavigation();
    const [data, setData] = useState([])
    //value={username} onChangeText={(username) => setUsername(username)}
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [mobile_number, setMobile_number] = useState('')
    const [password, setPassword] = useState('')
    const [retype_password, setRetype_password] = useState('')

    const signup = () => {
        // let bodyFormData = new FormData();
        // bodyFormData.append(username);
        // bodyFormData.append(email); 
        // bodyFormData.append(mobile_number);
        // bodyFormData.append(password); 
        // bodyFormData.append(retype_password); 
        fetch('http://192.168.1.47:4002/v1/user/register', {
            method: 'POST',
            headers: { 
                'Accept': 'application/json',
                'Content-Type':'application/json'
         },
         body: JSON.stringify({
            username,
            email,
            mobile_number,
            password,
            retype_password
            // expiresInMins: 60, // optional
          })
        })
        .then(res => res.json())
        .then(res => setData(res))
        .then(console.log(data))
        .then((res) => {
        if (data.statusCode == 200) {
            navigation.navigate('Home')
        }
    })
    }
    return (
        <View>
            <Text style={{ marginVertical: 40, fontWeight: "bold", fontSize: 30, textAlign: "center" }}>Create Your Account</Text>
            <Text style={{ marginHorizontal: 20, marginVertical: 10 }}>Username</Text>
            <TextInput value={username} onChangeText={(username) => setUsername(username)} style={{ marginHorizontal: 20 }} placeholder='Type your Username' placeholderTextColor="black" />
            <View style={styles.lineStyle} />
            <Text style={{ marginHorizontal: 20, marginVertical: 10 }}>Email</Text>
            <TextInput value={email} onChangeText={(email) => setEmail(email)} style={{ marginHorizontal: 20 }} placeholder='Type your Email' placeholderTextColor="black" />
            <View style={styles.lineStyle} />
            <Text style={{ marginHorizontal: 20, marginVertical: 10 }}>Mobile Number</Text>
            <TextInput value={mobile_number} onChangeText={(mobile_number) => setMobile_number(mobile_number)} style={{ marginHorizontal: 20 }} placeholder='Enter Mobile Number' placeholderTextColor="black" />
            <View style={styles.lineStyle} />
            <Text style={{ marginHorizontal: 20, marginVertical: 10 }}>Password</Text>
            <TextInput value={password} onChangeText={(password) => setPassword(password)} style={{ marginHorizontal: 20 }} placeholder='Type your Password' placeholderTextColor="black" />
            <View style={styles.lineStyle} />
            <Text style={{ marginHorizontal: 20, marginTop: 20 }}>Re-type Password</Text>
            <TextInput value={retype_password} onChangeText={(retype_password) => setRetype_password(retype_password)} style={{ marginHorizontal: 20, marginTop: 10 }} placeholder='Confirm Password' placeholderTextColor="black" />
            <View style={styles.lineStyle} />
            <Pressable onPress={() => navigation.navigate('Forgot')}>
                <Text style={{ textAlign: "right", marginRight: 20 }}>Forgot Password?</Text>
            </Pressable>
            <Pressable onPress={signup}>
                {/* onPress={() => navigation.navigate('Profile') */}
                <Text style={styles.text}>Sign Up</Text>
            </Pressable>
            <Text style={{ textAlign: "center", marginTop: 10 }}>or Sign Up using</Text>
            <View style={{ flexDirection: "row", marginHorizontal: 150, marginVertical: 10, justifyContent: 'space-evenly' }}>
                <MaterialCommunityIcons name="facebook" size={40} color="blue" style={{ marginRight: 20 }} />
                <Image style={{ marginTop: 7 }} source={require('../assets/google.png')} />
                <MaterialCommunityIcons name="apple" size={40} style={{ marginLeft: 20 }} />
            </View>
            <Pressable onPress={() => navigation.navigate('Home')}>
                <Text style={{ marginTop: 0, textAlign: "center" }}>Do you have an account? Login</Text>
            </Pressable>
        </View>
    )
}
export default SignupScreen
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
        fontSize: 20
    }
})