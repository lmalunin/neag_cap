import './category.styles.scss';
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { selectCategoriesIsLoading, selectCategoriesMap } from "../../store/categories/category.selector";
import ProductCard from "../product-card/product.card.component";
import SpinnerComponent from "../spinner/spinner.component";

type CategoryRouteparams = {
    category: string
}

const CategoryComponent = () => {

    const { category } = useParams<keyof CategoryRouteparams>() as CategoryRouteparams;
    const categoriesMap = useSelector(selectCategoriesMap);
    const isLoading = useSelector(selectCategoriesIsLoading);
    const [products, setProducts] = useState(categoriesMap[category]);
    console.log('render/re-rendering component');

    useEffect(() => {
        if (categoriesMap) {
            setProducts(categoriesMap[category!])
        }
    }, [category, categoriesMap]);

    return (
        <>
            <h2>{category?.toUpperCase()}</h2>
            {
                isLoading
                    ? <SpinnerComponent/>
                    : <div className={'category-container'}>
                        {products &&
                            products.map(product => (
                                <ProductCard key={product['id']} product={product}/>
                            ))
                        }
                    </div>
            }
        </>

    )
}

export default CategoryComponent;