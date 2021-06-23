import React from "react";
import { Text, View, StyleSheet } from "react-native";

const HeaderWithHr = (props) => (
    <View style={{ flexDirection: "row", alignItems: "center", marginBottom: 20 }}>
        <View style={styles.hr} />
        <View>
            <Text style={styles.text}>{props.name}</Text>
        </View>
        <View style={styles.hr} />
    </View>
);

const styles = StyleSheet.create({
    text: {
        margin: 20,
        color: "#FF4059",
        fontSize: 16,
        fontWeight: "bold",
        textTransform: "uppercase",
    },
    hr: {
        flex: 1,
        height: 1,
        backgroundColor: "#707070",
        maxWidth: 96,
        opacity: 0.1,
    },
});

export default HeaderWithHr;
