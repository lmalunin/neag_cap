import './directory-item.styles.scss';
import React from "react";

const DirectoryItemComponent = ({ category }) => {

    const { title, imageUrl } = category;

    return (
        <div className="directory-item-container">
            <div className="background-image"
                 style={{ backgroundImage: `url(${imageUrl})` }}></div>
            <div className="body">
                <h2>{title}</h2>
                <h2>shop now</h2>
            </div>
        </div>
    );
}

export default DirectoryItemComponent;