import { AnyAction } from "redux";
import { CartItem } from "../../interfaces/cart-item-type.inteface";
import { setIsCartOpen, updateCartItems } from "./cart.action";

export type CartState = {
    readonly isCartOpen: boolean;
    readonly cartItems: CartItem[],
    readonly cartCount: number,
    readonly totalPrice: number,
}

export const CART_INITIAL_STATE = {
    isCartOpen: false,
    cartItems: new Array<CartItem>(),
    cartCount: 0,
    totalPrice: 0,
}

export const cartReducer = (state: CartState = CART_INITIAL_STATE, action: AnyAction): CartState => {

    if (setIsCartOpen.match(action) || updateCartItems.match(action)) {
        return {
            ...state,
            ...action.payload
        }
    }

    return state;
}