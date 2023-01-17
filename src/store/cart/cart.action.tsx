import { CartItemType } from "../../components/contexts/cart.context";
import { createAction } from "../../utils/reducer.utils";
import { CART_ITEMS_ACTION_TYPES } from "./cart.types";

export const setIsCartOpen = (isCartOpen) =>
    createAction(
        CART_ITEMS_ACTION_TYPES.SET_CART_ITEMS,
        { isCartOpen }
    );

const updateCartItems = (newCartItems) => {
    const cartCount = newCartItems.reduce(
        (total, cartItem) => total + cartItem.quantity, 0
    )

    const totalPrice = newCartItems.reduce((total, cartItem) => total + (cartItem.quantity * cartItem.price), 0);

    return createAction(
        CART_ITEMS_ACTION_TYPES.SET_CART_ITEMS,
        {
            cartItems: newCartItems,
            cartCount,
            totalPrice
        });
}

const addCartItem = (cartItems, productToAdd): CartItemType[] => {

    const existingCartItem = cartItems.find(cartItem => cartItem.id === productToAdd.id);

    if (existingCartItem) {
        return cartItems.map(cartItem => cartItem.id === productToAdd.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem)
    }

    return [...cartItems, { ...productToAdd, quantity: 1 }];
}

const removeItem = (cartItems, productToRemove): CartItemType[] => {
    return cartItems.map(cartItem => cartItem.id === productToRemove.id && cartItem.quantity > 0
        ? { ...cartItem, quantity: cartItem.quantity - 1 }
        : cartItem)
}

const removeAllSelectedItems = (cartItems, productToRemove): CartItemType[] => {
    return cartItems.filter(cartItem => cartItem.id !== productToRemove.id);

    //clear to zero
    // return cartItems.map(cartItem => cartItem.id === productToRemove.id && cartItem.quantity > 0
    //         ? {...cartItem, quantity: 0}
    //         : cartItem)
}

export const addItemToCart = (cartItems, productToAdd) => {
    const newCartItems = addCartItem(cartItems, productToAdd);
    return updateCartItems(newCartItems);
}

export const removeItemFromCart = (cartItems, productToRemove) => {
    const newCartItems = removeItem(cartItems, productToRemove)
    return updateCartItems(newCartItems);
}

export const removeAllSelectedItemsFromCart = (cartItems, productToRemove) => {
    const newCartItems = removeAllSelectedItems(cartItems, productToRemove)
    return updateCartItems(newCartItems);
}