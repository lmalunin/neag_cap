import './shop.styles.scss';
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Routes } from "react-router-dom";
import CategoriesPreview from "../../routes/categories-preview/categories-preview.component";
import { fetchCategoriesStart } from "../../store/categories/category.action";
import CategoryComponent from "../category/category.component";

const Shop = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchCategoriesStart());
    }, [])

    return (
        <Routes>
            <Route index element={<CategoriesPreview/>}/>
            <Route path={":category"} element={<CategoryComponent/>}/>
        </Routes>
    )
}

export default Shop;