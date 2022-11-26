import {createContext, Dispatch, useEffect, useState} from "react";

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

export const CartContext = createContext({
    isCartOpen: false,
    setIsCartOpen: (() => undefined) as Dispatch<any>,
    cartItems: new Array<CartItem>(),
    addItemToCart: (() => undefined) as Dispatch<any>,
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
        cartCount,
        setCartCount
    };


    return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}

