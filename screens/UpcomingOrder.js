import React from "react";
import { Text, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

const UpcomingOrder = () => {
    return (
        <LinearGradient
            colors={["#FF5B55", "#FF1161", "#FF5B55"]}
            start={{ x: 0, y: 1 }}
            end={{ x: 1, y: 0 }}
            style={{ flex: 1 }}
        >
            <View
                style={{
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "center",
                    backgroundColor: "white",
                    borderBottomLeftRadius: 30,
                    borderBottomRightRadius: 30,
                }}
            >
                <Text> textInComponent </Text>
            </View>
        </LinearGradient>
    );
};

export default UpcomingOrder;
