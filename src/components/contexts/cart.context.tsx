import { createContext, Dispatch, useReducer } from "react";
import { createAction } from "../../utils/reducer.utils";

export type CategoryItem = {
    id: number;
    imageUrl: string;
    name: string;
    price: number;
};

export type CartItemType = CategoryItem & {
    quantity: number;
};

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

export const CartContext = createContext({
    isCartOpen: false,
    setIsCartOpen: (() => undefined) as Dispatch<any>,
    cartItems: new Array<CartItemType>(),
    addItemToCart: (() => undefined) as Dispatch<any>,
    removeItemFromCart: (() => undefined) as Dispatch<any>,
    removeAllSelectedItemsFromCart: (() => undefined) as Dispatch<any>,
    cartCount: 0,
    totalPrice: 0,
})

const INITIAL_STATE = {
    isCartOpen: false,
    cartItems: new Array<CartItemType>(),
    cartCount: 0,
    totalPrice: 0,
}

const CART_ITEMS_ACTION_TYPES = {
    SET_CART_ITEMS: 'SET_CART_ITEMS'
}

const cartReducer = (state, action) => {
    const { type, payload } = action;
    switch (type) {
        case(CART_ITEMS_ACTION_TYPES.SET_CART_ITEMS): {
            return {
                ...state,
                ...payload
            }
        }
        default:
            throw new Error(`throw new Error(\`Unhandled type ${type} in userReducer\`);`);

    }
}

export const CartProvider = ({ children }) => {

    const [{ isCartOpen, cartItems, cartCount, totalPrice }, dispatch] = useReducer(cartReducer, INITIAL_STATE);

    //action creator
    const setIsCartOpen = (isCartOpen) => {
        dispatch(
            createAction(
                CART_ITEMS_ACTION_TYPES.SET_CART_ITEMS,
                { isCartOpen }
            )
        );
    }

    //action creator
    const dispatchUpdateCartItems = (newCartItems) => {
        const cartCount = newCartItems.reduce(
            (total, cartItem) => total + cartItem.quantity, 0
        )

        const totalPrice = newCartItems.reduce((total, cartItem) => total + (cartItem.quantity * cartItem.price), 0);
        dispatch(
            createAction(
                CART_ITEMS_ACTION_TYPES.SET_CART_ITEMS,
                {
                    cartItems: newCartItems,
                    cartCount,
                    totalPrice
                }));
    }

    const addItemToCart = (productToAdd) => {
        const newCartItems = addCartItem(cartItems, productToAdd);
        dispatchUpdateCartItems(newCartItems);
    }

    const removeItemFromCart = (productToRemove) => {
        const newCartItems = removeItem(cartItems, productToRemove)
        dispatchUpdateCartItems(newCartItems);
    }

    const removeAllSelectedItemsFromCart = (productToRemove) => {
        const newCartItems = removeAllSelectedItems(cartItems, productToRemove)
        dispatchUpdateCartItems(newCartItems);
    }

    const value = {
        isCartOpen,
        setIsCartOpen,
        cartItems,
        addItemToCart,
        removeItemFromCart,
        removeAllSelectedItemsFromCart,
        cartCount,
        totalPrice,
    };


    return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}

