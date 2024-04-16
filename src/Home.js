import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

const Home = () => {
  const handleContinuePress = () => {
   
  };

  return (
    <View style={styles.container}>
      <View style={styles.spacer}></View>
      <Image source={require('../assets/fundohome.jpeg')} style={styles.imagem} />
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
    width: 500, 
    height: 700, 
    marginBottom: 10,
    resizeMode: "contain",
  },
});

export default Home;