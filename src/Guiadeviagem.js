import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

export default function Guiadeviagem() {
  return (
    <View style={styles.tudo}>
    <View style={styles.container}>
    <Image source={require('../assets/img/guiatitulo.png')} style={styles.titulo} />
        <View style={styles.square}>
          <View style={styles.caixa}>
            <Image source={require('../assets/img/itália.jpg')} style={styles.imagem} />
            <Text style={styles.text}>Roma</Text>
          </View>
          <View style={styles.caixatexto}>
            <Text style={styles.botao}>Pacotes</Text>
            <Text style={styles.botao}>O que fazer?</Text>
            
          </View>
        </View>
        <View style={styles.square}>
          <View style={styles.caixa}>
            <Image source={require('../assets/img/novayork.jpg')} style={styles.imagem} />
            <Text style={styles.text}>Nova York</Text>
          </View>
          <View style={styles.caixatexto}>
            <Text style={styles.botao}>Pacotes</Text>
            <Text style={styles.botao}>O que fazer?</Text>
     
          </View>
        </View>
    </View>
    </View>

  );
}

const styles = StyleSheet.create({
  tudo: {
    width: "100%",
    height: "100%",
    backgroundColor: '#E04082'
  },
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  square: {
    marginTop: "3%",
    flexDirection: 'row',
    width: "90%",
    alignItems: 'center',
    marginBottom: "5%",
    padding: 10,
  },
  caixa: {
    backgroundColor: "white",
    padding: 13,
    borderRadius: 7,
  },
  imagem: {
    width: 160, 
    height: 210, 
    resizeMode: 'cover',
  },
  caixatexto: {
    marginLeft: "3%",
    height: "100%",
    paddingHorizontal: 5,
    paddingVertical: 20,
  },
  text: {
    marginTop: 10,
    fontSize: 16,
    fontWeight: 'bold',
  },
  botao: {
    padding: 13,
    marginBottom: "10%",
    backgroundColor: '#FAA3D9',
    width: 140,
    borderRadius: 15,
  },
  titulo: {
    width: 280, 
    height: 120, 
    resizeMode: 'cover',
  },
});

