import { Image, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';

const HomeScreen = () => {
    const navigation = useNavigation();
  return (
    <View style={{flex: 1,
        justifyContent: "center",
        alignItems: "center",backgroundColor:"#ff0080"}}>
        <View style={{flexDirection:"row",justifyContent:"space-evenly",}}>
            <View>
                <Pressable  onPress={() => navigation.navigate('Attendence')}>
                <Image style={{width:175,height:200}} source={require('../assets/image1.png')}/>
                </Pressable>
            </View>
            <View>
                <Pressable onPress={() => navigation.navigate('Payment')}>
                <Image style={{width:180,height:200,}} source={require('../assets/image2.png')}/>
                </Pressable>
            </View>
        </View>
        <View style={{flexDirection:"row",justifyContent:"space-evenly",marginTop:20}}>
            <View>
                <Pressable onPress={() => navigation.navigate('Result')}>
                <Image style={{width:180,height:200,}} source={require('../assets/image3.png')}/>
                </Pressable>
            </View>
            <View>
                <Pressable onPress={() => navigation.navigate('Exams')}>
                <Image style={{width:180,height:235,}} source={require('../assets/image4.png')}/>
                </Pressable>
            </View>
        </View>
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({

})