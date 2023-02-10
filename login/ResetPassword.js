import { StyleSheet, Text, View, Button, TextInput, Pressable, Image } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
const ResetPassword = () => {
    const navigation = useNavigation();
    return (
        <View>
            <Text style={{marginTop:80,fontWeight:"bold",fontSize:30,textAlign:"center"}}>Reset Password</Text>
            <Text style={{marginTop:10,textAlign:"center"}}>Enter new and Conform Password</Text>
            <View>
                <Text style={{ marginHorizontal: 20, marginTop: 50 }}>Password</Text>
                <TextInput style={{ marginHorizontal: 20 }} placeholder='Type your Password' placeholderTextColor="black" />
                <View style={styles.lineStyle} />
                <Text style={{marginHorizontal:20,marginTop:20}}>Re-Type Password</Text>
                <TextInput style={{ marginHorizontal: 20,marginTop:10 }} placeholder=' Confirm Password' placeholderTextColor="black" />
                <View style={styles.lineStyle} />
                
                <Pressable onPress={() => navigation.navigate('Home')}>
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