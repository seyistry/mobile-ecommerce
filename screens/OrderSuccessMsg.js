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
    TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import Button from "../components/button/secButton/Button";
import successLogo from "../assets/drawable-hdpi/successLogo.png";
import Home from "./Home";

const OrderSuccessMsg = () => {
    const navigation = useNavigation();
    const GotoHome = () => {
        navigation.navigate("Home");
    };
    return (
        <View style={styles.container}>
            <View style={styles.img}>
                <Image source={successLogo} />
            </View>
            <View style={[styles.containerTextA]}>
                <Text style={styles.textA}>Your Order</Text>
                <Text style={styles.textA}>Has Been Accepted</Text>
            </View>
            <View style={styles.containerTextB}>
                <Text style={styles.textB}>
                    Your items has been placcd and is on
                </Text>
                <Text style={styles.textB}>it’s way to being processed</Text>
            </View>
            <TouchableOpacity>
                <View style={styles.containerButton}>
                    <Button name="Track Order" />
                </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={GotoHome}>
                <Text style={[styles.textC, styles.containerTextB]}>
                    Back to home
                </Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white",
        alignItems: "center",
        justifyContent: "center",
    },
    img: {
        paddingRight: 30,
    },
    textA: {
        fontSize: 25,
        fontWeight: "bold",
        textAlign: "center",
    },
    containerTextA: {
        marginTop: 40,
    },
    textB: {
        fontSize: 17,
        color: "#8B98B4",
        textAlign: "center",
    },
    textC: {
        fontSize: 17,
        color: "#FF5B55",
        textTransform: "uppercase",
    },
    containerTextB: {
        marginTop: 20,
    },
    containerButton: {
        marginTop: 100,
    },
});

export default OrderSuccessMsg;
