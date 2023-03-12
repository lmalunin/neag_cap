import { CartItem } from "../../interfaces/cart-item-type.inteface";
import { ActionWithPayload, createAction, withMatcher } from "../../utils/reducer.utils";
import { CategoryItem } from "../categories/category.types";
import { CART_ITEMS_ACTION_TYPES } from "./cart.types";

export type SetIsCartOpen = ActionWithPayload<CART_ITEMS_ACTION_TYPES.SET_CART_ITEMS, { isCartOpen: boolean }>;
export type UpdateCartItems = ActionWithPayload<CART_ITEMS_ACTION_TYPES.SET_CART_ITEMS, {
    cartItems: CartItem[],
    cartCount: number,
    totalPrice: number
}>;


export const setIsCartOpen = withMatcher((isCartOpen: boolean): SetIsCartOpen =>
    createAction(
        CART_ITEMS_ACTION_TYPES.SET_CART_ITEMS,
        { isCartOpen }
    ));

const updateCartItems = withMatcher((newCartItems: CartItem[]): UpdateCartItems => {
    const cartCount = newCartItems?.reduce(
        (total, cartItem) => total + cartItem.quantity, 0
    )

    const totalPrice = newCartItems?.reduce((total, cartItem) => total + (cartItem.quantity * cartItem.price), 0);

    return createAction(
        CART_ITEMS_ACTION_TYPES.SET_CART_ITEMS,
        {
            cartItems: newCartItems,
            cartCount,
            totalPrice
        });
});

const addCartItem = (cartItems: CartItem[], productToAdd: CategoryItem): CartItem[] => {

    const existingCartItem = cartItems.find(cartItem => cartItem.id === productToAdd.id);

    if (existingCartItem) {
        return cartItems.map(cartItem => cartItem.id === productToAdd.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem)
    }

    return [...cartItems, { ...productToAdd, quantity: 1 }];
}

const removeCartItem = (cartItems: CartItem[], productToRemove: CartItem): CartItem[] => {
    return cartItems.map(cartItem => cartItem.id === productToRemove.id && cartItem.quantity > 0
        ? { ...cartItem, quantity: cartItem.quantity - 1 }
        : cartItem)
}

const removeAllSelectedItems = (cartItems: CartItem[], productToRemove: CartItem): CartItem[] => {
    return cartItems.filter(cartItem => cartItem.id !== productToRemove.id);

    //clear to zero
    // return cartItems.map(cartItem => cartItem.id === productToRemove.id && cartItem.quantity > 0
    //         ? {...cartItem, quantity: 0}
    //         : cartItem)
}

export const addItemToCart = (cartItems: CartItem[], productToAdd: CartItem) => {
    const newCartItems = addCartItem(cartItems, productToAdd);
    return updateCartItems(newCartItems);
}

export const removeItemFromCart = (cartItems: CartItem[], productToRemove: CartItem) => {
    const newCartItems = removeCartItem(cartItems, productToRemove)
    return updateCartItems(newCartItems);
}

export const removeAllSelectedItemsFromCart = (cartItems: CartItem[], productToRemove: CartItem) => {
    const newCartItems = removeAllSelectedItems(cartItems, productToRemove)
    return updateCartItems(newCartItems);
}