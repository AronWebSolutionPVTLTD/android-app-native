import React, { useRef, useState } from "react"
import {View, Text, TextInput, StyleSheet, Pressable} from "react-native";
import { useNavigation } from '@react-navigation/native';

const CheckEmail =()=>{
  const navigation = useNavigation();
  
    const pin1Ref = useRef(null)
    const pin2Ref = useRef(null)
    const pin3Ref = useRef(null)
    const pin4Ref = useRef(null)
    const pin5Ref = useRef(null)
    const pin6Ref = useRef(null)

    let otp = [pin1,pin2,pin3,pin4,pin5,pin6]
   //const [otp, setOtp] = useState({pin1:"1",pin2:"2",pin3:"3",pin4:"2",pin5:"2",pin6:"2"})
            

    const [data,setData] = useState([])
    const [pin1, setPin1] = useState("")
    const [pin2, setPin2] = useState("")
    const [pin3, setPin3] = useState("")
    const [pin4, setPin4] = useState("")
    const [pin5, setPin5] = useState("")
    const [pin6, setPin6] = useState("")


    const check = () => {
      fetch('http://192.168.1.47:4002/v1/user/verifyOtp', {
          method: 'POST',
          headers: { 
              'Accept': 'application/json',
              'Content-Type':'application/json'
       },
       body: JSON.stringify({
       // "otp":"284478"
       otp
          // expiresInMins: 60, // optional
        })
      })
//       .then(res => res.json())
//       .then(res => setData(res))
//       .then(console.log(data))
//       .then(console.log(data.statusCode))
//       .then((res) => {
//       if (data.statusCode == 200) {
//         navigation.navigate('Reset')
//       }
//   })
  .then(res => res.json()).then((res)=>{
    setData(res)
    console.log("res",res)
navigation.navigate("Reset")}).catch((err)=>console.log("err",err))
  }


    return(
      <View style={{ marginTop:90,}}>
          <Text style={{textAlign:"center",fontWeight:"bold",fontSize:30}}>Enter OTP{"\n"}</Text>
          <Text style={{textAlign:"center"}}>Please Enter the verification code we send otp {"\n"} on your email *****@gmail.com</Text>
        <View 
        style={{
            
           marginTop:30,
            justifyContent:"center",
            alignItems:"center",
            flexDirection:"row",
            justifyContent:"space-around",
            }}>
            <View style={styles.TextInputView}>
                <TextInput
                    ref={pin1Ref}
                    keyboardType={'number-pad'}
                    maxLength={1}
                    onChange={(pin1)=>{
                        setPin1(pin1);
                        if(pin1 != ""){
                            pin2Ref.current.focus()
                        }
                    }}
                    style={styles.TextInputText}
                />
            </View>
            <View style={styles.TextInputView}>
                <TextInput
                ref={pin2Ref}
                     keyboardType={'number-pad'}
                     maxLength={1}
                     onChange={(pin2)=>{
                         setPin2(pin2);
                         if(pin2 != ""){
                            pin3Ref.current.focus()
                        }
                     }}
                     style={styles.TextInputText}
                />
            </View>
            <View style={styles.TextInputView}>
                <TextInput
                ref={pin3Ref}
                     keyboardType={'number-pad'}
                     maxLength={1}
                     onChange={(pin3)=>{
                         setPin3(pin3);
                         if(pin3 != ""){
                            pin4Ref.current.focus()
                        }
                     }}
                     style={styles.TextInputText}
                />
            </View>
            <View style={styles.TextInputView}>
                <TextInput
                ref={pin4Ref}
                     keyboardType={'number-pad'}
                     maxLength={1}
                     onChange={(pin4)=>{
                         setPin4(pin4);
                         if(pin4 != ""){
                            pin5Ref.current.focus()
                        }
                     }}
                     style={styles.TextInputText}
                />
            </View>
            <View style={styles.TextInputView}>
                <TextInput
                ref={pin5Ref}
                     keyboardType={'number-pad'}
                     maxLength={1}
                     onChange={(pin5)=>{
                         setPin5(pin5);
                         if(pin5 != ""){
                            pin6Ref.current.focus()
                        }
                     }}
                     style={styles.TextInputText}
                />
            </View>
            <View style={styles.TextInputView}>
                <TextInput
                ref={pin6Ref}
                     keyboardType={'number-pad'}
                     maxLength={1}
                     onChange={(pin6)=>{
                         setPin6(pin6)
                     }}
                     style={styles.TextInputText}
                />
            </View>
        </View>
        <Pressable onPress={check}>
          <Text 
          style={{
            marginTop:30,
            textAlign:"center", 
            backgroundColor:"black",
            color:"white",
            marginHorizontal:20,
            height:50,
            borderRadius:30,
            textAlignVertical:"center",
            fontSize:22
            }}>Submit</Text>
        </Pressable>
        </View>
    );
};
export default CheckEmail;
const styles = StyleSheet.create({
    TextInputView:{
        borderBottomWidth:1,
        width:30,
        justifyContent:"center",
        alignItems:"center",
        
    },
    TextInputText:{
        fontSize: 30,
    }
});
