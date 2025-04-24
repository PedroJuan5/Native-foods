import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import styles from './styles';

const ProductDetailPage = () => {
  const handleAddToCart = () => {
    console.log('Lanche adicionado ao carrinho');
    
  };

  export default function ProductScreen() {
    const { id } = useLocalSearchParams()
    const [produto, setProduto] = useState<ProdutoType>()
 
    function getProduto() {
        fetch(`http://localhost:3000/produto/${id}`)
        .then((res) => res.json())
        .then(data => setProduto(data))
    }
 
    useEffect(() => {
        getProduto()
    })
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={require("@/assets/images/bk.png")}></Image>

      <Text style={styles.title}>Hambúrguer lançamento!</Text>
      <Text style={styles.description}>
        Hambúrguer artesanal com carne suculenta, queijo cheddar, cebola e tomate para um sabor unico, alface fresca e molho caseiro unico.
      </Text>
      <Text style={styles.price}>R$ 42,90</Text>
      <TouchableOpacity style={styles.button} onPress={handleAddToCart}>
        <Text style={styles.buttonText}>Adicionar ao Carrinho</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ProductDetailPage;
