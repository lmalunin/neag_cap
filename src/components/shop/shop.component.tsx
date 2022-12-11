import './shop.styles.scss';
import { Route, Routes } from "react-router-dom";
import CategoriesPreview from "../../routes/categories-preview/categories-preview.component";
import CategoryComponent from "../category/category.component";
// import { useContext } from "react";
// import CategoryPreviewComponent from "../category-preview/category-preview.component";
// import { CategoriesContext } from "../contexts/categories.context";

const Shop = () => {

    return (
        <Routes>
            <Route index element={<CategoriesPreview/>}/>
            <Route path={":category"} element={<CategoryComponent/>}/>
        </Routes>
    )
}

export default Shop;