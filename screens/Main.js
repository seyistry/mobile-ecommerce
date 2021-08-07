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
import { AntDesign, Ionicons, Feather, Entypo } from "@expo/vector-icons";
import { NavigationContainer } from "@react-navigation/native";
// import { BottomTabBar } from 'react-navigation-tabs';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "./Home";
import { LinearGradient } from "expo-linear-gradient";
import Product from "./Product";
import Login from "./Login";
import Cart from "./Cart";
import Checkouts from "./Checkouts";
import OrderSuccessMsg from "./OrderSuccessMsg";
import Profile from "./Profile";

const Main = () => {
    const Tab = createBottomTabNavigator();

    function Tabs() {
        return (
            <LinearGradient
                colors={["#FF5B55", "#FF1161", "#FF5B55"]}
                start={{ x: 0, y: 1 }}
                end={{ x: 1, y: 0 }}
                style={{ flex: 1 }}
            >
                <Tab.Navigator
                    screenOptions={({ route }) => ({
                        tabBarIcon: ({ focused, color, size }) => {
                            if (route.name === "Home") {
                                return (
                                    <View style={{ alignItems: "center" }}>
                                        <AntDesign
                                            name={"home"}
                                            size={size}
                                            color={color}
                                        />
                                        {focused ? (
                                            <Entypo
                                                name="dot-single"
                                                size={12}
                                                color="white"
                                            />
                                        ) : null}
                                    </View>
                                );
                            } else if (route.name === "Profile") {
                                return (
                                    <View style={{ alignItems: "center" }}>
                                        <Ionicons
                                            name={"person-outline"}
                                            size={size}
                                            color={color}
                                        />
                                        {focused ? (
                                            <Entypo
                                                name="dot-single"
                                                size={12}
                                                color="white"
                                            />
                                        ) : null}
                                    </View>
                                );
                            } else if (route.name === "Box") {
                                return (
                                    <View style={{ alignItems: "center" }}>
                                        <Feather
                                            name={"box"}
                                            size={size}
                                            color={color}
                                        />
                                        {focused ? (
                                            <Entypo
                                                name="dot-single"
                                                size={12}
                                                color="white"
                                            />
                                        ) : null}
                                    </View>
                                );
                            }
                        },
                    })}
                    tabBarOptions={{
                        activeTintColor: "white",
                        inactiveTintColor: "white",
                        // labelStyle: { fontSize: 12, fontWeight: "bold" },
                        // activeBackgroundColor: 'blue'
                        style: {
                            backgroundColor: "transparent",
                            elevation: 0, // for Android
                            shadowOffset: {
                                width: 0,
                                height: 0, // for iOS
                            },
                            borderTopWidth: 0,
                        },
                        showLabel: false,
                        keyboardHidesTabBar: true,
                    }}
                    sceneContainerStyle={
                        {
                            // backgroundColor: "yellow",
                        }
                    }
                    initialRouteName="Home"
                >
                    <Tab.Screen name="Box" component={Login} />
                    <Tab.Screen name="Home" component={Home} />
                    <Tab.Screen name="Profile" component={Profile} />
                </Tab.Navigator>
            </LinearGradient>
        );
    }

    const Stack = createStackNavigator();

    function MainNavigator() {
        return (
            <NavigationContainer>
                <Stack.Navigator>
                    <Stack.Screen
                        name="Home"
                        component={Tabs}
                        options={{ headerShown: false }}
                    />
                    <Stack.Screen
                        name="Product"
                        component={Product}
                        options={{ headerShown: false }}
                    />
                    <Stack.Screen
                        name="Your Cart"
                        component={Cart}
                        options={{
                            cardShadowEnabled: false,
                            headerTitleStyle: { color: "#8B98B4" },
                        }}
                    />
                </Stack.Navigator>
            </NavigationContainer>
        );
    }

    return <MainNavigator />;
};

export default Main;
