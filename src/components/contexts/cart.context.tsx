import {createContext, Dispatch, useState} from "react";

export const CartContext = createContext({
    isCartOpen: false,
    setIsCartOpen: (() => undefined) as Dispatch<any>,
})

export const CartProvider = ({children}) => {
    const [isCartOpen, setIsCartOpen] = useState(false);
    const value = {isCartOpen, setIsCartOpen};

    return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}

