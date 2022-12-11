import './category.styles.scss';
import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { CategoriesContext } from "../contexts/categories.context";
import ProductCard from "../product-card/product.card.component";

const CategoryComponent = () => {

    const { category } = useParams();
    const { categoriesMap } = useContext(CategoriesContext);
    const [products, setProducts] = useState(categoriesMap[category!]);

    useEffect(() => {
        if (categoriesMap) {
            setProducts(categoriesMap[category!])
        }
    }, [category, categoriesMap]);

    return (
        <div className={'category-container'}>
            {products &&
                products.map(product => (
                    <ProductCard key={product['id']} product={product}/>
                ))
            }
        </div>
    )
}

export default CategoryComponent;