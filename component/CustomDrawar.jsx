import { View, Text, ImageBackgroundBase, ImageBackground ,Image, TouchableOpacity, } from 'react-native'
import React ,  { useState } from 'react'
import { DrawerContentScrollView , DrawerItemList } from '@react-navigation/drawer'
import Ionicons from 'react-native-vector-icons/Ionicons'
import Fontawesome from 'react-native-vector-icons/FontAwesome'
import * as SMS from 'expo-sms';

const CustomDrawar = (props) => {

    const [isAvailable, setIsAvailable] = useState(null);
  
    const checkSmsAvailability = async () => {
      const available = await SMS.isAvailableAsync();
      setIsAvailable(available);
      if (!available) {
        Alert.alert('SMS is not available on this device.');
      }
    };
    const sendSms = async () => {
        await checkSmsAvailability();
    
        if (isAvailable) {
          const { result } = await SMS.sendSMSAsync(
            ['+97339733516'], // Replace with actual number(s)
            'Hello! This is a message sent using Expo SMS , devloped by Eng.Sughra Hassan.'
          );
    
          if (result === 'sent') {
            Alert.alert('SMS sent successfully!');
          } else {
            Alert.alert('SMS not sent.');
          }
        }
      };
    
  return (
    <View style={{flex: 1}}>
    <DrawerContentScrollView {...props}
    contentContainerStyle={{backgroundColor: '#dae7f0', paddingTop: 50 }}>
        <ImageBackground source={require('../assets/bkg2.jpg')} style={{padding:20 , marginTop: - 50, width: 400,height:200, marginLeft : -20 ,opacity: 0.5}}>
        <Image source={require('../assets/carousel-1.jpg')} style={{width: 100, height: 100, borderRadius: 50 , marginTop:10, marginBottom:10 , marginLeft:20}}/>
        <Text style={{fontSize:18,fontFamily:'Roboto-Medium', color :'b6bac3',  marginLeft:20 ,  fontWeight: 'bold' }}>Sughra Hassan</Text>
       <View style={{flexDirection:'row', marginTop:5}}>
        <Text style={{fontFamily:'Roboto-Regular', color :'b6bac3', marginLeft:20 ,  fontWeight: 'bold' }}>Software Engineer</Text>
        <Ionicons name='code-working-outline' size={20} color='black' style={{marginLeft:5,  fontWeight: 'bold'}}/>
        </View>

        </ImageBackground>
        <View style={{flex:1, paddingTop:10}}>
        <DrawerItemList {...props} />
        </View>
    </DrawerContentScrollView>

    <View style ={{padding:20, borderTopColor:'#e6f1ff', borderTopWidth:1}}>

    <TouchableOpacity onPress={sendSms} style={{ paddingVertical: 15}}>
            <View style={{flexDirection:'row', alignItems:'center'}}>
            <Ionicons name='share-social-outline' size={22} color='black' style={{marginLeft:5}}/>

            <Text style={{fontSize:16, fontFamily:'Roboto-Medium', marginLeft:5,  fontWeight: 'bold'}}>Tell a Friend by SMS</Text>
            </View>
        </TouchableOpacity>
    <TouchableOpacity onPress={() => alert('Logout')} style={{ paddingVertical: 15}}>
            <View style={{flexDirection:'row', alignItems:'center'}}>
            <Ionicons name='log-out-outline' size={22} color='black' style={{marginLeft:5,  fontWeight: 'bold'}}/>

            <Text style={{fontSize:16, fontFamily:'Roboto-Medium', marginLeft:5, fontWeight: 'bold'}}>Logout</Text>
            </View>
        </TouchableOpacity>

    </View>
    </View>


  )
}

export default CustomDrawar