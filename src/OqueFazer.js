import {React} from 'react';
import { View, Text, StyleSheet, Image,   } from 'react-native';


export default function OqueFazer() {
  return (
    <View>
      <View style={styles.tudo}>
        <View style={styles.container}>
          <Image source={require('../assets/img/titulo2.png')} style={styles.titulo} />
          <View style={styles.square}>
            <View style={styles.caixa}>
              <Text style={styles.text}>As atividades preferidas dos turistas em Veneza</Text>
              <Image source={require('../assets/img/passeioV.webp')} style={styles.imagem} />
              <Text style={styles.text}>Passeio de gôndola pelo Grande Canal </Text>
           
            </View>
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
    width: 200,
    height: 210,
    resizeMode: 'cover',
    alignSelf: 'center',
  },
  text: {
    marginTop: 10,
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center', 
  },
  titulo: {
    width: 250,
    height: 90,
    resizeMode: 'cover',
  },
});