import * as React from 'react';
import { Text, View, StyleSheet, TextInput, Button, Alert} from 'react-native';
import Constants from 'expo-constants';

export default function iniciar() {
  return (
    <View style={styles.container}>

      <Text style={styles.paragraph}>

        Brincando e aprendendo!

      </Text>

      <TextInput
      
        style={styles.input}
        placeholder="Digite o seu email"
        
      />

      <TextInput
      
        style={styles.input}
        placeholder="Digite o seu email"
        
      />

      <Button
        title="Logar"
        //style={styles.botao}
        onPress={() => Alert.alert('teste1')}
        color="#ffba03"
      />

      <Button
        title="Cadastre-se"
        //style={styles.botao}
        onPress={() => Alert.alert('batata')}
        color="#e1a506"

      />

    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 2,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#4169E1',
    padding: 8,
  },
  paragraph: {
    margin: 20,
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#FFF',
  },

  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    backgroundColor: '#fff',
    borderRadius: 8,
    paddingLeft: 15,
    marginBottom: 20,
  },
  


  // botao: {

  //   flex: 2,
  //   marginTop: 20,
  //   justifyContent: 'center',
  //   marginTop:20,
  // }
});