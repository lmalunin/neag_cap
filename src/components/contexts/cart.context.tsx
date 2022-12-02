import {createContext, Dispatch, useEffect, useState} from "react";
import CartItem from "../cart-item/cart-item.component";

export type CategoryItem = {
    id: number;
    imageUrl: string;
    name: string;
    price: number;
};

export type CartItem = CategoryItem & {
    quantity: number;
};

const addCartItem = (cartItems, productToAdd): CartItem[] => {

    const existingCartItem = cartItems.find(cartItem => cartItem.id === productToAdd.id);

    if (existingCartItem) {
        return cartItems.map(cartItem => cartItem.id === productToAdd.id
                ? {...cartItem, quantity: cartItem.quantity + 1}
                : cartItem)
    }

    return [...cartItems, {...productToAdd, quantity: 1}];
}

const removeItem = (cartItems, productToRemove): CartItem[] => {
    return cartItems.map(cartItem => cartItem.id === productToRemove.id && cartItem.quantity > 0
            ? {...cartItem, quantity: cartItem.quantity - 1}
            : cartItem)
}

const removeAllSelectedItems = (cartItems, productToRemove): CartItem[] => {
    return cartItems.map(cartItem => cartItem.id === productToRemove.id && cartItem.quantity > 0
            ? {...cartItem, quantity: 0}
            : cartItem)
}

export const CartContext = createContext({
    isCartOpen: false,
    setIsCartOpen: (() => undefined) as Dispatch<any>,
    cartItems: new Array<CartItem>(),
    addItemToCart: (() => undefined) as Dispatch<any>,
    removeItemFromCart: (() => undefined) as Dispatch<any>,
    removeAllSelectedItemsFromCart: (() => undefined) as Dispatch<any>,
    cartCount: 0,
    setCartCount: (() => undefined) as Dispatch<any>,
})

export const CartProvider = ({children}) => {
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [cartItems, setCartItems] = useState(new Array<CartItem>());
    const [cartCount, setCartCount] = useState(0);

    const addItemToCart = (productToAdd) => {
        const res: CartItem[] = addCartItem(cartItems, productToAdd)
        setCartItems(res);
    }

    const removeItemFromCart = (productToRemove) => {
        const res: CartItem[] = removeItem(cartItems, productToRemove)
        setCartItems(res);
    }

    const removeAllSelectedItemsFromCart = (productToRemove) => {
        const res: CartItem[] = removeAllSelectedItems(cartItems, productToRemove)
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
        setCartCount
    };


    return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}

