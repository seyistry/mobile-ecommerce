// import { StatusBar } from 'expo-status-bar';
import React from "react";
import Constants from "expo-constants";
import { StyleSheet, Text, View, SafeAreaView, StatusBar } from "react-native";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import logger from "./middleware/logger";
import reducer from "./reducers";
import { Provider} from "react-redux";
import Splash from "./screens/Splash";
import Login from "./screens/Login";
import Main from "./screens/Main";

function StoreStatusBar({ backgroundColor, ...props }) {
    return (
        <SafeAreaView
            style={{ backgroundColor, height: Constants.statusBarHeight }}
        >
            <StatusBar
                translucent
                backgroundColor={backgroundColor}
                {...props}
            />
        </SafeAreaView>
    );
}

const store = createStore(reducer, applyMiddleware(thunk, logger));

export default function App() {
    return (
        <Provider store={store}>
            <View style={styles.container}>
                <StoreStatusBar backgroundColor={"#FF3B5A"} style="light" />
                <Main />
                <StatusBar style="auto" />
            </View>
        </Provider>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});
