import { TextInput, StyleSheet, TouchableOpacity, FlatList, Keyboard, Platform  } from "react-native";
import { Text, View } from "react-native";
import { useState, useEffect, useContext } from "react";
import Evento from "./Evento";
import * as Calendar from 'expo-calendar';
import {UserContext} from "./context/UserContext";
import uuid from "react-native-uuid";


export default function Agenda(){

    const[ agenda, setAgenda ] = useState();
    const[ inicio, setInicio ] = useState();
    const[ final, setFinal ] = useState();
    const[ dados, setDados] = useState([]);

    const {usuario} = useContext( UserContext );

    
    async function getPermissions()
    {
        const {status} = await Calendar.requestCalendarPermissionsAsync();
        if (status === "granted"){
        const calendars = await Calendar.getCalendarsAsync(Calendar.EntityTypes.EVENT);
        }
    }

    useEffect(() =>{
        getPermissions();
    },[]);

    async function Salvar()
    {
        if( agenda != "" && inicio != "" && final != "" ) {
            Keyboard.dismiss();
            const evento = {
                id: uuid.v4(),
                nome: agenda,
                inicio: inicio,
                final: final
            };
            const novoEvento = [ ...dados , evento ];
            setDados( novoEvento );
            setAgenda( "" );
            setInicio( "" );
            setFinal( "" );

            const defaultCalendarSource=
            Platform.OS === 'ios'
            ? await Calendar.getDefaultCalendarAsync()
            : {isLocalAccount: true, name: 'Expo Calendar'};

            const newCalendarID = await Calendar.createCalendarAsync({
                title: 'Expo Calendar',
                color: 'blue',
                entityType: Calendar.EntityTypes.EVENT,
                sourceId: defaultCalendarSource.id,
                source: defaultCalendarSource,
                name: 'internalCalendarName',
                ownerAccount: 'personal',
                accessLevel: Calendar.CalendarAccessLevel.OWNER,
              });

              let inicioDataHora = inicio.split(" ");
              let inicioData = inicioDataHora[0].split("-");
              let inicioHora = inicioDataHora[1].split(".");
              
              let finalDataHora = final.split(" ");
              let finalData = finalDataHora[0].split("-");
              let finalHora = finalDataHora[1].split(".");
              

              const newEvent ={
                title: agenda,
                startDate: new Date(inicioData[2], inicioData[1] -1, inicioData[0], inicioHora[0], inicioHora[1]),
                endDate: new Date(finalData[2],finalData[1] -1 , finalData[0], finalHora[0], finalHora[1]),
                location: 'Itália',
                notes: 'Viagem para Veneza'
              };

              try{
                await Calendar.createEventAsync(newCalendarID, newEvent);
                alert('Evento criado com sucesso!!');
              } catch(error) {
                alert('Erro ao criar evento!!')
              
              }
        }
        
    }

    


    return(
       
        <View style={css.fundo}>
            <Text style={css.titulo}>Agende agora sua Viagem!!</Text>
            <View>
                <TextInput
                placeholder="Nome Evento" 
                style={css.input}
                textInput={agenda}
                onChangeText={ (digitado) => setAgenda( digitado) }
                value={agenda}
           />
           <TextInput 
                    placeholder="Data de Inicio" 
                    keyboardType='numeric'
                    style={css.input}
                    textInput={inicio}
                    value={inicio}
                    onChangeText={ (digitado) => setInicio( digitado ) }
                />
                <TextInput 
                    placeholder="Data de Término" 
                    keyboardType='numeric'
                    style={css.input}
                    textInput={final}
                    value={final}
                    onChangeText={ (digitado ) => setFinal( digitado ) }
                />
                <TouchableOpacity style={css.btn} onPress={Salvar}>
                    <Text style={css.btnText}>SALVAR</Text>
                </TouchableOpacity>

                <FlatList
                data={dados}
                renderItem={ ({item}) => <Evento agenda={item.nome} inicio={item.inicio} final={item.final} /> }
                keyExtractor={ item => item.id }
            />
            <Text style={css.bemvindo}> Bem vindo: {usuario}</Text>
            </View>
        </View>
    )
}
const css = StyleSheet.create({
    container: {
        width: "90%",
        display: "flex",
        justifyContent: "center",
        alignContent: "center",
        alignItems: "center",
        alignSelf: "center",
        marginTop: 15,
        
        
        
    },
    titulo:{
        color: "#E04082",
        fontWeight:"bold",
        textAlign: "center",
        lineHeight: 45,
        fontSize: 23,


    },
    input: {
        width: "90%",
        backgroundColor: "#EBECF0",
        height: 60,
        borderWidth: 1,
        borderRadius: 3,
        padding: 15,
        marginTop: 25,
        marginBottom: 5,
        borderWidth: 0,
        marginLeft:20
        
        
    },
    btn: {
        width: "90%",
        height: 45,
        borderRadius: 5,
        backgroundColor: "#E04082",
        marginTop: 10,
        marginLeft:20,
        
        
    },
    btnText: {
        lineHeight: 45,
        color: "black",
        textAlign: "center",
        fontSize: 20,
        color:"#ffff",
        fontWeight:"bold"
        
    },
    fundo: {
        backgroundColor:"#FAA3D9",
        height: "100%"
    },
    bemvindo:{
        
    }
   
})