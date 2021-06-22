import React from "react";
import { Text, View } from "react-native";
import styles from "./styles.js";
import { LinearGradient } from "expo-linear-gradient";

const Button = (props) => (
    <View >
        <LinearGradient
            // Button Linear Gradient
            colors={["#FF5B55", "#FF5B55", "#FF1161"]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            style={styles.buttonContainer}
        >
            <Text style={styles.text}>{props.name}</Text>
        </LinearGradient>
    </View>
);

export default Button;
