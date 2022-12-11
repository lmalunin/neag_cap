//import { getRedirectResult } from "firebase/auth";
import { createContext, Dispatch, useEffect, useState } from "react";
import { getCategoriesAndDocuments } from "../../utils/firebase/frebase.utils";
//import SHOP_DATA from '../../assets/shop-data.js';
//import { addCollectionAndDocuments, auth, createUserDocumentFromAuth } from './../../utils/firebase/frebase.utils';

export const CategoriesContext = createContext({
    categoriesMap: {},
    setCategoriesMap: (() => Array<{ id: 0, name: '', imageUrl: string, price: number }>) as Dispatch<any>
})

export const CategoriesProvider = ({ children }) => {
    const [categoriesMap, setCategoriesMap] = useState({});
    const value = { categoriesMap, setCategoriesMap };

    useEffect(() => {
        const getCategoriesMap = async () => {
            const categoryMap = await getCategoriesAndDocuments();
            //console.log(categoryMap);
            setCategoriesMap(categoryMap);
        }

        getCategoriesMap();
    }, [])

    // useEffect(() => {
    //     (async () => {
    //         await addCollectionAndDocuments('categories', SHOP_DATA);
    //     })();
    // }, [])

    return <CategoriesContext.Provider value={value}>{children}</CategoriesContext.Provider>
}