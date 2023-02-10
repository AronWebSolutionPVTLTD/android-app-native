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
    <Drawer.Navigator screenOptions={{
      drawerStyle: {
        width: Dimensions.get('window').width / 1.75,
        backgroundColor: '#FFFFFF',
      },
      headerRight:() => <Logout/>
    }}
   
    >
      <Drawer.Screen options={{
      drawerIcon: () => (
         <MaterialCommunityIcons name="facebook"
         size={10}
         color="red" />
      ),
   }}  name="Dashboard" component={BottomNavigationScreen} />
      <Drawer.Screen  name="Student Profile" component={StudentProfile} />
    </Drawer.Navigator>
  );
}

 
