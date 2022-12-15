import './directory.styles.scss';

import ICategory from "../../interfaces/category.interface";
import DirectoryItemComponent from "../directory-item/directory-item.component";
import React from "react";

const Directory = ({ categories }) => {
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