import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import DrawerScreen from '../drawer/DrawerScreen'
import BottomNavigationScreen from '../bottomNavigation/BottomNavigationScreen'
import LoginScreen from '../login/LoginScreen'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Exams from '../components/Exams'
import Attendence from '../components/Attendence'
import Payment from '../components/Payment'
import Result from '../components/Result'
import SignupScreen from '../login/SignupScreen'
import ForgotScreen from '../login/ForgotScreen'
import CheckEmail from '../login/CheckEmail'
import ResetPassword from '../login/ResetPassword'
//import { useNavigation } from '@react-navigation/native';
const Stack = createNativeStackNavigator();
const RootScreen = () => {
    //const navigation = useNavigation();
    
  return (
    //<DrawerScreen/>
   // <LoginScreen/>

    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home"
          screenOptions={{
            headerStyle:{
              backgroundColor:"#6E5FDF"
            }
          }}
      >
        <Stack.Screen options={{headerShown:false}} name="Home" component={LoginScreen}/>
        <Stack.Screen options={{headerShown:false}} name="Profile" component={DrawerScreen}/>
        <Stack.Screen  name="Exams" component={Exams} />
        <Stack.Screen name="Attendence" component={Attendence} />
        <Stack.Screen  name="Payment" component={Payment} />
        <Stack.Screen name="Result" component={Result} />
        <Stack.Screen options={{headerShown:false}} name="SignUp" component={SignupScreen} />
        <Stack.Screen options={{headerShown:false}} name="Forgot" component={ForgotScreen} />
        <Stack.Screen options={{headerShown:false}} name="Check" component={CheckEmail} />
        <Stack.Screen options={{headerShown:false}} name="Reset" component={ResetPassword} />
      </Stack.Navigator>
    </NavigationContainer>
   
  )
}

export default RootScreen

const styles = StyleSheet.create({})