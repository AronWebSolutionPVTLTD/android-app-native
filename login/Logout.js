import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native';

const Logout = () => {
    const navigation = useNavigation();
  return (
    <View style={{margin:10,flexDirection:"row"}}>
        <Text style={{alignSelf:"center"}}>Logout</Text>
      <MaterialCommunityIcons onPress={() => navigation.navigate('Home')} name="logout"
         size={30}
         color="black" />
        
    </View>
  )
}

export default Logout

const styles = StyleSheet.create({})