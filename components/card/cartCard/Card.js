import React from "react";
import { Text, View, Image, Touchable, TouchableOpacity } from "react-native";
import styles from "./styles.js";
import { connect } from "react-redux";
import product from "../../../assets/drawable-hdpi/product.png";
import { AntDesign } from "@expo/vector-icons";
import { increaseQuantity, decreaseQuantity } from "../../../actions/index";

const Card = (props) => {
    const { id, title, image, price, quantity } = props;

    const incrementQuantity = () => {
        props.dispatch(increaseQuantity(id));
    };

    const decrementQuantity = () => {
        props.dispatch(decreaseQuantity(id));
    };

    return (
        <View>
            <View style={styles.cardContainer}>
                <View style={styles.imgContainer}>
                    <Image
                        style={[
                            {
                                width: "100%",
                                height: "100%",
                                resizeMode: "contain",
                            },
                            styles.img,
                        ]}
                        source={{ uri: `${image}` }}
                    />
                </View>
                <View style={{ paddingLeft: 20 }}>
                    <Text style={styles.productName}>{title}</Text>
                    <Text style={styles.price}>${price}</Text>
                    <View style={styles.QuantityContainer}>
                        <TouchableOpacity onPress={decrementQuantity}>
                            <AntDesign
                                name="minuscircleo"
                                size={18}
                                color="#8B98B4"
                            />
                        </TouchableOpacity>
                        <Text style={{ paddingHorizontal: 10, color: "black" }}>
                            {quantity}
                        </Text>
                        <TouchableOpacity onPress={incrementQuantity}>
                            <AntDesign
                                name="pluscircleo"
                                size={18}
                                color="#8B98B4"
                            />
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </View>
    );
};

export default connect()(Card);
