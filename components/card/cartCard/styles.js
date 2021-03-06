import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    cardContainer: {
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 10,
    },
    imgContainer: {
        maxWidth: 131,
        maxHeight: 108,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: "#F2F2F2",
    },
    img: {
        width: 126,
        height: 103,
        resizeMode: "contain",
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
