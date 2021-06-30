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

const Product = () => {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <AntDesign name="arrowleft" size={24} color="black" />
                <AntDesign name="hearto" size={24} color="black" />
            </View>
            <View style={styles.imgContainer}>
                <Image source={product} style={styles.img} />
            </View>
            <View style={styles.nameRatePriceContainer}>
                <View style={styles.nameContainer}>
                    <Text style={styles.pname}>Product name</Text>
                    <View style={styles.rateContainer}>
                        <AntDesign name="staro" size={12} color="#FF5B55" />
                        <Text style={styles.rate}>4.5</Text>
                    </View>
                </View>
                <Text style={styles.price}>$1500</Text>
            </View>
            <View style={styles.reviewContainer}>
                <Text style={[styles.reviewTitle, { width: "29%" }]}>
                    Description
                </Text>
                <Text style={{ width: "25%" }}>Reviews</Text>
                <Text style={{ width: "23%" }}>Offers</Text>
                <Text style={{ width: "23%" }}>Policy</Text>
            </View>
            <ScrollView style={{ maxHeight: "25%" }}>
                <Text style={{ lineHeight: 26, color: "#707070" }}>
                    Minimalist Styling Is Not About Creating A Cold, Hard, Empty
                    White Box Of A Home. It Is About Using Simple And Natural
                    Forms, And Taking Away Layers Without Losing The Aesthetic
                    Appeal Of The Space.
                </Text>
            </ScrollView>
            <View style={styles.buttonContainer}>
                <LinearGradient
                    colors={["#FF5B55", "#FF5B55", "#FF1161"]}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 1 }}
                    style={[
                        styles.button,
                        {
                            width: 120,
                            height: 58,
                        },
                    ]}
                >
                    <AntDesign name="minuscircleo" size={24} color="white" />
                    <Text style={{ paddingHorizontal: 20, color: "white" }}>
                        1
                    </Text>
                    <AntDesign name="pluscircleo" size={24} color="white" />
                </LinearGradient>
                <LinearGradient
                    colors={["#FF5B55", "#FF5B55", "#FF1161"]}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 1 }}
                    style={[
                        styles.button,
                        {
                            width: 194,
                            height: 58,
                        },
                    ]}
                >
                    <Text style={{ color: "white" }}>Add to cart</Text>
                    <Ionicons name="ios-cart-outline" size={24} color="white" />
                </LinearGradient>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginHorizontal: 10,
        backgroundColor: "white",
    },
    header: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginVertical: 20,
    },
    imgContainer: {
        width: "100%",
        height: "40%",
    },
    img: {
        resizeMode: "cover",
        width: "100%",
        height: "100%",
    },
    nameRatePriceContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    pname: {
        fontSize: 20,
    },
    nameContainer: {
        flexDirection: "row",
        alignItems: "center",
    },
    rate: {
        marginLeft: 5,
        fontSize: 15,
    },
    rateContainer: {
        flexDirection: "row",
        marginLeft: 10,
        alignItems: "center",
        marginTop: 4,
    },
    price: {
        fontSize: 20,
        fontWeight: "bold",
        color: "#FF5B55",
    },
    reviewContainer: {
        flexDirection: "row",
        marginVertical: 10,
    },
    reviewTitle: {
        paddingRight: 10,
        color: "#FF5B55",
        borderBottomWidth: 2,
        borderColor: "#FF5B55",
        paddingBottom: 10,
    },
    buttonContainer: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    button: {
        flexDirection: "row",
        alignItems: "center",
        borderRadius: 75,
        justifyContent: "center",
    },
});

export default Product;
