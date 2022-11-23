import {createContext, Dispatch, useState} from "react";
import SHOP_DATA from '../../assets/shop-data.json';

export const ShopContext = createContext({
    products: SHOP_DATA,
    setProducts: (() => Array<{ id: 0, name: '', imageUrl: string, price: number }>) as Dispatch<any>
})

export const ShopProvider = ({children}) => {
    const [products, setProducts] = useState(SHOP_DATA);
    const value = {products, setProducts};

    return <ShopContext.Provider value={value}>{children}</ShopContext.Provider>
}