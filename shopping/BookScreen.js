import { Image, Pressable, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import SearchBar from '../search/SearchBar'
import { Ionicons } from '@expo/vector-icons'

const BookScreen = () => {
  const [value, setValue] = useState('')
  function updateSearch(value){

  }
  return (
    <View style={{ marginTop: 10 }}>
      <View style={{height:"10%",borderRadius:20}}>
      <SearchBar
       
    
        value={value}
        updateSearch={updateSearch}
       
      />
      <Ionicons/>
      </View>
      <View style={styles.container}>
        <View  >
          <Image style={styles.image} source={require('../assets/book.png')} />
        </View>
        <View style={styles.lineStyle} />
        <View style={styles.text}>
          <Text>Scholars insights Maths Olympiad </Text>
          <Text>Maths Olympiad </Text>
          <Text style={{ color: "#fcb103" }}>&#9733;&#9733;&#9733;&#9733;</Text>
          <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
            <View>
              <Text>$100</Text>
            </View>
            <View>
              <Pressable>
                <Text style={styles.button}>Buy Now</Text>
              </Pressable>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.container}>
        <View  >
          <Image style={styles.image} source={require('../assets/book.png')} />
        </View>
        <View style={styles.lineStyle} />
        <View style={styles.text}>
          <Text>Scholars insights Maths Olympiad </Text>
          <Text>Maths Olympiad </Text>
          <Text style={{ color: "#fcb103" }}>&#9733;&#9733;&#9733;&#9733;</Text>
          <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
            <View>
              <Text>$100</Text>
            </View>
            <View>
              <Pressable>
                <Text style={styles.button}>Buy Now</Text>
              </Pressable>
            </View>
          </View>


        </View>
      </View>
      <View style={styles.container}>
        <View  >
          <Image style={styles.image} source={require('../assets/book.png')} />
        </View>
        <View style={styles.lineStyle} />
        <View style={styles.text}>
          <Text>Scholars insights Maths Olympiad </Text>
          <Text>Maths Olympiad </Text>
          <Text style={{ color: "#fcb103" }}>&#9733;&#9733;&#9733;&#9733;</Text>
          <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
            <View>
              <Text>$100</Text>
            </View>
            <View>
              <Pressable>
                <Text style={styles.button}>Buy Now</Text>
              </Pressable>
            </View>
          </View>


        </View>
      </View>
      <View style={styles.container}>
        <View  >
          <Image style={styles.image} source={require('../assets/book.png')} />
        </View>
        <View style={styles.lineStyle} />
        <View style={styles.text}>
          <Text>Scholars insights Maths Olympiad </Text>
          <Text>Maths Olympiad </Text>
          <Text style={{ color: "#fcb103" }}>&#9733;&#9733;&#9733;&#9733;</Text>
          <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
            <View>
              <Text>$100</Text>
            </View>
            <View>
              <Pressable>
                <Text style={styles.button}>Buy Now</Text>
              </Pressable>
            </View>
          </View>


        </View>
      </View>

    </View>
  )
}
export default BookScreen
const styles = StyleSheet.create({
  lineStyle: {
    width: 1,
    backgroundColor: '#909090',
    height: '80%',
    marginTop: 10
  },
  button: {
    backgroundColor: "red",
    marginRight: 70,
    color: "white",
    width: 80,
    // marginVertical:10,
    // marginHorizontal:80,
    // borderRadius:20,
    textAlign: "center",
    fontSize: 12
    // borderWidth:1

  },
  image: {
    width: 90,
    height: 100,
    marginHorizontal: 10,
    marginVertical: 10,
  },
  text: {
    marginVertical: 20,
    marginHorizontal: 20,
  },
  container: {
    flexDirection: "row",
    marginHorizontal: 10,
    marginTop: 10,
    height: 120,
    borderRadius: 30,
    elevation: 4,
    backgroundColor: '#FFFFFF',
    shadowColor: 'black',
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
  }
})