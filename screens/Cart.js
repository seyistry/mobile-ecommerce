import React, { useState } from "react";
import {
    StyleSheet,
    Text,
    ScrollView,
    View,
    TouchableOpacity,
} from "react-native";
import { connect } from "react-redux";
import { AntDesign, Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";
import Card from "../components/card/cartCard/Card.js";

const Product = (props) => {
    const navigation = useNavigation();

    const GotoCheckouts = () => {
        navigation.navigate("Checkouts", { total: props.total.toFixed(2) });
    };

    return (
        <View style={styles.container}>
            {Object.keys(props.items).length < 1 ? (
                <View
                    style={[
                        styles.container,
                        {
                            justifyContent: "center",
                            alignItems: "center",
                        },
                    ]}
                >
                    <Text style={{ fontSize: 25 }}>Cart Empty!</Text>
                </View>
            ) : (
                <View style={styles.container}>
                    <ScrollView showsVerticalScrollIndicator={true}>
                        {props.itemsIds.map((id) => {
                            return <Card key={id} {...props.items[id]} />;
                        })}
                    </ScrollView>
                    <View style={{ alignItems: "center" }}>
                        <Text
                            style={{
                                fontSize: 17,
                                color: "#8B98B4",
                                marginTop: 10,
                            }}
                        >
                            TOTAL AMOUNT
                        </Text>
                        <Text style={{ fontSize: 26, marginTop: 5 }}>
                            ${props.total.toFixed(2)}
                        </Text>
                        <TouchableOpacity onPress={GotoCheckouts}>
                            <LinearGradient
                                // Button Linear Gradient
                                colors={["#FF5B55", "#FF5B55", "#FF1161"]}
                                start={{ x: 0, y: 0 }}
                                end={{ x: 1, y: 1 }}
                                style={styles.buttonContainer}
                            >
                                <Text style={styles.text}>CHECKOUT</Text>
                                <AntDesign
                                    name="arrowright"
                                    size={24}
                                    color="white"
                                />
                            </LinearGradient>
                        </TouchableOpacity>
                    </View>
                </View>
            )}
        </View>
    );
};

function mapStateToProps(state) {
    const items = state;
    const itemsIds = Object.keys(items).sort(
        (a, b) => items[a].timestamp - items[b].timestamp
    );

    let addItems = itemsIds.map((id) => items[id].price * items[id].quantity);

    let total = addItems.reduce((a, b) => a + b, 0);
    return {
        items,
        itemsIds,
        total,
    };
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        backgroundColor: "white",
        // justifyContent: "space-between",
    },
    buttonContainer: {
        marginVertical: 30,
        width: 181,
        height: 58,
        flexDirection: "row",
        borderRadius: 75,
        justifyContent: "center",
        alignItems: "center",
    },
    text: {
        color: "white",
        fontWeight: "bold",
        paddingRight: 10,
        textTransform: "uppercase",
    },
});

export default connect(mapStateToProps)(Product);
