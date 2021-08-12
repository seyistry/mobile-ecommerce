import React, { useState } from "react";
import {
    StyleSheet,
    Text,
    ScrollView,
    View,
    ImageBackground,
    Image,
    TouchableOpacity,
    SafeAreaView,
    Touchable,
} from "react-native";
import { connect } from "react-redux";
import { useRoute, useNavigation } from "@react-navigation/native";
import { AntDesign, Ionicons } from "@expo/vector-icons";
// import product from "../assets/drawable-hdpi/product.png";
import { LinearGradient } from "expo-linear-gradient";
import { addToCart } from "../actions/index";

const Product = (props) => {
    const [quantity, setSetQuantity] = useState(1);
    const route = useRoute();
    const navigation = useNavigation();
    const { id, titleAbbr, image, price, description } = route.params;

    const quantityIncrement = () => {
        setSetQuantity(quantity + 1);
    };
    const quantityDecrement = () => {
        setSetQuantity(quantity < 2 ? 1 : quantity - 1);
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
                quantity,
            })
        );
        navigation.navigate("Home");
    };

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <AntDesign name="arrowleft" size={24} color="black" />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <AntDesign name="hearto" size={24} color="black" />
                </TouchableOpacity>
            </View>
            <View style={[styles.imgContainer]}>
                <Image
                    source={{ uri: `${image}` }}
                    style={[
                        styles.img,
                        {
                            resizeMode: "contain",
                            width: "100%",
                            height: "100%",
                        },
                    ]}
                />
            </View>
            <View style={styles.nameRatePriceContainer}>
                <View style={styles.nameContainer}>
                    <Text style={styles.pname}>{titleAbbr}</Text>
                    <View style={styles.rateContainer}>
                        <AntDesign name="staro" size={12} color="#FF5B55" />
                        <Text style={styles.rate}>4.5</Text>
                    </View>
                </View>
                <Text style={styles.price}>${price.toFixed(2)}</Text>
            </View>
            <View style={styles.reviewContainer}>
                <Text style={[styles.reviewTitle, { width: "29%" }]}>
                    Description
                </Text>
                <Text style={{ width: "25%" }}>Reviews</Text>
                <Text style={{ width: "23%" }}>Offers</Text>
                <Text style={{ width: "23%" }}>Policy</Text>
            </View>
            <View
                style={{
                    flexDirection: "row",
                    alignItems: "center",
                    marginBottom: 10,
                }}
            >
                <View
                    style={{
                        width: "25%",
                        borderWidth: 1.5,
                        borderColor: "#FF5B55",
                    }}
                ></View>
                <View
                    style={{
                        width: "71%",
                        borderWidth: 0.5,
                        opacity: 0.1,
                        borderColor: "#707070",
                    }}
                ></View>
            </View>

            <ScrollView style={{ maxHeight: "25%" }}>
                <Text style={{ lineHeight: 26, color: "#707070" }}>
                    {description}
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
                    <TouchableOpacity onPress={quantityDecrement}>
                        <AntDesign
                            name="minuscircleo"
                            size={24}
                            color="white"
                        />
                    </TouchableOpacity>
                    <Text style={{ paddingHorizontal: 20, color: "white" }}>
                        {quantity}
                    </Text>
                    <TouchableOpacity onPress={quantityIncrement}>
                        <AntDesign name="pluscircleo" size={24} color="white" />
                    </TouchableOpacity>
                </LinearGradient>
                <TouchableOpacity onPress={handleAddToCart}>
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
                        <Ionicons
                            name="ios-cart-outline"
                            size={24}
                            color="white"
                        />
                    </LinearGradient>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 10,
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
        marginBottom: 20,
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
        marginRight: 10,
        color: "#FF5B55",
        // borderBottomWidth: 2,
        // borderColor: "#FF5B55",
        // paddingBottom: 10,
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

export default connect()(Product);
