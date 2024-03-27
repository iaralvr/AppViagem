import { useContext, useState } from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { View, StyleSheet, TextInput, TouchableOpacity, Text, Image } from "react-native";
import { UserContext } from "./context/UserContext";

export default function Login ()
{
    const[ email, setEmail ] = useState("");
    const[ senha, setSenha ] = useState("");
    const[ erro, setErro ] = useState( false );

    const {Login}= useContext(UserContext);

    
  
     function realizalogin()
    {
        Login( email, senha);
    
    }


    return (  
        <View style={css.tudo}> 
        <View style={css.container}>
            <Image style={css.imagem} source={require('../assets/Logotipo.png' )}></Image>
            <View><Text style={css.texto}>ENTRE OU FAÇA O CADASTRO </Text></View>
            <View style={css.caixa}>
                <TextInput style={css.input} placeholder="E-mail" value={email} onChangeText={ (digitado) => setEmail( digitado )}></TextInput>
                <TextInput style={css.input} placeholder="Senha" value={senha} onChangeText={ (digitado) => setSenha( digitado )}></TextInput>
                <TouchableOpacity style={css.btn} onPress={realizalogin}>
                    <Text style={css.btnText}>ENTRAR</Text>
                </TouchableOpacity>
                </View>
                <View><Text style={css.cadastro}>Não tem conta? Faça o cadastro</Text></View>
                { erro && <Text >Dados Inválidos, Por Favor Confirme suas Informações.</Text>}
        </View>        
        </View>
    )
}

const css = StyleSheet.create ({

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
          backgroundColor: '#AAE3AB',
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
            height: '35%',
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
        marginLeft: '11%',
        marginTop: '6%'
    },
    cadastro:{
        marginLeft: '22%'
    }

});
