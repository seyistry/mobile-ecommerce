import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    cardContainer: {
        width: 164,
        height: 222,
        // marginVertical: 10,
        // marginLeft: 10,
        borderRadius: 10,
        borderWidth: 2,
        borderColor: "#FBFBFB",
        // shadowColor: "#000",
        // shadowOffset: { width: 0, height: 1 },
        // shadowOpacity: 0.,
        // shadowRadius: 2,
        // elevation: 1,
    },
    imgContainer: {
        flex: 1,
        margin: 5,
        maxWidth: 156,
        maxHeight: 128,
        borderRadius: 10,
        backgroundColor: "#FBFBFB",
    },
    img: {
        resizeMode: "contain",
    },
    productName: {
        textAlign: "center",
        marginVertical: 10,
        fontSize: 14,
    },
    priceCartContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginHorizontal: 20,
        alignItems: "center",
    },
    cartContainer: {
        width: 34,
        height: 34,
        backgroundColor: "#F5F5F5",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 35,
    },
    text: {
        fontSize: 15,
        color: "#8B98B4",
    },
});

export default styles;
