import { Button, Image, StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import RazorpayCheckout from 'react-native-razorpay';
const Payment = () => {

  const makePayment =()=>{
    var options = {
      description: 'Credits towards consultation',
      image: 'https://i.imgur.com/3g7nmJC.png',
      currency: 'INR',
      key: 'rzp_test_WFoCbUuM32ToLG', // Your api key
      amount: '5000',
      name: 'foo',
      prefill: {
        email: 'void@razorpay.com',
        contact: '9191919191',
        name: 'Razorpay Software'
      },
      theme: {color: '#F37254'}
    }
    RazorpayCheckout.open(options).then((data) => {
      // handle success
      alert(`Success: ${data.razorpay_payment_id}`);
    }).catch((error) => {
      // handle failure
      alert(`Error: ${error.code} | ${error.description}`);
    });

  }

  return (
    <View style={{backgroundColor:"#bc8f8f",flex:1}}>
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
      <View style={{flex:1,justifyContent:"center",alignItems:"center"}}>
      <Button
      title="Make a Payment"
      onPress={makePayment}
      />
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