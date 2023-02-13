import { Image, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import DateSheet from './DateSheet'

const Exams = () => {
  return (
    <View style={{backgroundColor:"#bc8f8f",flex:1}}>
      <View style={{marginTop:10}}>
        <DateSheet/>
      </View>
     
    </View>
  )
}
export default Exams
const styles = StyleSheet.create({
})