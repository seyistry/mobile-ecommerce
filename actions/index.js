export const ADD_TO_CART = "ADD_TO_CART";
export const INCREASE_QUANTITY = "INCREASE_QUANTITY";
export const DECREASE_QUANTITY = "DECREASE_QUANTITY";
export const RESET_CART = "RESET_CART";

export function addToCart(item) {
    return {
        type: ADD_TO_CART,
        payload: item,
    };
}

export function increaseQuantity(id) {
    return {
        type: INCREASE_QUANTITY,
        id,
    };
}

export function decreaseQuantity(id) {
    return {
        type: DECREASE_QUANTITY,
        id,
    };
}

export function resetCart() {
    return {
        type: RESET_CART,
    };
}
