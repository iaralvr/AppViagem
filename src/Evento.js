import {View, Text, StyleSheet} from "react-native";

export default function Evento({agenda, inicio, final}) {
    return(
    <View style={css.caixa}>
        <Text style={css.agenda}>{agenda}</Text>
        <Text style={css.inicio}>{inicio}</Text>
        <Text style={css.final}>{final}</Text>
    </View>        
    )
}

const css = StyleSheet.create({
    caixa: {
        width: "90%",
        margin: 20,
      backgroundColor: '#fff',
      borderRadius: 10,
      borderWidth: 1,
      borderColor: '#ddd',
      padding: 20,
      marginBottom: 0,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.2,
      shadowRadius: 3,
      elevation: 5,
    },
    agenda: {
        color: '#000',
        fontSize: 18,
    },
    inicio: {
        fontSize: 16,
        color: '#E51873',
        marginBottom: 5,
    },
    final: {
        fontSize: 16,
        color: '#E51873',
    }
  });