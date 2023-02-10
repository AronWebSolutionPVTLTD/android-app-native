// React Native Calendar Picker using react-native-calendar-picker
// https://aboutreact.com/react-native-calendar-picker/

// import React in our code
import React, { useState } from 'react';

// import all the components we are going to use
import { SafeAreaView, StyleSheet, View, Text, Image, ImageBackground } from 'react-native';

//import CalendarPicker from the package we installed
import CalendarPicker from 'react-native-calendar-picker';

const Attendence = () => {
  const [selectedStartDate, setSelectedStartDate] = useState(null);
  const [selectedEndDate, setSelectedEndDate] = useState(null);

  const onDateChange = (date, type) => {
    //function to handle the date change
    if (type === 'END_DATE') {
      setSelectedEndDate(date);
    } else {
      setSelectedEndDate(null);
      setSelectedStartDate(date);
    }
  };
  return (
<View >
    <View style={styles.container}>

      <CalendarPicker
        startFromMonday={true}
        allowRangeSelection={true}
        minDate={new Date(2018, 1, 1)}
        maxDate={new Date(2050, 6, 3)}
        weekdays={
          [
            'Mon',
            'Tue',
            'Wed',
            'Thur',
            'Fri',
            'Sat',
            'Sun'
          ]}
        months={[
          'January',
          'Febraury',
          'March',
          'April',
          'May',
          'June',
          'July',
          'August',
          'September',
          'October',
          'November',
          'December',
        ]}
        previousTitle="Previous"
        nextTitle="Next"
        todayBackgroundColor="#e6ffe6"
        selectedDayColor="#66ff33"
        selectedDayTextColor="#000000"
        scaleFactor={375}
        textStyle={{

          color: '#000000',
        }}
        onDateChange={onDateChange}
      />
      
     
      
     
      
      {/* <View style={styles.textStyle}>
          <Text style={styles.textStyle}>
            Selected Start Date :
          </Text>
          <Text style={styles.textStyle}>
            {selectedStartDate ? selectedStartDate.toString() : ''}
          </Text>
          <Text style={styles.textStyle}>
            Selected End Date :
          </Text>
          <Text style={styles.textStyle}>
            {selectedEndDate ? selectedEndDate.toString() : ''}
          </Text>
        </View> */}
    </View>
    <View style={styles.container1}>
    <Text >Total Working Days</Text>
    <Text style={{marginRight:20}}>28</Text>
    </View>
    <View style={{flexDirection:"row",marginTop:20,justifyContent:"space-around"}}>
      <ImageBackground style={{height:130,width:140}} source={require("../assets/image5.png")}>
        <View>
        <Text style={{color:"white",textAlign:"center",marginTop:1}}>Total Absent</Text>
        <Text style={{color:"white",fontSize:95,textAlign:"center"}}>24</Text>
        </View>
        </ImageBackground>
      
      <ImageBackground style={{height:130,width:140}} source={require("../assets/image6.png")}>
      <View>
      <Text style={{color:"white",textAlign:"center",marginTop:1}}>Total Present</Text>
        <Text style={{color:"white",fontSize:95,textAlign:"center"}}>20</Text>
        </View>
      </ImageBackground>
      </View>
    </View>
  );
};
export default Attendence;

const styles = StyleSheet.create({
  container1: {
    backgroundColor: '#ffffff',
    padding: 16,
    borderRadius: 54,
    elevation: 4,
    shadowColor: 'black',
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    marginTop:10,
    flexDirection:"row",
    justifyContent:"space-between",
    marginHorizontal:10
  },
  container: {
    backgroundColor: '#ffffff',
    padding: 16,
    height:380,
    borderRadius: 24,
    elevation: 4,
    shadowColor: 'black',
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    marginTop:5,
    marginHorizontal:8
  },
  textStyle: {
    marginTop: 10,
  },
  titleStyle: {
    textAlign: 'center',
    fontSize: 20,
    margin: 20,
  },
});