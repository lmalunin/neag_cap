import {createContext, Dispatch, useState} from "react";

const addCartItem = (cartItems, productToAdd): never[] => {

    const foundCartItem = cartItems.find(item => item.id == productToAdd.id);

    if (foundCartItem) {

    }

    return [];
}

export const CartContext = createContext({
    isCartOpen: false,
    setIsCartOpen: (() => undefined) as Dispatch<any>,
    cartItems: [],
    setCartItems: (() => undefined) as Dispatch<any>,
})

export const CartProvider = ({children}) => {
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [cartItems, setCartItems] = useState([]);
    const value = {isCartOpen, setIsCartOpen, cartItems, setCartItems};

    const addItemToCart = (productToAdd) => {
        setCartItems(addCartItem(cartItems, productToAdd));
    }

    return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}

