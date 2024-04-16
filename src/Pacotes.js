import { View, Text, StyleSheet, Image } from 'react-native'
import {useEffect, useState } from 'react';


export default function Pacotes() {
  
  return (
    <View style={styles.tudo}>
      <View style={styles.container}>
        <Image source={require('../assets/img/texto.png')} style={styles.titulo} />
        <View style={styles.square}>
          <View style={styles.caixa}>
            {  <Image source={require('../assets/img/itália.jpg')}  style={styles.imagem}/>}
            <Text style={styles.text}>Itália</Text>
          </View>
        </View>
      </View>
      <View style={styles.square2}>
        <View style={styles.caixa2}>
          <Image source={require('../assets/img/pacote.png')} style={styles.imagem2} />
        </View>
      </View>
    </View>
  )
}


const styles = StyleSheet.create({
  tudo: {
    flex: 1,
    backgroundColor: '#E04082',
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: {
    alignItems: 'center',
  },
  square: {
    marginTop: "3%",
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
  text: {
    marginTop: 10,
    fontSize: 16,
    fontWeight: 'bold',
  },
  caixa2: {
    backgroundColor: "white",
    padding: 10,
    borderRadius: 5, 
  },
  square2: {
    marginTop: "3%",
    width: "100%",
    alignItems: 'center',
    marginBottom: "5%",
    padding: 10,
  },
  imagem2: {
    width: 365, 
    height: 190, 
    resizeMode: 'cover',
  },
  titulo: {
    width: 280, 
    height: 120, 
    resizeMode: 'cover',
  },
});