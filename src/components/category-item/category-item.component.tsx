import './category-item.styles.scss';
import React from "react";

const CategoryItemComponent = ({category}) => {

    const {title, imageUrl} = category;

    return (
            <div className="category-container">
                <div className="background-image"
                     style={{backgroundImage: `url(${imageUrl})`}}></div>
                <div className="category-body-container">
                    <h2>{title}</h2>
                    <h2>shop now</h2>
                </div>
            </div>
    );
}

export default CategoryItemComponent;