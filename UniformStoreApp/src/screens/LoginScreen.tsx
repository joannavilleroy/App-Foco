import React from 'react';
import { View, Text, TextInput, Button, StyleSheet, Image, TouchableOpacity } from 'react-native';

export default function LoginScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Image source={require('./images/foco-branco.png')} style={styles.logo} resizeMode="contain"/>
      
      <TextInput style={styles.input} placeholder="Email ou CPF/CNPJ" placeholderTextColor="#ccc" />
      <TextInput style={styles.input} placeholder="Senha" placeholderTextColor="#ccc" secureTextEntry />
      
      <TouchableOpacity 
        style={styles.loginButton} 
        onPress={() => navigation.navigate('Orders')}
      >
        <Text style={styles.loginButtonText}>Login</Text>
      </TouchableOpacity>

      <View style={styles.registerContainer}>
        <Text style={styles.registerText}>Não possui conta?</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Register')}>
          <Text style={styles.registerLink}>Registre-se</Text>
        </TouchableOpacity>
      </View>
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
    width: 200,
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
  loginButton: {
    backgroundColor: '#f9957f',
    paddingVertical: 10,
    paddingHorizontal: 90,
    borderRadius: 5,
    marginBottom: 15,
  },
  loginButtonText: {
    color: 'white',
    fontSize: 18,
    textAlign: 'center',
  },
  registerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  registerText: {
    color: '#ccc',
    fontSize: 16,
  },
  registerLink: {
    color: '#f9957f',
    fontSize: 16,
    marginLeft: 5,
  },
});