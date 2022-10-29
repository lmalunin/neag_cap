import './directory.styles.scss';

import ICategory from "../../interfaces/category.interface";
import CategoryItemComponent from "../category-item/category-item.component";
import React from "react";

const Directory = ({categories}) => {
    return (
            <div className='directory-container'>
                {
                    categories.map((category: ICategory) => (

                            <CategoryItemComponent key={category.id}
                                                   category={category}/>

                    ))
                }
            </div>
    );
}

export default Directory;