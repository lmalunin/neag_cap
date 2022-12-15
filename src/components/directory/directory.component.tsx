import './directory.styles.scss';

import ICategory from "../../interfaces/category.interface";
import DirectoryItemComponent from "../directory-item/directory-item.component";
import React from "react";

const categories: ICategory[] = [
    {
        "id": 1,
        "title": "hats",
        "imageUrl": "https://i.ibb.co/cvpntL1/hats.png",
        route: 'shop/hats'
    },
    {
        "id": 2,
        "title": "jackets",
        "imageUrl": "https://i.ibb.co/px2tCc3/jackets.png",
        route: 'shop/jackets'
    },
    {
        "id": 3,
        "title": "sneakers",
        "imageUrl": "https://i.ibb.co/0jqHpnp/sneakers.png",
        route: 'shop/sneakers'
    },
    {
        "id": 4,
        "title": "womens",
        "imageUrl": "https://i.ibb.co/GCCdy8t/womens.png",
        route: 'shop/womens'
    },
    {
        "id": 5,
        "title": "mens",
        "imageUrl": "https://freepngimg.com/thumb/girl/23358-6-woman-model-photos.png",
        route: 'shop/mens'
    }
]

const Directory = () => {
    return (
        <div className='directory-container font'>
            {
                categories.map((category: ICategory) => (
                    <DirectoryItemComponent key={category.id}
                                            category={category}/>
                ))
            }
        </div>
    );
}

export default Directory;