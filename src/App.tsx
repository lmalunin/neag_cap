import React from 'react';
import logo from './logo.svg';
import './App.css';

const App = () => {

    const categories = [
        {
            id: 1,
            title: 'Hats',
        },
        {
            id: 2,
            title: 'Jackets',
        },
        {
            id: 3,
            title: 'Sneakers',
        },
        {
            id: 4,
            title: 'Womens',
        },
        {
            id: 5,
            title: 'Mens',
        }
    ];

    return (
        <div className="categories-container">
            {
                categories.map(({id, title}) => (
                    <div className="category-container">
                        <div className="background-image"></div>
                        <div className="category-body-container">
                            <h2>hats</h2>
                            <h2>shop now</h2>
                        </div>
                    </div>
                ))
            }
        </div>
    );
}

export default App;
