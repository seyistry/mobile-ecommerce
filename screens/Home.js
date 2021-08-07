import React, { useState, useEffect } from "react";
import {
    StyleSheet,
    Text,
    ScrollView,
    View,
    ImageBackground,
    Image,
    Animated,
    TouchableOpacity,
    TextInput,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Ionicons, AntDesign } from "@expo/vector-icons";
import Card from "../components/card/productCard/Card";
import { LinearGradient } from "expo-linear-gradient";
import * as ProductApi from "../utils/api";
import AppLoading from "expo-app-loading";

const getRandomInt = () => {
    return Math.floor(Math.random() * (19 - 0) + 1);
};

const fiveRandom = () => {
    let arr = [];
    while (arr.length < 5) {
        const random = getRandomInt();
        if (!arr.includes(random)) {
            arr.push(random);
        }
    }
    return arr;
};

const arr = fiveRandom();

const Home = () => {
    const [ready, setReady] = useState(false);
    const [products, setProducts] = useState([]);
    const [categories, SetCategories] = useState([]);
    const [filterCategories, SetFilterCategories] = useState("All");

    const navigation = useNavigation();

    const GotoCart = () => {
        navigation.navigate("Your Cart");
    };

    useEffect(() => {
        try {
            fetch("https://fakestoreapi.com/products")
                .then((res) => res.json())
                .then((data) => setProducts(data));
        } catch (e) {
            console.log(e);
        }
        try {
            fetch("https://fakestoreapi.com/products/categories")
                .then((res) => res.json())
                .then((data) => SetCategories(data));
        } catch (e) {
            console.log(e);
        }
    }, []);

    if (!ready) {
        return (
            <AppLoading
                startAsync={ProductApi.getProducts}
                onFinish={() => setReady(true)}
                onError={console.warn}
            />
        );
    }

    return (
        <LinearGradient
            colors={["#FF5B55", "#FF1161", "#FF5B55"]}
            start={{ x: 0, y: 1 }}
            end={{ x: 1, y: 0 }}
            style={{ flex: 1 }}
        >
            <View
                style={{
                    backgroundColor: "white",
                    flex: 1,
                    borderBottomLeftRadius: 30,
                    borderBottomRightRadius: 30,
                }}
            >
                <View style={styles.boxWithShadow}>
                    <View style={{ paddingLeft: 10 }}>
                        <Ionicons
                            name="ios-menu-outline"
                            size={24}
                            color="black"
                        />
                    </View>
                    <View style={{ flexDirection: "row" }}>
                        <Ionicons
                            name="notifications-outline"
                            size={24}
                            color="black"
                        />
                        <TouchableOpacity onPress={GotoCart}>
                            <Ionicons
                                name="ios-cart-outline"
                                size={24}
                                color="black"
                                style={{ paddingLeft: 10, paddingRight: 10 }}
                            />
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={{ marginHorizontal: 10 }}>
                    <View
                        style={{
                            height: 40,
                            marginVertical: 10,
                            flexDirection: "row",
                        }}
                    >
                        <View
                            style={[
                                styles.searchFilter,
                                {
                                    paddingLeft: 10,
                                    flex: 1,
                                    flexDirection: "row",
                                    alignItems: "center",
                                },
                            ]}
                        >
                            <Ionicons
                                name="search-outline"
                                size={24}
                                color="black"
                            />
                            <TextInput
                                style={{ paddingLeft: 10, width: "80%" }}
                                placeholder="Search"
                            />
                        </View>
                        <View
                            style={[
                                styles.searchFilter,
                                {
                                    width: 40,
                                    marginLeft: 10,
                                    // marginRight: 10,
                                    alignItems: "center",
                                    justifyContent: "center",
                                },
                            ]}
                        >
                            <AntDesign name="filter" size={20} color="black" />
                        </View>
                    </View>
                    <View style={styles.title}>
                        <Text style={styles.text}>Trending products</Text>
                        <View style={styles.hr} />
                        <Text style={{ color: "#FF5B55" }}>See All</Text>
                    </View>
                    <ScrollView
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        contentContainerStyle={[{ marginVertical: 10 }]}
                    >
                        {arr.map((arr) => {
                            const product = products[arr];
                            return (
                                <View key={arr} style={{ marginRight: 10 }}>
                                    <Card {...product} />
                                </View>
                            );
                        })}
                    </ScrollView>
                    <View style={styles.title}>
                        <Text style={styles.text}>popular categories</Text>
                        <View style={styles.hr} />
                        <Text style={{ color: "#FF5B55" }}>See All</Text>
                    </View>
                    <ScrollView
                        horizontal
                        showsHorizontalScrollIndicator={false}
                    >
                        {filterCategories === "All" ? (
                            <LinearGradient
                                colors={["#FF5B55", "#FF1161", "#FF5B55"]}
                                start={{ x: 0, y: 1 }}
                                end={{ x: 1, y: 0 }}
                                style={styles.categoriesText}
                            >
                                <Text style={{ color: "white" }}>All</Text>
                            </LinearGradient>
                        ) : (
                            <TouchableOpacity
                                style={styles.categoriesText}
                                onPress={() => SetFilterCategories("All")}
                            >
                                <Text>All</Text>
                            </TouchableOpacity>
                        )}
                        {categories.map((category) => {
                            // console.log(category);
                            return filterCategories === category ? (
                                <LinearGradient
                                    colors={["#FF5B55", "#FF1161", "#FF5B55"]}
                                    start={{ x: 0, y: 1 }}
                                    end={{ x: 1, y: 0 }}
                                    style={styles.categoriesText}
                                    key={category}
                                >
                                    <Text style={{ color: "white" }}>
                                        {category}
                                    </Text>
                                </LinearGradient>
                            ) : (
                                <TouchableOpacity
                                    key={category}
                                    style={styles.categoriesText}
                                    onPress={() =>
                                        SetFilterCategories(category)
                                    }
                                >
                                    <Text
                                        style={{
                                            textTransform: "capitalize",
                                        }}
                                    >
                                        {category}
                                    </Text>
                                </TouchableOpacity>
                            );
                        })}
                    </ScrollView>
                    <ScrollView
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        contentContainerStyle={[{ marginVertical: 10 }]}
                    >
                        {products.map((product) => (
                            <View key={product.id} style={{ marginRight: 10 }}>
                                <Card {...product} />
                            </View>
                        ))}
                    </ScrollView>
                </View>
            </View>
        </LinearGradient>
    );
};

const styles = StyleSheet.create({
    boxWithShadow: {
        height: 60,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: "white",
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 5,
    },
    searchFilter: {
        backgroundColor: "#F7F7F8",
        borderRadius: 4,
    },
    hr: {
        flex: 1,
        height: 1,
        backgroundColor: "#707070",
        marginHorizontal: 10,
        opacity: 0.1,
    },
    title: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
    },
    text: {
        textTransform: "uppercase",
        fontWeight: "bold",
        fontSize: 14,
    },
    row: {
        flexDirection: "row",
    },
    categoriesText: {
        marginRight: 10,
        paddingVertical: 10,
        paddingHorizontal: 20,
        backgroundColor: "#F7F7F8",
        borderRadius: 75,
        fontSize: 14,
        marginTop: 10,
    },
});

export default Home;
