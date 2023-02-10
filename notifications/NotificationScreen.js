import { Alert, Button, StyleSheet, Text, View,Platform } from 'react-native'
import React, { useEffect } from 'react'
import * as Notifications from 'expo-notifications';


Notifications.setNotificationHandler({
    handleNotification: async () =>{
        return{
            shouldPlaySound:false,
            shouldSetBadge: false,
            shouldShowAlert:true
        };
    }
});
const NotificationScreen = () => {
    useEffect(()=>{
        async function configurePushNotifications(){
          const {status} = await Notifications.getPermissionsAsync();
            let finalStatus = status;

            if(finalStatus !== 'granted'){
               const {status} = await Notifications.requestPermissionsAsync();
               finalStatus = status;
            }
            if(finalStatus !== 'granted'){
                Alert.alert(
                 'Permission required',
                 'Push notifications need the appropriate permissions.'
                 );
                 return;
            }
            const pushTokenData = await Notifications.getExpoPushTokenAsync()
            console.log(pushTokenData);

            if(Platform.OS === 'android'){
                Notifications.setNotificationChannelAsync('default',{
                    name: 'default',
                    importance: Notifications.AndroidImportance.DEFAULT
                });
            }
        }
        configurePushNotifications();
       
    },[])

    useEffect(()=>{
       const subscription1 = Notifications.addNotificationReceivedListener((notification)=>{
            console.log('Notification received');
            console.log(notification);
            const userName = notification.request.content.data.userName;
            console.log(userName);
        });
        const subscription2 = Notifications.addNotificationResponseReceivedListener((response)=>{
            console.log('Notification Response received');
            console.log(response);
            const userName = response.notification.request.content.data.userName;
            console.log(userName);
        });
        return () =>{
            subscription1.remove();
            subscription2.remove();
        };
       
    },[]);

    function scheduleNotificationHandler(){
        Notifications.scheduleNotificationAsync({
            content: {
                title:"LMS",
                body:'Check your exam ',
                data:{ userName:"Max" }

            },
            trigger:{
                seconds:5
            }
        });
    }
    function sendPushNotificationHandler(){
        fetch('https://exp.host/--/api/v2/push/send',{
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify({
                to:'ExponentPushToken[tCPLw-O-WJ1sERG8LhPH1r]',
                title:'Test - sent from a device',
                body:'This is a test!'
            })
        });
    }
  return (
    <View style={{marginTop:40}}>
     <Button title="Schedule Notification" onPress={scheduleNotificationHandler}/>
     <Button title="Send Push Notification" onPress={sendPushNotificationHandler}/>
    </View>
  )
}
export default NotificationScreen
const styles = StyleSheet.create({})