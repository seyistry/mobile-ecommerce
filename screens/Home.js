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
    TextInput,
} from "react-native";
import { Ionicons, AntDesign } from "@expo/vector-icons";
import Card from "../components/card/Card";
import { LinearGradient } from "expo-linear-gradient";

const Home = () => {
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
                    borderBottomLeftRadius: 35,
                    borderBottomRightRadius: 35,
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
                        <Ionicons
                            name="ios-cart-outline"
                            size={24}
                            color="black"
                            style={{ paddingLeft: 10, paddingRight: 10 }}
                        />
                    </View>
                </View>
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
                                width: "75%",
                                marginLeft: 10,
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
                                marginRight: 10,
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
                <View style={styles.row}>
                    <Card />
                </View>
                <View style={styles.title}>
                    <Text style={styles.text}>popular categories</Text>
                    <View style={styles.hr} />
                    <Text style={{ color: "#FF5B55" }}>See All</Text>
                </View>
                <View style={styles.row}>
                    <View style={styles.categoriesText}>
                        <Text>All</Text>
                    </View>
                    <View style={styles.categoriesText}>
                        <Text>Electronics And Appliances</Text>
                    </View>
                </View>
                <View style={styles.row}>
                    <Card />
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
        // justifyContent: "center",
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
        marginHorizontal: 10,
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
        marginLeft: 10,
        paddingVertical: 10,
        paddingHorizontal: 20,
        backgroundColor: "#F7F7F8",
        borderRadius: 75,
        fontSize: 14,
        marginTop: 10,
    },
});

export default Home;
