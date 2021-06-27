import React from "react";
import { Text, View, Image } from "react-native";
import styles from "./styles.js";
import product from "../../assets/drawable-hdpi/product.png";
import { Ionicons } from "@expo/vector-icons";

const Card = (props) => (
    <View style={styles.cardContainer}>
        <View style={styles.imgContainer}>
            <Image source={product} style={styles.img} />
        </View>
        <Text style={styles.productName}>product Name</Text>
        <View style={styles.priceCartContainer}>
            <Text style={styles.text}>$1000</Text>
            <View style={styles.cartContainer}>
                <Ionicons
                    name="ios-cart-outline"
                    size={13}
                    color="#FF5B55"
                />
            </View>
        </View>
    </View>
);

export default Card;
