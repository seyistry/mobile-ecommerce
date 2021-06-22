import React from "react";
import { Text, View } from "react-native";
import styles from './styles.js'

const Button = (props) => (
    <View style={styles.buttonContainer}>
        <Text style={styles.text}>{props.name}</Text>
    </View>
);


export default Button;
