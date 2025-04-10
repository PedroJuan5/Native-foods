import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import styles from './style';
import { Link } from 'expo-router';

const RegistrationScreen = () => {
    const [cpf, setCpf] = useState('');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [birthDate, setBirthDate] = useState('');

    const handleRegister = () => {
        console.log('CPF:', cpf);
        console.log('Name:', name);
        console.log('Email:', email);
        console.log('Password:', password);
        console.log('Data do aniversario:', birthDate);
        // Adicione a lógica de registro aqui
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Crie sua Conta</Text>
            <Text style={styles.subtitle}>Entre para aproveitar nossos deliciosos lanches!</Text>
            <TextInput
                style={styles.input}
                placeholder="CPF"
                placeholderTextColor="#aaa"
                value={cpf}
                onChangeText={(text) => setCpf(text)}
            />
            <TextInput
                style={styles.input}
                placeholder="Nome"
                placeholderTextColor="#aaa"
                value={name}
                onChangeText={(text) => setName(text)}
            />
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
            <TextInput
                style={styles.input}
                placeholder="Data de Nascimento (DD/MM/AAAA)"
                placeholderTextColor="#aaa"
                value={birthDate}
                onChangeText={(text) => setBirthDate(text)}
            />

            <Link href={"/home/page"} asChild>
                <TouchableOpacity style={styles.button} onPress={handleRegister}>
                    <Text style={styles.buttonText}>Cadastrar</Text>
                </TouchableOpacity>
            </Link >
        </View>

    );
};

export default RegistrationScreen;
