import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Tabs from "./Tabs";
import Product from "../screens/Product";
import Cart from "../screens/Cart";
import Home from "../screens/Home";
import Login from "../screens/Login";
import Checkouts from "../screens/Checkouts";
import OrderSuccessMsg from "../screens/OrderSuccessMsg";
import Profile from "../screens/Profile";

const Stack = createStackNavigator();

function Stacks() {
    return (
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
            <Stack.Screen
                name="Checkouts"
                component={Checkouts}
                options={{
                    cardShadowEnabled: false,
                    headerTitleStyle: { color: "#8B98B4" },
                }}
            />
            <Stack.Screen
                name="OrderSuccessMsg"
                component={OrderSuccessMsg}
                options={{
                    cardShadowEnabled: false,
                    headerTitleStyle: { color: "#8B98B4" },
                    headerShown: false,
                }}
            />
        </Stack.Navigator>
    );
}

export default Stacks;
