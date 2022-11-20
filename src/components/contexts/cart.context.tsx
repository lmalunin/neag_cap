import {createContext, Dispatch, useState} from "react";

export const CartContext = createContext({
    cartCount: 0,
    setCartCount: (() => undefined) as Dispatch<any>,
})

export const CartProvider = ({children}) => {
    const [cartCount, setCartCount] = useState(0);
    const value = {cartCount, setCartCount};

    return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}

