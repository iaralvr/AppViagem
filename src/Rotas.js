import 'react-native-gesture-handler';
import { StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Login from './Login';
import Home from './Home';
import Agenda from './Agenda';
import Comentarios from './Comentarios';
import { useContext, useState } from 'react';
import {UserContext} from "./context/UserContext";

import Guiadeviagem from './Guiadeviagem';
import Pacotes from './Pacotes';
import Cadastro from './Cadastro';
import Oquefazer from './OqueFazer';

const Tab = createBottomTabNavigator();




export default function Rotas() {

    const { login, setLogin, cadastro, setCadastro } = useContext(UserContext);
    const[logado, setLogado] = useState(false);
    

    if (login == false) {
        return (
            <Login />
        )
    }

    if (cadastro) {
        return (
           <Cadastro />
        )
    }

    return (
        <NavigationContainer>
            <Tab.Navigator initialRouteName="Agenda">
            <Tab.Screen name="Login" component={Login} options={{
                    tabBarLabel: 'Login',
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="forum" color={color} size={size} />
                    ),
                }} />
                
                 
            <Tab.Screen name="Home" component={Home} options={{
                    tabBarLabel: 'Home',
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="home-outline" color={color} size={size} />
                    ),
                }} />
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
                  <Tab.Screen name="Cadastro" component={Cadastro} options={{
                    tabBarLabel: 'Cadastro',
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="forum" color={color} size={size} />
                    ),
                }} />
                   <Tab.Screen name="Guia" component={Guiadeviagem} options={{
                    tabBarLabel: 'Guia',
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="forum" color={color} size={size} />
                    ),
                }} />
                         <Tab.Screen name="Pacotes" component={Pacotes} options={{
                    tabBarLabel: 'Pacotes',
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="forum" color={color} size={size} />
                    ),
                }} />
                        <Tab.Screen name="OqueFazer" component={Oquefazer} options={{
                    tabBarLabel: 'O que fazer',
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="forum" color={color} size={size} />
                    ),
                }} />
               
                
            </Tab.Navigator>
        </NavigationContainer>
    );
}