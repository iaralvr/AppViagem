import { View, Text, StyleSheet, TextInput, TouchableOpacity, Keyboard, FlatList } from 'react-native'
import React from 'react'
import { useState } from 'react';




export default function Comentarios() {

  const [comentario, setComentario] = useState();
  const [listaComentarios, setListaComentarios] = useState([]);


  function Enviar()
  {
    if (comentario.trim() !== '') {
      setListaComentarios([...listaComentarios, comentario]);
      setComentario('');
    }
  }
 


  return (
    <View style={css.fundo}>
      <View style={css.titulo}>
           <Text style={css.texto}>Tire dúvidas com viajantes que</Text>
           <Text  style={css.texto}>já estiveram no seu destino.</Text>
      </View>
      <View style={css.btnText}>
        <Text style={css.btnText}>Compartilhe sua experiência</Text>
        <Text style={css.btnText2}> com outros viajantes.</Text>
        </View>
      <TextInput
        style={css.input}
        textInput={comentario}
        onChangeText={(digitado) => setComentario(digitado)}
        value={comentario}
      />
       <TouchableOpacity style={css.btn1} onPress={Enviar}>
                    <Text style={css.btnText1}>ENVIAR</Text>
                </TouchableOpacity>

        <FlatList
        data={listaComentarios}
        renderItem={({ item }) => (
          <View style={css.comentarioContainer}>
            <Text style={css.comentario}>{item}</Text>
          </View>
        )}
        keyExtractor={(item, index) => index.toString()}
      />

                
    </View>

    

  )
}

const css = StyleSheet.create({

  fundo:{
    backgroundColor:"#E04082",
    height: "100%"
  },

  titulo: {
    width: "85%",
    height: 95,
    borderRadius: 5,
    backgroundColor: "#FAA3D9",
    marginTop: 40,
    marginLeft: 30,
    textAlign: "center",
    padding:10,
  },
  texto:{
    color:"#E04082",
    fontSize:20,
    fontWeight:"bold",
    marginLeft:25
  },
  
  input: {
    width: "90%",
    backgroundColor: "#FAA3D9",
    height: 60,
    borderWidth: 1,
    borderRadius: 3,
    padding: 15,
    marginTop: 15,
    marginBottom: 15,
    borderWidth: 0,
    marginLeft: 20
  },
  subtitulo: {
    lineHeight: 45,
    color: "black",
    fontSize: 20,
    marginLeft: 20
  },
  btnText: {
    lineHeight: 45,
    color: "#FAA3D9",
    fontSize: 20,
    marginLeft: 35
  },
  btnText2:{
    lineHeight: 45,
    color: "#FAA3D9",
    fontSize: 20,
    marginLeft: 55
  },
  btn1: {
    width: "90%",
    height: 45,
    borderRadius: 5,
    backgroundColor: "#FAA3D9",
    marginTop: 10,
    marginLeft:20
    
},
btnText1: {
    lineHeight: 45,
    color: "#E04082",
    textAlign: "center",
    fontSize: 20,
},
 comentarioContainer: {
    backgroundColor: "#FAA3D9",
    padding: 10,
    marginBottom: 2,
    borderRadius: 5,
    marginTop:50,
    width:300,
    marginLeft:55
  },
  comentario: {
    fontSize: 16,
    color: "#E04082",
  },
    
})