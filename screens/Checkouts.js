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
import { useRoute, useNavigation } from "@react-navigation/native";
import { AntDesign, Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import FormInput from "../components/input/FormInput.js";

const Checkout = () => {
    const route = useRoute();
    const navigation = useNavigation();

    const GotoSuccess = () => {
        navigation.navigate("OrderSuccessMsg");
    };

    const { total } = route.params;
    return (
        <ScrollView style={{ flex: 1, backgroundColor: "white", padding: 10 }}>
            <Text style={styles.title}>Shipping Address</Text>
            <View style={{ marginTop: 10 }}>
                <FormInput name="Name" />
            </View>
            <View style={{ marginTop: 10 }}>
                <FormInput name="Address" />
            </View>
            <View style={{ marginTop: 10 }}>
                <FormInput name="Zip Code" />
            </View>
            <Text style={styles.title}>Payment Method</Text>
            <View
                style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    marginTop: 20,
                }}
            >
                <Text style={[styles.text, styles.active]}>Debit Card</Text>
                <Text style={styles.text}>Credit Card</Text>
                <Text style={styles.text}>Paypal</Text>
                <Text style={styles.text}>Net Banking</Text>
            </View>
            <View style={{ marginTop: 10 }}>
                <FormInput name="Name on Card" />
            </View>
            <View style={{ marginTop: 10 }}>
                <FormInput name="Card Number" />
            </View>
            <View style={{ marginTop: 10, flexDirection: "row" }}>
                <View style={{ width: "50%", paddingRight: 5 }}>
                    <FormInput name="Exp date" />
                </View>
                <View style={{ width: "50%", paddingLeft: 5 }}>
                    <FormInput name="CVV" />
                </View>
            </View>
            <View
                style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    marginVertical: 30,
                    backgroundColor: "white",
                }}
            >
                <View>
                    <Text style={{ fontSize: 17, color: "#8B98B4" }}>
                        TOTAL AMOUNT
                    </Text>
                    <View style={{ alignItems: "center" }}>
                        <Text style={{ fontSize: 20, paddingTop: 5 }}>
                            {total}
                        </Text>
                    </View>
                </View>
                <TouchableOpacity onPress={GotoSuccess}>
                    <LinearGradient
                        colors={["#FF5B55", "#FF5B55", "#FF1161"]}
                        start={{ x: 0, y: 0 }}
                        end={{ x: 1, y: 1 }}
                        style={styles.buttonContainer}
                    >
                        <Text style={styles.orderText}>Place order</Text>
                        <AntDesign name="arrowright" size={24} color="white" />
                    </LinearGradient>
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    buttonContainer: {
        width: 201,
        height: 58,
        flexDirection: "row",
        borderRadius: 75,
        justifyContent: "center",
        alignItems: "center",
    },
    title: {
        fontSize: 20,
        fontWeight: "bold",
        marginTop: 20,
    },
    orderText: {
        color: "white",
        fontWeight: "bold",
        paddingRight: 10,
        textTransform: "uppercase",
    },
    active: {
        color: "#FF5B55",
        borderBottomWidth: 2,
        borderColor: "#FF5B55",
    },
    text: {
        fontSize: 14,
        paddingBottom: 10,
    },
});

export default Checkout;
