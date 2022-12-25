import { createContext, Dispatch, useEffect, useReducer, useState } from "react";

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
    setCartCount: (() => undefined) as Dispatch<any>,
    totalPrice: 0,
    setTotalPrice: (() => undefined) as Dispatch<any>,
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
    //const [isCartOpen, setIsCartOpen] = useState(false);
    //const [cartItems, setCartItems] = useState(new Array<CartItemType>());
    //const [cartCount, setCartCount] = useState(0);
    //const [totalPrice, setTotalPrice] = useState(0);

    const [{ isCartOpen, cartItems, cartCount, totalPrice }, dispatch] = useReducer(cartReducer, INITIAL_STATE);

    const setIsCartOpen = (isCartOpen) => {
        dispatch({ type: CART_ITEMS_ACTION_TYPES.SET_CART_ITEMS, payload: { isCartOpen } });
    }
    const setCartItems = (cartItems) => {
        dispatch({ type: CART_ITEMS_ACTION_TYPES.SET_CART_ITEMS, payload: { cartItems } });
    }
    const setCartCount = (cartCount) => {
        dispatch({ type: CART_ITEMS_ACTION_TYPES.SET_CART_ITEMS, payload: { cartCount } });
    }
    const setTotalPrice = (totalPrice) => {
        dispatch({ type: CART_ITEMS_ACTION_TYPES.SET_CART_ITEMS, payload: { totalPrice } });
    }


    const addItemToCart = (productToAdd) => {
        const res: CartItemType[] = addCartItem(cartItems, productToAdd)
        setCartItems(res);
    }

    const removeItemFromCart = (productToRemove) => {
        const res: CartItemType[] = removeItem(cartItems, productToRemove)
        setCartItems(res);
    }

    const removeAllSelectedItemsFromCart = (productToRemove) => {
        const res: CartItemType[] = removeAllSelectedItems(cartItems, productToRemove)
        setCartItems(res);
    }

    useEffect(() => {
        const newCartCount = cartItems.reduce(
            (total, cartItem) => total + cartItem.quantity, 0
        )
        setCartCount(newCartCount);

    }, [cartItems])

    const value = {
        isCartOpen,
        setIsCartOpen,
        cartItems,
        addItemToCart,
        removeItemFromCart,
        removeAllSelectedItemsFromCart,
        cartCount,
        setCartCount,
        totalPrice,
        setTotalPrice
    };


    return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}

