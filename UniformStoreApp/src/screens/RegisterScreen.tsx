import React from 'react';
import { View, Text, TextInput, Button, StyleSheet, Image, TouchableOpacity } from 'react-native';

export default function RegisterScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Image source={require('./images/foco-branco-2.png')} style={styles.logo} resizeMode="contain"/>
      <Text style={styles.title}>Registro</Text>
      <TextInput style={styles.input} placeholder="CPF/CNPJ" placeholderTextColor="#ccc" />
      <TextInput style={styles.input} placeholder="Email" placeholderTextColor="#ccc" />
      <TextInput style={styles.input} placeholder="Contato" placeholderTextColor="#ccc" />
      <TextInput style={styles.input} placeholder="Senha" placeholderTextColor="#ccc" secureTextEntry />
      
      <TouchableOpacity 
        style={styles.RegisterButton} 
        onPress={() => navigation.navigate('Login')}
      >
        <Text style={styles.registerButtonText}>Registre-se</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#545454',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  logo: {
    width: 100,
    height: 100,
    marginBottom: 20,
  },
  title: {
    color: 'white',
    fontSize: 24,
    marginBottom: 20,
  },
  input: {
    width: '100%',
    backgroundColor: '#666',
    borderRadius: 5,
    padding: 10,
    color: 'white',
    marginBottom: 15,
  },
  RegisterButton: {
    backgroundColor: '#f9957f',
    paddingVertical: 10,
    paddingHorizontal: 90,
    borderRadius: 5,
    marginBottom: 15,
  },
  registerButtonText: {
    color: 'white',
    fontSize: 18,
    textAlign: 'center',
  },
});

