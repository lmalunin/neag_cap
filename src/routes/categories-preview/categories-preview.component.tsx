import { useContext } from "react";
import CategoryPreviewComponent from "../../components/category-preview/category-preview.component";
import { CategoriesContext } from "../../components/contexts/categories.context";


const CategoriesPreview = () => {
    const { categoriesMap } = useContext(CategoriesContext);
    return (
        <>
            {Object.keys(categoriesMap).map((title) => {
                const products = categoriesMap[title];
                return <CategoryPreviewComponent key={title} title={title} products={products}/>
            })}
        </>
    )
}

export default CategoriesPreview;