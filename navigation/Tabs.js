import React from "react";
import { View } from "react-native";
import { AntDesign, Ionicons, Feather, Entypo } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { LinearGradient } from "expo-linear-gradient";
import Home from "../screens/Home";
import Login from "../screens/Login";
import Profile from "../screens/Profile";

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

export default Tabs;
