import { Image, ScrollView, StyleSheet, Text, Touchable, TouchableOpacity, View } from "react-native";
import { styles } from "./style"
import { Link } from "expo-router";



export default function Index() {
    const MENU = [
        {
            id: 1,
            name: "Big Tasty", // Faltando virgula
            description:"Três Hamburgues (100% carne bovina), alface,tomate, molho especial...",
            price: 42.90,
            image: require("@/assets/images/bk.png")
        },
        {
            id: 2,
            name: "Chicken Bacon Catupiry",
            description:"Dois Hamburgues (100% carne bovina), queijo, onion",
            price: 39.90,
            image: require("@/assets/images/costela.png")
        },
        {
            id: 3,
            name: "Mc Chicken",
            description:"Um pedaço de Frango (100% carne De Frango), maionese, alface...",
            price: 32.50,
            image: require("@/assets/images/chicken.png")
        }

    ]
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

            <ScrollView style= {styles.menuList}>
           {
            MENU.map((item) => (
                <Link href= {"/produto/page"} asChild>
                <TouchableOpacity style= {styles.menuItem}>
            <View style={styles.menuContent}>
                <Text style={styles.itemName}>{item.name}</Text>
                <Text style={styles.itemDescription}>{item.description}</Text>
                <Text style={styles.itemPrice}>{item.price.toFixed(2)}</Text>
                </View>         
                <Image style={styles.itemImage} source={item.image}></Image>
                </TouchableOpacity>
                </Link>
            ))
           }
           </ScrollView>
        </View>

   )
}
       

 