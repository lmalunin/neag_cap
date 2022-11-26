import {createContext, Dispatch, useState} from "react";
import PRODUCTS from '../../assets/shop-data.json';

export const ProductContext = createContext({
    products: PRODUCTS,
    setProducts: (() => Array<{ id: 0, name: '', imageUrl: string, price: number }>) as Dispatch<any>
})

export const ProductsProvider = ({children}) => {
    const [products, setProducts] = useState(PRODUCTS);
    const value = {products, setProducts};

    return <ProductContext.Provider value={value}>{children}</ProductContext.Provider>
}