import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    cardContainer: {
        flexDirection: "row",
        alignItems: "center",
    },
    imgContainer: {
        maxWidth: 131,
        maxHeight: 108,
        borderRadius: 5,
        backgroundColor: "#F2F2F2",
    },
    img: {
        width: 131,
        height: 108,
        // resizeMode: "contain",
    },
    productName: {
        fontSize: 18,
    },
    price: {
        fontSize: 14,
        color: "#8B98B4",
    },
    QuantityContainer: {
        paddingTop: 10,
        flexDirection: "row",
    },
    text: {},
});

export default styles;
