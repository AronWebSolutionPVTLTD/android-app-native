import { Image, StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'

const Payment = () => {
  return (
    <View style={{}}>
      <View style={styles.container}>
        <Text style={{ marginHorizontal: 10 }}>
          Phone Pay</Text>
      </View>
      <View style={styles.container2}>
        <Text style={{marginLeft:20}}>
          Credit Card/Debit Card</Text>
        <TextInput
          placeholderTextColor={"black"}
          placeholder="**** **** **** 0234"
          style={{ marginHorizontal: 20 }}
        />
        <View style={styles.lineStyle} />
        <View style={{flexDirection:"row",marginHorizontal:19,marginTop:10}}>
        <Text>Expiry</Text>
        <Text style={{marginLeft:50}}>CVV</Text>
        </View>
        <View style={{ flexDirection: "row" }}>
          <View>
            <TextInput
              placeholderTextColor={"black"}
              placeholder="MM/"
              style={{ marginHorizontal: 20}}
            />
            <View style={styles.lineStyle} />
          </View>
          <View>
            <TextInput
              placeholderTextColor={"black"}
              placeholder="YY"
            />
            <View style={styles.lineStyle1} />
          </View>
          <View>
            <TextInput
              placeholderTextColor={"black"}
              placeholder="234"
              style={{ marginHorizontal: 20 }}
            />
            <View style={styles.lineStyle} />
          </View>
        </View>
      </View>
      <View style={styles.container}>
        <Text style={{marginLeft: 20}}>
          UPI</Text>
      </View>
      <View style={styles.container}>
        <Text style={{margin: 20}}>
          Cash On Delivery</Text>
      </View>
    </View>
  )
}
export default Payment
const styles = StyleSheet.create({
  lineStyle1: {
    borderWidth: 0.5,
    borderColor: 'black',
  },
  lineStyle: {
    borderWidth: 0.5,
    borderColor: 'black',
    marginHorizontal: 20,
  },
  container: {
    marginHorizontal: 10,
    marginTop: 10,
    height: 60,
    borderRadius: 30,
    elevation: 4,
    backgroundColor: '#FFFFFF',
    shadowColor: 'black',
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    justifyContent: "center"
  },
  container2: {
    marginHorizontal: 10,
    marginTop: 10,
    height: 150,
    borderRadius: 30,
    elevation: 4,
    backgroundColor: '#FFFFFF',
    shadowColor: 'black',
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    justifyContent: "center"
  }
})