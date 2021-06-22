import React from "react";
import {
    StyleSheet,
    Text,
    View,
    ImageBackground,
    Image,
    Animated,
} from "react-native";
import bg from "../assets/bg.png";
// import logo from "../assets/logo.png";
import logo from "../assets/drawable-mdpi/logo.png";
import Button from "../components/button/pryButton/Button";

const Splash = () => {
    return (
        <View style={styles.container}>
            <ImageBackground source={bg} style={styles.bg}>
                <Image source={logo} style={styles.logo} />
                <Button name={"Get Started"} />
                <Text style={styles.text}>Sign in</Text>
            </ImageBackground>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // flexDirection: "column",
    },
    bg: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center",
        alignItems: "center",
    },
    logo: {
        // height: 300,
        // width: 300,
        marginBottom: 150,
    },
    text: {
        margin: 20,
        color: "white",
        fontSize: 16,
        fontWeight: "bold",
        textTransform: "capitalize",
    },
});

export default Splash;
