import { CartItem } from "../../interfaces/cart-item-type.inteface";
import { CART_ITEMS_ACTION_TYPES } from "./cart.types";

export const CART_INITIAL_STATE = {
    isCartOpen: false,
    cartItems: new Array<CartItem>(),
    cartCount: 0,
    totalPrice: 0,
}

export const cartReducer = (state = CART_INITIAL_STATE, action: any = {}) => {
    const { type, payload } = action;
    switch (type) {
        case(CART_ITEMS_ACTION_TYPES.SET_CART_ITEMS): {
            return {
                ...state,
                ...payload
            }
        }
        default:
            return state;

    }
}