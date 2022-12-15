import { BackgroundImage, Body, DirectoryItemContainer } from './directory-item.styles';
import React from "react";

const DirectoryItemComponent = ({ category }) => {

    const { title, imageUrl } = category;

    return (
        <DirectoryItemContainer>
            <BackgroundImage imageUrl={imageUrl}/>
            <Body>
                <h2>{title}</h2>
                <h2>shop now</h2>
            </Body>
        </DirectoryItemContainer>
    );
}

export default DirectoryItemComponent;