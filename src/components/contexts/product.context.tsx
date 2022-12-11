//import { getRedirectResult } from "firebase/auth";
import { createContext, Dispatch, useEffect, useState } from "react";
//import SHOP_DATA from '../../assets/shop-data.js';
//import { addCollectionAndDocuments, auth, createUserDocumentFromAuth } from './../../utils/firebase/frebase.utils';

export const ProductContext = createContext({
    products: [],
    setProducts: (() => Array<{ id: 0, name: '', imageUrl: string, price: number }>) as Dispatch<any>
})

export const ProductsProvider = ({ children }) => {
    const [products, setProducts] = useState([]);
    const value = { products, setProducts };

    // useEffect(() => {
    //     (async () => {
    //         await addCollectionAndDocuments('categories', SHOP_DATA);
    //     })();
    // }, [])

    return <ProductContext.Provider value={value}>{children}</ProductContext.Provider>
}