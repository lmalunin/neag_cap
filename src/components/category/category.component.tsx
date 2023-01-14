import './category.styles.scss';
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { selectCategoriesMap } from "../../store/categories/category.selector";
import ProductCard from "../product-card/product.card.component";

const CategoryComponent = () => {

    const { category } = useParams();
    const categoriesMap = useSelector(selectCategoriesMap);
    const [products, setProducts] = useState(categoriesMap[category!]);

    useEffect(() => {
        if (categoriesMap) {
            setProducts(categoriesMap[category!])
        }
    }, [category, categoriesMap]);

    return (
        <>
            <h2>{category?.toUpperCase()}</h2>
            <div className={'category-container'}>
                {products &&
                    products.map(product => (
                        <ProductCard key={product['id']} product={product}/>
                    ))
                }
            </div>
        </>

    )
}

export default CategoryComponent;