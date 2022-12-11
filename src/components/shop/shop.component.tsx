import './shop.styles.scss';
import { Route, Routes } from "react-router-dom";
import CategoriesPreview from "../../routes/categories-preview/categories-preview.component";
// import { useContext } from "react";
// import CategoryPreviewComponent from "../category-preview/category-preview.component";
// import { CategoriesContext } from "../contexts/categories.context";

const Shop = () => {

    return (
        <Routes>
            <Route index element={<CategoriesPreview/>}/>
        </Routes>
    )
}

export default Shop;