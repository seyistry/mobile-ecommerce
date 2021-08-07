import React, { useState } from "react";
import {
    StyleSheet,
    Text,
    ScrollView,
    View,
    TouchableOpacity,
    ImageBackground,
    Image,
    Animated,
    SafeAreaView,
} from "react-native";
import { connect } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import { AntDesign, Feather } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import bg from "../assets/drawable-hdpi/Splash.png";

const Profile = (props) => {
    const navigation = useNavigation();
    const image = `https://i.pravatar.cc/150?img=12`;
    return (
        <ImageBackground source={bg} style={styles.bg}>
            <View style={styles.container}>
                <View style={styles.header}>
                    <View
                        style={{
                            flexDirection: "row",
                            alignItems: "center",
                        }}
                    >
                        <TouchableOpacity onPress={() => navigation.goBack()}>
                            <AntDesign
                                name="arrowleft"
                                size={24}
                                color="white"
                            />
                        </TouchableOpacity>
                        <View>
                            <Text
                                style={{
                                    fontSize: 18,
                                    color: "white",
                                    marginLeft: 20,
                                }}
                            >
                                My Account
                            </Text>
                        </View>
                    </View>
                    <TouchableOpacity
                        onPress={() => navigation.goBack()}
                        style={{
                            width: 76,
                            height: 26,
                            borderRadius: 32,
                            backgroundColor: "white",
                            justifyContent: "center",
                            alignItems: "center",
                        }}
                    >
                        <Text style={{ color: "#FF395A", fontSize: 10 }}>
                            Edit Profile
                        </Text>
                    </TouchableOpacity>
                </View>
                <View style={{ flex: 1 }}>
                    <View
                        style={{
                            height: "40%",
                            justifyContent: "center",
                            alignItems: "center",
                        }}
                    >
                        <View style={[styles.img]}>
                            <Image
                                style={{
                                    width: "100%",
                                    height: "100%",
                                    resizeMode: "contain",
                                }}
                                source={{ uri: `${image}` }}
                            />
                        </View>
                        <Text
                            style={{
                                color: "white",
                                fontSize: 23,
                                marginTop: 20,
                                fontWeight: "bold",
                            }}
                        >
                            John Doe
                        </Text>
                        <Text
                            style={{
                                color: "white",
                                fontSize: 17,
                                fontWeight: "100",
                            }}
                        >
                            johndoe@gmail.com
                        </Text>
                    </View>
                    <LinearGradient
                        colors={["#FF1161", "#FF1161", "#FF5B55", "#FF5B55"]}
                        start={{ x: 1, y: 0 }}
                        end={{ x: 0, y: 1 }}
                        style={{
                            flex: 1,
                            borderTopLeftRadius: 30,
                            borderTopRightRadius: 30,
                        }}
                    >
                        <View
                            style={{
                                flex: 1,
                                backgroundColor: "white",
                                borderRadius: 30,
                                alignItems: "center",
                                justifyContent: "center",
                            }}
                        >
                            <TouchableOpacity style={[styles.box]}>
                                <Feather
                                    name="truck"
                                    size={24}
                                    color="#8B98B4"
                                    style={[styles.right]}
                                />
                                <Text style={[styles.right, { fontSize: 16 }]}>
                                    Upcoming Orders
                                </Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={[styles.box]}>
                                <Feather
                                    name="map-pin"
                                    size={24}
                                    color="#8B98B4"
                                    style={[styles.right]}
                                />
                                <Text style={[styles.right, { fontSize: 16 }]}>
                                    Manage Address
                                </Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={[styles.box]}>
                                <Feather
                                    name="credit-card"
                                    size={24}
                                    color="#8B98B4"
                                    style={[styles.right]}
                                />
                                <Text style={[styles.right, { fontSize: 16 }]}>
                                    Update payment
                                </Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={[styles.box]}>
                                <Feather
                                    name="message-circle"
                                    size={24}
                                    color="#8B98B4"
                                    style={[styles.right]}
                                />
                                <Text style={[styles.right, { fontSize: 16 }]}>
                                    My Chats
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </LinearGradient>
                </View>
            </View>
        </ImageBackground>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    bg: {
        flex: 1,
        resizeMode: "cover",
        //
    },
    header: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginVertical: 20,
        marginHorizontal: 10,
    },
    img: {
        width: 110,
        height: 110,
        borderRadius: 110 / 2,
        overflow: "hidden",
        borderColor: "white",
        borderWidth: 2,
    },
    box: {
        width: 314,
        height: 70,
        backgroundColor: "#FBFBFB",
        marginBottom: 10,
        borderRadius: 10,
        flexDirection: "row",
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 0.8,
    },
    right: {
        marginLeft: 20,
    },
});

export default Profile;
