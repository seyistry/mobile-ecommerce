import React from "react";
import {
    View,
    Text,
    StyleSheet,
    Image,
    TouchableOpacity,
    ImageBackground,
} from "react-native";
import bg from "../assets/drawable-hdpi/Splash.png";
import { Ionicons, AntDesign, Feather } from "@expo/vector-icons";
import { NavigationContainer } from "@react-navigation/native";
import {
    createDrawerNavigator,
    DrawerContentScrollView,
    DrawerItemList,
    DrawerItem,
} from "@react-navigation/drawer";

import Stacks from "./Stacks";

const Drawer = createDrawerNavigator();

function CustomDrawerContent({ navigation }) {
    const image = `https://i.pravatar.cc/150?img=12`;
    return (
        <View style={{ marginLeft: 30 }}>
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
                    fontSize: 19,
                    marginTop: 20,
                    fontWeight: "bold",
                }}
            >
                John Doe
            </Text>
            <Text
                style={{
                    color: "white",
                    fontSize: 15,
                    fontWeight: "100",
                }}
            >
                johndoe@gmail.com
            </Text>
            <View
                style={{
                    width: 227,
                    borderWidth: 0.3,
                    borderColor: "white",
                    marginVertical: 30,
                }}
            />
            <View style={[styles.drawerLinkContainer]}>
                <AntDesign name={"home"} size={22} color={"white"} />
                <TouchableOpacity
                    onPress={() => {
                        navigation.navigate("Home");
                    }}
                >
                    <Text style={[styles.text]}>Home</Text>
                </TouchableOpacity>
            </View>
            <View style={[styles.drawerLinkContainer]}>
                <Ionicons name="ios-cart-outline" size={22} color={"white"} />
                <TouchableOpacity
                    onPress={() => {
                        navigation.navigate("Your Cart");
                    }}
                >
                    <Text style={[styles.text]}>My Cart</Text>
                </TouchableOpacity>
            </View>
            <View style={[styles.drawerLinkContainer]}>
                <Feather name={"box"} size={22} color={"white"} />
                <TouchableOpacity>
                    <Text style={[styles.text]}>Upcoming Orders </Text>
                </TouchableOpacity>
            </View>
            <View style={[styles.drawerLinkContainer]}>
                <Ionicons name={"gift-outline"} size={22} color={"white"} />
                <TouchableOpacity>
                    <Text style={[styles.text]}>Offer Zone </Text>
                </TouchableOpacity>
            </View>
            <View style={[styles.drawerLinkContainer]}>
                <Ionicons name={"person-outline"} size={22} color={"white"} />
                <TouchableOpacity
                    onPress={() => {
                        navigation.navigate("Profile");
                    }}
                >
                    <Text style={[styles.text]}>My Account</Text>
                </TouchableOpacity>
            </View>
            <View style={[styles.drawerLinkContainer]}>
                <Feather name="message-circle" size={22} color={"white"} />
                <TouchableOpacity>
                    <Text style={[styles.text]}>My Chats</Text>
                </TouchableOpacity>
            </View>
            <View style={[styles.drawerLinkContainer]}>
                <Ionicons
                    name={"ios-help-circle-outline"}
                    size={22}
                    color={"white"}
                />
                <TouchableOpacity>
                    <Text style={[styles.text]}>Help</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    img: {
        width: 85,
        height: 85,
        marginTop: 60,
        borderRadius: 85 / 2,
        overflow: "hidden",
        borderColor: "white",
        borderWidth: 2,
    },
    drawerLinkContainer: {
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 30,
    },
    text: {
        fontSize: 16,
        color: "white",
        marginLeft: 20,
    },
    bg: {
        flex: 1,
        resizeMode: "cover",
    },
});

function Drawers() {
    return (
        <ImageBackground source={bg} style={styles.bg}>
            <Drawer.Navigator
                drawerType="slide"
                drawerStyle={{
                    backgroundColor: "transparent",
                    width: 315,
                }}
                drawerContent={(props) => <CustomDrawerContent {...props} />}
                overlayColor="transparent"
            >
                <Drawer.Screen name="Home" component={Stacks} />
            </Drawer.Navigator>
        </ImageBackground>
    );
}

export default Drawers;
