import { StyleSheet, Text, View, Button, TextInput, Pressable, Image } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
const ForgotScreen = () => {
    const navigation = useNavigation();
    return (
        <View>
            <Text style={{marginTop:70,fontWeight:"bold",fontSize:30,textAlign:"center"}}>Forgot Password</Text>
            <Text style={{textAlign:"center",marginVertical:30}}>Enter the email associated with your account {"\n"} and we will send and email with an otp to reset{"\n"} your Password</Text>
            <View>
                <Text style={{ marginHorizontal: 20, marginVertical: 10 }}>Username</Text>
                <TextInput style={{ marginHorizontal: 20 }} placeholder='Type your Username' placeholderTextColor="black" />
                <View style={styles.lineStyle} />

                <Pressable onPress={() => navigation.navigate('Check')}>
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