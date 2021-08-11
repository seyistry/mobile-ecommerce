import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Stacks  from "./Stacks";

const Drawer = createDrawerNavigator();

function Drawers() {
    return (
        <Drawer.Navigator>
            <Drawer.Screen name="Home" component={Stacks} />
        </Drawer.Navigator>
    );
}

export default Drawers;
