import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#ffefd5', // coloquei um fundo com tom pastel remetendo à temática de lanches
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#FF4500', 
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: '#333',
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    width: '90%',
    height: 50,
    borderWidth: 1,
    borderColor: '#FF4500', 
    borderRadius: 8,
    paddingHorizontal: 15,
    marginBottom: 15,
    backgroundColor: '#fff',
    elevation: 2, // Sombra leve nos campos
  },
  button: {
    width: '90%',
    height: 50,
    backgroundColor: '#FF4500',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    elevation: 3, // Sombra no botão
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  signupLink: {
    marginTop: 15,
  },
  signupText: {
    color: '#007BFF', 
    fontSize: 16,
    textDecorationLine: 'underline',
  },
  link: {
    height: 50,
  },
  image: {
    width:250,
    height: 150    
  }
});

export default styles;
