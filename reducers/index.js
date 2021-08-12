import { ADD_TO_CART } from "../actions/index";
import { INCREASE_QUANTITY } from "../actions/index";
import { DECREASE_QUANTITY } from "../actions/index";
import { RESET_CART } from "../actions/index";

export default function cart(state = {}, action) {
    switch (action.type) {
        case ADD_TO_CART:
            const { id, title, price, image, timestamp, quantity } =
                action.payload;
            return {
                ...state,
                [id]: {
                    id,
                    title,
                    price,
                    image,
                    timestamp,
                    quantity,
                },
            };
        case INCREASE_QUANTITY:
            return {
                ...state,
                [action.id]: {
                    ...state[action.id],
                    quantity: state[action.id].quantity + 1,
                },
            };
        case DECREASE_QUANTITY:
            return {
                ...state,
                [action.id]: {
                    ...state[action.id],
                    quantity:
                        state[action.id].quantity < 2
                            ? 1
                            : state[action.id].quantity - 1,
                },
            };
        case RESET_CART:
            return {};
        default:
            return state;
    }
}
