import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image } from 'react-native';
import styles from './style';
import { Link } from 'expo-router';


const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    console.log('Email:', email);
    console.log('Senha:', password);
    
    if (!email || !password) {
        alert('Preencha todos os campos!');
        return;
    }
    
  };
  


  return (
    <View style={styles.container}>
        <Image style={styles.image} source={require("@/assets/images/mcdonalds-e-burger-king.png")}></Image>
      <Text style={styles.title}>Bem-vindo ao Bk Donalds!</Text>
      <Text style={styles.subtitle}>
        Faça login para acessar nossos lanches deliciosos.
      </Text>
      <TextInput
        style={styles.input}
        placeholder="Email"
        placeholderTextColor="#aaa"
        value={email}
        onChangeText={(text) => setEmail(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Senha"
        placeholderTextColor="#aaa"
        value={password}
        onChangeText={(text) => setPassword(text)}
        secureTextEntry
      />
      <Link href={"/home/page"} asChild>
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Entrar</Text>
      </TouchableOpacity>
      </Link>
      
    <Link href={"/cadastro/page"} style={styles.link} asChild>
      <TouchableOpacity style={styles.signupLink}>
        <Text style={styles.signupText}>Não tem uma conta? Cadastre-se</Text>
      </TouchableOpacity>
      </Link>
     
      
         
    </View>
  );
};

export default LoginScreen;

     
