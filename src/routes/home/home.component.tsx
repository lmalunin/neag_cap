import ICategory from "../../interfaces/category.interface";
import Directory from "../../components/directory/directory.component";
import React from "react";
import {Outlet} from 'react-router-dom';

const Home = () => {
    const categories: ICategory[] = [
        {
            "id": 1,
            "title": "hats",
            "imageUrl": "https://i.ibb.co/cvpntL1/hats.png"
        },
        {
            "id": 2,
            "title": "jackets",
            "imageUrl": "https://i.ibb.co/px2tCc3/jackets.png"
        },
        {
            "id": 3,
            "title": "sneakers",
            "imageUrl": "https://i.ibb.co/0jqHpnp/sneakers.png"
        },
        {
            "id": 4,
            "title": "womens",
            "imageUrl": "https://i.ibb.co/GCCdy8t/womens.png"
        },
        {
            "id": 5,
            "title": "mens",
            "imageUrl": "https://freepngimg.com/thumb/girl/23358-6-woman-model-photos.png"
        }
    ]

    return (
            <div>
                <Outlet/>
                <Directory categories={categories}/>
            </div>
    );

}

export {Home};