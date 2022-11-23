import {createContext, Dispatch, useState} from "react";

export const CartContext = createContext({
    isCartOpen: false,
    setCartState: (() => undefined) as Dispatch<any>,
})

export const CartProvider = ({children}) => {
    const [isCartOpen, setCartState] = useState(false);
    const value = {isCartOpen, setCartState};

    return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}

