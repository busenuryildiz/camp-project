import { ADD_TO_CART, REMOVE_FROM_CART, CLEAR_CART } from "../actions/cartActions";
import { cartItems } from "../initialValues/cartItems";

const initialState = {
    cartItems: cartItems
}

export default function cartReducer(state = initialState, { type, payload }) {
    switch (type) {
        case ADD_TO_CART:
            let product = state.cartItems.find(c => c.product.id === payload.id)
            if (product) {
                product.quantity++;
                return {
                    ...state
                }
            } else {
                return {
                    ...state,
                    cartItems: [...state.cartItems, { quantity: 1, product: payload }]
                }
            }
        case REMOVE_FROM_CART:
            const existingCartItem = state.cartItems.find((item) => item.product.id === payload.id);
            if (existingCartItem) {
                if (payload.quantity && existingCartItem.quantity > payload.quantity) {
                    existingCartItem.quantity -= payload.quantity;
                } else {
                    return {
                        ...state,
                        cartItems: state.cartItems.filter((c) => c.product.id !== payload.id)
                    };
                }
            }
            return { ...state };
        case CLEAR_CART:
            return {
                ...state,
                cartItems: [], // Sepeti temizle
            };
        default:
            return state;
    }
}