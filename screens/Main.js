import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import Drawers from "../navigation/Drawers";

const Main = () => {
    return (
        <NavigationContainer>
            <Drawers />
        </NavigationContainer>
    );
};

export default Main;