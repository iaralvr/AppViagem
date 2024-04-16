import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import Catalogo from './CatalogoViagem';
import { useState } from 'react';



const Home = () => {
  const handleContinuePress = () => {

  };

  const [catalogo, setCatalogo] = useState('');

  function TrocaCatalogo() {
    setCatalogo(!catalogo)
  }

  return (
  
      
    
    <View style={styles.tudo}>
      {catalogo ?

        <View style={styles.catalogo}>
          <View style={styles.titulo}>
            <View><Image style={styles.titulocatalogo} source={require('../assets/img/titulocatalogo.png')}></Image></View>
          </View>
          <View>
            <View style={styles.container}>
              <View style={styles.caixa}>
                <Image source={require('../assets/img/italiatext.png')} style={styles.imgtext}></Image>
                <Image source={require('../assets/img/italia.jpg')} style={styles.img}></Image>
                <Text style={styles.textocaixa}>CONFIRA</Text>
              </View>
              <View style={styles.caixa}>
                <Image source={require('../assets/img/latinatext.png')} style={styles.imgtext}></Image>
                <Image source={require('../assets/img/americalatina.jpg')} style={styles.img}></Image>
                <Text style={styles.textocaixa}>CONFIRA</Text>
              </View>
            </View>
            <View style={styles.container}>
              <View style={styles.caixa}>
              <Image source={require('../assets/img/lasvegastext.png')} style={styles.imgtext}></Image>
                <Image source={require('../assets/img/lasvegas.jpg')} style={styles.img}></Image>
                <Text style={styles.textocaixa}>CONFIRA</Text>
              </View>
              <View style={styles.caixa}>
                <Image source={require('../assets/img/nytext.png')} style={styles.imgtext}></Image>
                <Image source={require('../assets/img/novayork.jpg')} style={styles.img}></Image>
                <Text style={styles.textocaixa}>CONFIRA</Text>
              </View>
            </View>
          </View>
          <TouchableOpacity onPress={TrocaCatalogo}>
            <Text style={styles.revoltar}>VOLTAR</Text>
          </TouchableOpacity>

        </View>

          


        :


        // PRA TRAS DISSO É O CATALOGO

        // DAQUI PRA FRENTE É A HOME


        <View style={styles.spacer}>
          <Image source={require('../assets/fundohome.png')} style={styles.imagem} />
          <TouchableOpacity style={styles.button} onPress={handleContinuePress}>
            <Text style={styles.buttonText} onPress={TrocaCatalogo}>Continuar</Text>
          </TouchableOpacity>
        </View>
      }
    </View>
  );
};

const styles = StyleSheet.create({
  tudo: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#E04082',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },

  spacer: {
    flex: 1,
  },
  button: {
    backgroundColor: '#FAA3D9',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  buttonText: {
    color: '#E04082',
    fontSize: 16,
    fontWeight: 'bold',
  },
  imagem: {
    width: 600,
    height: 700,
    marginBottom: 10,
    resizeMode: "contain",
  },

  titulocatalogo: {
    width: 350,
    height: 120,

  },
  revoltar: {
    width: "25%",
    height: 40,
    borderRadius: 5,
    backgroundColor: "#FAA3D9",
    
    marginLeft: 120,
    fontWeight: 'bold',
    color: '#E04082',
    fontSize: 15,
    textAlign: 'center'

  },
  caixa: {
    backgroundColor: '#fff',
    padding: 13,
    borderRadius: 7,
    width: 162,
    height: 286,
    marginRight: 15,

  },
  img: {
    width: 135,
    height: 210,
  },
  imgtext: {
    width: 140,
    height: 35,
  },
  container: {
    flexDirection: 'row',
    marginBottom:20
  },
  textocaixa:{
    width: "50%",
    height: 20,
    borderRadius: 5,
    backgroundColor: "#FAA3D9",
    marginLeft: 35,
    fontWeight: 'bold',
    color: '#E04082',
    fontSize: 13,
    textAlign: 'center',
    marginTop:5
  }


});

export default Home;

