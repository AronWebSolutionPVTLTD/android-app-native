import { StyleSheet, Text, View, Button, TextInput, Pressable, Image,ScrollView, } from 'react-native'
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
const SignupScreen = () => {
    const navigation = useNavigation();
    const [data, setData] = useState([])
    //value={username} onChangeText={(username) => setUsername(username)}
    const [username, setUsername] = useState('')
    const [role, setRole] = useState('')
    const [email, setEmail] = useState('')
    const [father_name, setFather_name] = useState('')
    const [mother_name, setMother_name] = useState('')
    const [blood_group, setBlood_group] = useState('')
    const [address, setAddress] = useState('')
    const [gender, setGender] = useState('')
    const [Adhar_number, setAdhar_number] = useState('')
    const [contact_number, setContact_number] = useState('')
    const [password, setPassword] = useState('')
   
    const [error1, setError1] = useState('')
    const [error2, setError2] = useState('')
    const [error3, setError3] = useState('')
    const [error4, setError4] = useState('')
    const [error5, setError5] = useState('')
    const [error6, setError6] = useState('')
    const [error7, setError7] = useState('')
    const [error8, setError8] = useState('')
    const [error9, setError9] = useState('')
    const [error10, setError10] = useState('')
    const [error11, setError11] = useState('')
    function nameValidator1(){
        if(username ==""){
            setError1("Username field can not be empty")
        }
        else{
            setError1("")
        }
       }
       function nameValidator2(){
        if(role ==""){
            setError2("Role field can not be empty")
        }
        else{
            setError2("")
        }
       }
       function nameValidator3(){
        if(email ==""){
            setError3("Email field can not be empty")
        }
        else{
            setError3("")
        }
       }
       function nameValidator4(){
        if( father_name==""){
            setError4("Father Name field can not be empty")
        }
        else{
            setError4("")
        }
       }
       function nameValidator5(){
        if( father_name==""){
            setError5("Mother Name field can not be empty")
        }
        else{
            setError5("")
        }
       }
       function nameValidator6(){
        if( blood_group==""){
            setError6("Blood Group field can not be empty")
        }
        else{
            setError6("")
        }
       }
       function nameValidator7(){
        if( address==""){
            setError7("Address field can not be empty")
        }
        else{
            setError7("")
        }
       }
       function nameValidator8(){
        if( address==""){
            setError8("Gender field can not be empty")
        }
        else{
            setError8("")
        }
       }
       function nameValidator9(){
        if( Adhar_number==""){
            setError9("Adhar field can not be empty")
        }
        else{
            setError9("")
        }
       }
       function nameValidator10(){
        if( contact_number==""){
            setError10("Contact Number field can not be empty")
        }
        else{
            setError10("")
        }
       }
       function nameValidator11(){
        if( password==""){
            setError11("Password field can not be empty")
        }
        else{
            setError11("")
        }
       }
    const signup = () => {
        // let bodyFormData = new FormData();
        // bodyFormData.append(username);
        // bodyFormData.append(email); 
        // bodyFormData.append(mobile_number);
        // bodyFormData.append(password); 
        // bodyFormData.append(retype_password); 
        fetch('http://192.168.100.167:4002/v1/user/register', {
            method: 'POST',
            headers: { 
                'Accept': 'application/json',
                'Content-Type':'application/json'
         },
         body: JSON.stringify({
            username,
            role,
            email,
            father_name,
            mother_name,
            blood_group,
            address,
            gender,
            Adhar_number,
            contact_number,
            password,
            // expiresInMins: 60, // optional
          })
        })
    //     .then(res => res.json())
    //     .then(res => setData(res))
    //     .then(console.log(data))
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
        <ScrollView>
        <View>
            <Text style={{ marginVertical: 40, fontWeight: "bold", fontSize: 30, textAlign: "center" }}>Create Your Account</Text>
            
            <TextInput onBlur={()=>nameValidator1()} value={username} onChangeText={(username) => setUsername(username)} style={{ marginHorizontal: 20 }} placeholder='Enter your Username' placeholderTextColor="black" />
            <View style={styles.lineStyle} />
            <Text style={{color:"red",textAlign:"center"}}>{error1}</Text>
            <TextInput onBlur={()=>nameValidator2()} value={role} onChangeText={(role) => setRole(role)} style={{ marginHorizontal: 20 }} placeholder='Enter your Role' placeholderTextColor="black" />
            <View style={styles.lineStyle} />
            <Text style={{color:"red",textAlign:"center"}}>{error2}</Text>
            <TextInput onBlur={()=>nameValidator3()} value={email} onChangeText={(email) => setEmail(email)} style={{ marginHorizontal: 20 }} placeholder='Enter your Email' placeholderTextColor="black" />
            <View style={styles.lineStyle} />
            <Text style={{color:"red",textAlign:"center"}}>{error3}</Text>
            <TextInput onBlur={()=>nameValidator4()} value={father_name} onChangeText={(father_name) => setFather_name(father_name)} style={{ marginHorizontal: 20 }} placeholder='Enter your father_name' placeholderTextColor="black" />
            <View style={styles.lineStyle} />
            <Text style={{color:"red",textAlign:"center"}}>{error4}</Text>
            <TextInput onBlur={()=>nameValidator5()} value={mother_name} onChangeText={(mother_name) => setMother_name(mother_name)} style={{ marginHorizontal: 20 }} placeholder='Enter your Mother_name' placeholderTextColor="black" />
            <View style={styles.lineStyle} />
            <Text style={{color:"red",textAlign:"center"}}>{error5}</Text>
            <TextInput onBlur={()=>nameValidator6()} value={blood_group} onChangeText={(blood_group) => setBlood_group(blood_group)} style={{ marginHorizontal: 20 }} placeholder='Enter your Blood_group' placeholderTextColor="black" />
            <View style={styles.lineStyle} />
            <Text style={{color:"red",textAlign:"center"}}>{error6}</Text>
            <TextInput onBlur={()=>nameValidator7()} value={address} onChangeText={(address) => setAddress(address)} style={{ marginHorizontal: 20 }} placeholder='Enter your Address' placeholderTextColor="black" />
            <View style={styles.lineStyle} />
            <Text style={{color:"red",textAlign:"center"}}>{error7}</Text>
            <TextInput onBlur={()=>nameValidator8()} value={gender} onChangeText={(gender) => setGender(gender)} style={{ marginHorizontal: 20 }} placeholder='Enter your Gender' placeholderTextColor="black" />
            <View style={styles.lineStyle} />
            <Text style={{color:"red",textAlign:"center"}}>{error8}</Text>
            <TextInput onBlur={()=>nameValidator9()} value={Adhar_number} onChangeText={(Adhar_number) => setAdhar_number(Adhar_number)} style={{ marginHorizontal: 20 }} placeholder='Enter your Adhar Number' placeholderTextColor="black" />
            <View style={styles.lineStyle} />
            <Text style={{color:"red",textAlign:"center"}}>{error9}</Text>
            <TextInput onBlur={()=>nameValidator10()} value={contact_number} onChangeText={(contact_number) => setContact_number(contact_number)} style={{ marginHorizontal: 20 }} placeholder='Enter Contact Number' placeholderTextColor="black" />
            <View style={styles.lineStyle} />
            <Text style={{color:"red",textAlign:"center"}}>{error10}</Text>
            <TextInput onBlur={()=>nameValidator11()} value={password} onChangeText={(password) => setPassword(password)} style={{ marginHorizontal: 20 }} placeholder='Enter your Password' placeholderTextColor="black" />
            <View style={styles.lineStyle} />
            <Text style={{color:"red",textAlign:"center"}}>{error11}</Text>
           
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
        </ScrollView>
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