import React from "react";
import { Text, View, Image } from "react-native";
import styles from "./styles.js";
import product from "../../../assets/drawable-hdpi/product.png";
import { Ionicons } from "@expo/vector-icons";

const Card = (props) => {
    const { id, title, image, price } = props;
    const titleB =
        `${title}`.length >= 20 ? `${title}`.slice(0, 15) + "..." : title;
    return (
        <View style={styles.cardContainer}>
            <View style={styles.imgContainer}>
                <Image
                    style={{ width: 150, height: 100, resizeMode: "contain" }}
                    source={{ uri: `${image}` }}
                />
            </View>
            <Text style={styles.productName}>{titleB}</Text>
            <View style={styles.priceCartContainer}>
                <Text style={styles.text}>${price.toFixed(2)}</Text>
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
};

export default Card;
