import 'react-native-gesture-handler';
import { StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';


import Login from './Login';
import Home from './Home';
import UserProvider, { UserContext } from './context/UserContext';
import { useContext } from 'react';

const Tab = createBottomTabNavigator();


  export default function Rotas() {

    const {logado} = useContext(UserContext);

    if( logado == false ) {
        return( <Login/>)
    }



return (
    <UserProvider>
      <NavigationContainer>
        <Tab.Navigator initialRouteName="Home">
        <Tab.Screen name="Login" component={Login}/>
          <Tab.Screen name="Home" component={Home}/>
        
         </Tab.Navigator>

      </NavigationContainer>
    </UserProvider>
  );

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
}