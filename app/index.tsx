import { StyleSheet, Text, View } from "react-native";
import React from "react";
import {Canvas, Circle, Group} from "@shopify/react-native-skia";
import { LinearGradient } from 'expo-linear-gradient';
import Colors from "../constants/Colors";

const index = () => {
  return (
  <View style={styles.root}>
      <LinearGradient
        // Background Linear Gradient
        colors={[Colors.dark.bgGradientTop, Colors.dark.bgGradientBottom]}
        style={styles.background}
        start={{x: 0.5, y: 0.5}}
      >
        <Text style={{color:'white'}}>
          Open up App.tsx to start working on your app!
        </Text>
      </LinearGradient>

  </View>
  );
};

export default index;

const styles = StyleSheet.create({
  root:{
    flex:1,
    justifyContent:"center",
    alignItems:"center",
  },
  background:{
    flex:1,
    justifyContent:"center",
    alignItems:"center",
    width:"100%",
  }
});
