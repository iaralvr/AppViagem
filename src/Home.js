import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

const Home = () => {
  const handleContinuePress = () => {
   
  };

  return (
    <View style={styles.container}>
      <View style={styles.spacer}></View>
      <Image source={require('../assets/fundohome.png')} style={styles.imagem} />
      <TouchableOpacity style={styles.button} onPress={handleContinuePress}>
        <Text style={styles.buttonText}>Continuar</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#469843',
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
    backgroundColor: '#AAE3AB',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  buttonText: {
    color: '#469843',
    fontSize: 16,
    fontWeight: 'bold',
  },
  imagem: {
    width: 500, 
    height: 700, 
    marginBottom: 10,
    resizeMode: "contain",
  },
});

export default Home;