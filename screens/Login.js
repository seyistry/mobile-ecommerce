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
import bg from "../assets/bg.png";
// import logo from "../assets/logo.png";
import logo from "../assets/drawable-hdpi/loginLogo.png";
import FormInput from "../components/input/FormInput";
import Button from "../components/button/secButton/Button";
import HeaderWithHr from "../components/header/HeaderWithHr";

const Login = () => {
    return (
        <ImageBackground source={bg} style={styles.bg}>
            <ScrollView contentContainerStyle={{ alignItems: "center" }}>
                <View style={styles.logo}>
                    <Image source={logo} />
                </View>
                <View style={styles.signIn}>
                    <HeaderWithHr name={"Sign in"} />
                    <FormInput name={"User Name"} />
                    <FormInput name={"Password"} />
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
        // height: 300,
        // width: 300,a
        alignItems: "center",
        marginTop: 60,
        marginBottom: 90,
    },
    signIn: {
        width: 393,
        height: 513,
        backgroundColor: "white",
        alignItems: "center",
        justifyContent: 'center',
        borderTopRightRadius: 20,
        borderTopLeftRadius: 20,
    },
    text: {
        margin: 20,
        color: "#FF4059",
        fontSize: 16,
    },
});

export default Login;
