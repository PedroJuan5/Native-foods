import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#ffe5b4', 
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#FF4500',
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
    elevation: 2, 
  },
  button: {
    width: '90%',
    height: 50,
    backgroundColor: '#FF4500',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    elevation: 3, // Sombra no botao
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default styles;
