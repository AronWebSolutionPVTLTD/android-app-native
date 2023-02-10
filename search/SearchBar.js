import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
const SearchBar = ({value,updateSearch,style}) => {
  return (
    <View style={styles.container}>
      <View style={styles.searchContainer}>
        <TextInput style={{marginTop:5,marginHorizontal:10}}> 
             <MaterialCommunityIcons name="magnify"  size={25}  color="black" />
        </TextInput>
      </View>
    </View>
  )
}

export default SearchBar

const styles = StyleSheet.create({
    searchContainer:{
        backgroundColor:"white",
        marginTop:9,
        width:"94%",
        height: 40,
        borderRadius:20
    },
    container:{
        height: 80,
        alignItems:"center"
    }
})