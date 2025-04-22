import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import CustomDrawar from './component/CustomDrawar';
import Home from './screens/Home';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Experience from './screens/Experience';
import Stacktools from './screens/Stacktools';
import Projects from './screens/Projects';
import Contactme from './screens/Contactme';
const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator drawerContent={props => < CustomDrawar {...props} />}
      screenOptions={{
         drawerLabelStyle:{marginLeft: -5, fontSize: 15,fontFamily:'Roboto-Medium', fontWeight: 'bold'},
          drawerActiveBackgroundColor: '#e6f1ff',
          drawerActiveTintColor: '#3f72af',
        headerShown: false}} >
        <Drawer.Screen name="Home" component={Home} options={{
          drawerIcon:({color}) =>
            <Ionicons name='home-outline' size={22} color={color} />,
        }} />
        <Drawer.Screen name="Experience" component={Experience}  options={{
          drawerIcon:({color}) =>
            <Ionicons name='briefcase-outline' size={22} color={color}  />,
        }} />
        <Drawer.Screen name="Stack Tools" component={Stacktools} options={{
          drawerIcon:({color}) =>
            <Ionicons name='construct-outline' size={22} color={color}  />,
        }} />
         <Drawer.Screen name="Projects" component={Projects} options={{
          drawerIcon:({color}) =>
            <Ionicons name='folder-open-outline' size={22} color={color}  />,
        }} />
          <Drawer.Screen name="Contact Me" component={Contactme} options={{
          drawerIcon:({color}) =>
            <Ionicons name='mail-outline' size={22} color={color}  />,
        }} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
