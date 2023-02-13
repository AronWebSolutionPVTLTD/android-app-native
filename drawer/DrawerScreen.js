import 'react-native-gesture-handler';
import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import BottomNavigationScreen from '../bottomNavigation/BottomNavigationScreen';
import StudentProfile from '../profile/StudentProfile';
import { Dimensions } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Logout from '../login/Logout';

const Drawer = createDrawerNavigator();
export default function DrawerScreen() {
  return (
    <Drawer.Navigator
    // drawerContentOptions={{
    //   activeTintColor: 'white',
    //   activeBackgroundColor: 'grey',
    //   inactiveTintColor: 'blue',
    //   inactiveBackgroundColor: 'white',
    //   labelStyle:{
    //     marginLeft:5
    //   }
    // }}
    screenOptions={{
      drawerStyle: {
        width: Dimensions.get('window').width / 1.75,
        backgroundColor: '#bc8f8f',
        
      },
     drawerActiveTintColor:"white",
      headerRight:() => <Logout/>,
    }}
    >
      <Drawer.Screen options={{
      drawerIcon: () => (
         <MaterialCommunityIcons name="view-dashboard"
         size={25}
         color="white" />
      ),
    
     
   }}  name="Dashboard" component={BottomNavigationScreen} />
      <Drawer.Screen options={{
        
      drawerIcon: () => (
        
         <MaterialCommunityIcons name="account"
         size={25}
         color="white" />
      ),
   }}  name="Student Profile" component={StudentProfile} />
    </Drawer.Navigator>
  );
}

 
