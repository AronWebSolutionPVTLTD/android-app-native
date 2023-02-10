import { Image, Pressable, StyleSheet, Text, View ,} from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';

const CheckEmail = () => {
    const navigation = useNavigation();
  return (
    <View>
      <Text style={styles.text}>Check OTP</Text>
      <Text style={styles.text1}>Please Enter the varification code we send otp{"\n"}  your mobile no. ********89</Text>
      <Text style={{marginHorizontal:100,marginTop:60}}>_____    <Text>_____    </Text><Text>_____    </Text><Text>_____</Text></Text>
      <Pressable  onPress={() => navigation.navigate('Reset')}>
      <Text style={styles.button}>Verify</Text>
      </Pressable>
      <Text style={{textAlign:"center",marginTop:80}}>Did not receive the email? Check your spam {"\n"} folder or <Text style={{fontWeight:"bold"}}>try another email address</Text> </Text>
    </View>
  )
}
export default CheckEmail

const styles = StyleSheet.create({
    text:{
        fontSize:30,
        fontWeight:"bold",
        textAlign:"center",
        marginTop:30,
    },
    text1:{
        textAlign:"center",
    },
    image:{
        alignSelf:"center"

    },
    button:{
        textAlign:"center",
        backgroundColor:"black",
        color:"white",
        marginHorizontal:30,
        height:50,
        textAlignVertical: "center",
        borderRadius:30,
        marginTop:20
    }
})