import React from "react";
import { Text, View, Image, TouchableOpacity } from "react-native";
import styles from "./styles.js";
import { useNavigation } from "@react-navigation/native";
import { connect } from "react-redux";
// import product from "../../../assets/drawable-hdpi/product.png";
import { Ionicons } from "@expo/vector-icons";
import { addToCart } from "../../../actions/index.js";

const Card = (props) => {
    const navigation = useNavigation();

    const { id, title, image, price, description } = props;
    const titleAbbr =
        `${title}`.length >= 20 ? `${title}`.slice(0, 15) + "..." : title;

    const GotoProduct = () => {
        navigation.navigate("Product", {
            id,
            title,
            image,
            price,
            titleAbbr,
            description,
        });
    };

    const handleAddToCart = () => {
        const timestamp = Date.now();
        props.dispatch(
            addToCart({
                id,
                title: titleAbbr,
                image,
                price: price.toFixed(2),
                timestamp,
                quantity: 1,
            })
        );
    };

    return (
        <View style={styles.cardContainer}>
            <TouchableOpacity style={styles.imgContainer} onPress={GotoProduct}>
                <Image
                    style={{
                        width: "100%",
                        height: "100%",
                        resizeMode: "contain",
                    }}
                    source={{ uri: `${image}` }}
                />
            </TouchableOpacity>
            <TouchableOpacity onPress={GotoProduct}>
                <Text style={styles.productName}>{titleAbbr}</Text>
            </TouchableOpacity>
            <View style={styles.priceCartContainer}>
                <Text style={styles.text}>
                    ${price !== undefined ? price.toFixed(2) : ""}
                </Text>
                <TouchableOpacity
                    onPress={handleAddToCart}
                    style={styles.cartContainer}
                >
                    <Ionicons
                        name="ios-cart-outline"
                        size={13}
                        color="#FF5B55"
                    />
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default connect()(Card);
