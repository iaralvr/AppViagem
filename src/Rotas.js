import 'react-native-gesture-handler';
import { StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import Login from './Login';
import Home from './Home';
import CatalogoViagem from './CatalogoViagem';
import Agenda from './Agenda';
import Evento from './Evento';
import Comentarios from './Comentarios';
import { useContext } from 'react';

import {UserContext} from "./context/UserContext";

const Tab = createBottomTabNavigator();

export default function Rotas() {

    const {logado} = useContext(UserContext);

    if (logado == false) {
        return (<Login />)
    }
    return (
        <NavigationContainer>
            <Tab.Navigator initialRouteName="Agenda">
                <Tab.Screen name="Agenda" component={Agenda} options={{
                    tabBarLabel: 'Agenda',
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="calendar" color={color} size={size} />
                    ),
                }} />
                <Tab.Screen name="Comentários" component={Comentarios} options={{
                    tabBarLabel: 'Comentários',
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="forum" color={color} size={size} />
                    ),
                
                }} />
            </Tab.Navigator>
        </NavigationContainer>
    );
}