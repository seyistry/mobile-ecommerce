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
} from "react-native";
import bg from "../assets/drawable-hdpi/Splash.png";
// import logo from "../assets/logo.png";
import logo from "../assets/drawable-hdpi/loginLogo.png";
import FormInput from "../components/input/FormInput";
import Button from "../components/button/secButton/Button";
import HeaderWithHr from "../components/header/HeaderWithHr";

const Login = () => {
    return (
        <ImageBackground source={bg} style={styles.bg}>
            <ScrollView
                contentContainerStyle={{ alignItems: "center", flex: 1 }}
            >
                <View style={styles.logo}>
                    <Image source={logo} />
                </View>
                <View style={styles.signIn}>
                    <HeaderWithHr name={"Sign in"} />
                    <FormInput name={"User Name"}/>
                    <View style={{marginBottom: 10}}/>
                    <FormInput name={"Password"} />
                    <View style={{marginBottom: 20}}/>
                    <Button name={"Sign In"} />
                    <Text style={[styles.text, { color: "#626E89" }]}>
                        Forgot Password?
                    </Text>
                </View>
            </ScrollView>
        </ImageBackground>
    );
};

const styles = StyleSheet.create({
    bg: {
        flex: 1,
        resizeMode: "cover",
        //
    },
    container: {
        flex: 1,
    },
    logo: {
        marginTop: 60,
        marginBottom: 90,
    },
    signIn: {
        width: "100%",
        height: "100%",
        backgroundColor: "white",
        alignItems: "center",
        borderRadius: 30,
        paddingHorizontal: 10,
    },
    text: {
        margin: 20,
        color: "#FF4059",
        fontSize: 16,
    },
});

export default Login;
