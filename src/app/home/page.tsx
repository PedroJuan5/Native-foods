import { Image, ImageSourcePropType, ScrollView, StyleSheet, Text, Touchable, TouchableOpacity, View } from "react-native";
import { styles } from "./style"
import { Link } from "expo-router";
import { useEffect, useState } from "react"

export type ProdutoType = {
    id: number,
    name: string,
    price: number,
    description: string,
    imgUrl: ImageSourcePropType,
    ingredients: string,
}
 
export default function Index() {
 
    const [produtos, setProdutos] = useState<ProdutoType[]>()
 
    function fetchProdutos(){
        fetch("http://localhost:3000/produto")
        .then((response) => response.json())
        .then(data => setProdutos(data))
    }
 
    useEffect(() => {
        fetchProdutos()
    }, [])

    return(
        <View style={styles.container}>
            <View style={styles.header}>
                <Image style={styles.headerImage} source={require("@/assets/images/header.png")}/>
               <Text style={styles.restaurantName}>King BK Donalds</Text>
               <Text style={styles.subtitle}>Os Melhores Lanches que você encontra na região!</Text>
           </View>
           
           <View style={styles.tabs}>
            {["Combos", "Lanches", "Fritas", "Bebidas"].map((item) =>(
                <TouchableOpacity>
                    <Text style={styles.tabsNome}>{item}</Text>
                </TouchableOpacity>
            ))}
           </View>

           <ScrollView>
                {
                    produtos?.map((item) => (
                        <Link href={`/produto/${item.id}`} asChild key={item.id}>
                            <TouchableOpacity style={styles.menuItem}>
                                <View style={styles.menuContent}>
                                    <Text style={styles.itemName}>{item.name}</Text>
                                    <Text style={styles.itemDescription}>{item.description}</Text>
                                    <Text style={styles.itemPrice}>R$ {item.price}</Text>
                                </View>
                                <Image style={styles.itemImage} source={item.imgUrl} />
                            </TouchableOpacity>
                        </Link>
                    ))
                }
            </ScrollView>
        </View>

   )
}
       

 