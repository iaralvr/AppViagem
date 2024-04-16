import React, { useState,useContext }   from "react";
import { View, StyleSheet, TextInput, TouchableOpacity, Text, Image } from "react-native";

import {UserContext} from "./context/UserContext";


export default function Cadastro() {
    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [confirmarSenha, setConfirmarSenha] = useState("");
    const [erro, setErro] = useState(false);
    const {setLogin, setCadastro} = useContext(UserContext);
    

    function realizarCadastro() {
        console.log("Nome:", nome);
        console.log("E-mail:", email);
        console.log("Senha:", senha);
        console.log("Confirmar Senha:", confirmarSenha);
    }

    return (  
        <View style={css.tudo}> 
            <View style={css.container}>
                <Image style={css.imagem} source={require('../assets/Logotipo.png' )}></Image>
                <View><Text style={css.texto}>Cadastre-se</Text></View>
                <View style={css.caixa}>
                    <TextInput style={css.input} placeholder="Nome" value={nome} onChangeText={(digitado) => setNome(digitado)}></TextInput>
                    <TextInput style={css.input} placeholder="E-mail" value={email} onChangeText={(digitado) => setEmail(digitado)}></TextInput>
                    <TextInput style={css.input} placeholder="Senha" secureTextEntry={true} value={senha} onChangeText={(digitado) => setSenha(digitado)}></TextInput>
                    <TextInput style={css.input} placeholder="Confirmar Senha" secureTextEntry={true} value={confirmarSenha} onChangeText={(digitado) => setConfirmarSenha(digitado)}></TextInput>
                    <TouchableOpacity style={css.btn} onPress={ () => { setCadastro( false ); setLogin( false );}}>
                            <Text style={css.btnText}>CADASTRAR</Text>
                        </TouchableOpacity>
                </View>
                { erro && <Text >Dados Inválidos, Por Favor Confirme suas Informações.</Text>}
            </View>        
        </View>
    );
}

const css = StyleSheet.create({
    input: {
        width: "83%",
        height: 40,
        marginBottom: 5,
        marginLeft: '8%',
        borderRadius: 6,
        padding: 8,
        marginTop: 15,
        borderWidth: 2,
        fontSize: 15,
        borderColor: '#DEDEDE',
        color: '#7C7C7C'
    },
    btn:{
        width:"83%",
        marginTop: 10,
        marginLeft: '8%',
        height: 45,
        backgroundColor: '#FAA3D9',
        borderRadius: 5,
        color: 'white'
    },
    tudo:{
        backgroundColor: 'white',
        height: '100%'
    },
    btnText:{
        color: '#fff',
        textAlign: 'center',
        lineHeight: 37,
        fontSize: 15
    },
    caixa:{
        width: '73%',
        height: '50%',
        borderRadius: 7,
        marginLeft: '13%',
        marginTop: '3%',
        backgroundColor: '#F2F2F2'
    },
    imagem: {
        width: 200,
        height: 200,
        resizeMode: 'contain',
        marginLeft: '26%',
        marginTop: '10%'
    },
    texto: {
        marginTop: '5%',
        textAlign: 'center',
    }
});