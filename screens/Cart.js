import React from "react";
import {
    StyleSheet,
    Text,
    ScrollView,
    View,
    ImageBackground,
    Image,
    Animated,
    SafeAreaView,
} from "react-native";
import { AntDesign, Ionicons } from "@expo/vector-icons";
import product from "../assets/drawable-hdpi/product.png";
import { LinearGradient } from "expo-linear-gradient";
import Card from "../components/card/cartCard/Card.js";
import Button from "../components/button/secButton/Button";

const Product = () => {
    return (
        <View style={styles.container}>
            <Card />
            <View style={{ alignItems: "center" }}>
                <Text style={{ color: "#8B98B4" }}>TOTAL AMOUNT</Text>
                <Text style={{ fontSize: 26, marginTop: 5 }}>$1700.00</Text>
                <LinearGradient
                    // Button Linear Gradient
                    colors={["#FF5B55", "#FF5B55", "#FF1161"]}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 1 }}
                    style={styles.buttonContainer}
                >
                    <Text style={styles.text}>CHECKOUT</Text>
                    <AntDesign name="arrowright" size={24} color="white" />
                </LinearGradient>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        backgroundColor: "white",
        justifyContent: "space-between",
    },
    buttonContainer: {
        marginVertical: 30,
        width: 181,
        height: 58,
        flexDirection: "row",
        borderRadius: 75,
        justifyContent: "center",
        alignItems: "center",
    },
    text: {
        color: "white",
        fontWeight: "bold",
        paddingRight: 10,
        textTransform: 'uppercase',
    },
});

export default Product;
