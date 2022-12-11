import './shop.styles.scss';
import { useContext } from "react";
import CategoryPreviewComponent from "../category-preview/category-preview.component";
import { CategoriesContext } from "../contexts/categories.context";

const Shop = () => {
    const { categoriesMap } = useContext(CategoriesContext);
    return (
        <div className={'shop-container'}>
            {Object.keys(categoriesMap).map((title) => {
                const products = categoriesMap[title];
                return <CategoryPreviewComponent key={title} title={title} products={products}/>
            })}
        </div>
    )
}

export default Shop;