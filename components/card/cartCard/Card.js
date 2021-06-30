import React from "react";
import { Text, View, Image } from "react-native";
import styles from "./styles.js";
import product from "../../../assets/drawable-hdpi/product.png";
import { AntDesign } from "@expo/vector-icons";

const Card = (props) => (
    <View>
        <View style={styles.cardContainer}>
            <View style={styles.imgContainer}>
                <Image source={product} style={styles.img} />
            </View>
            <View style={{ paddingLeft: 20 }}>
                <Text style={styles.productName}>product Name</Text>
                <Text style={styles.price}>$1000</Text>
                <View style={styles.QuantityContainer}>
                    <AntDesign name="minuscircleo" size={18} color="#8B98B4" />
                    <Text style={{ paddingHorizontal: 10, color: "black" }}>
                        1
                    </Text>
                    <AntDesign name="pluscircleo" size={18} color="#8B98B4" />
                </View>
            </View>
        </View>
    </View>
);

export default Card;
