// import { StatusBar } from 'expo-status-bar';
import React from 'react';
import Constants from "expo-constants";
import { StyleSheet, Text, View, SafeAreaView, StatusBar } from 'react-native';
import Splash from './screens/Splash'
import Login from './screens/Login'

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


export default function App() {
  return (
    <View style={styles.container}>
      <StoreStatusBar backgroundColor={'#FF3B5A'} style="light"/>
      <Login />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
