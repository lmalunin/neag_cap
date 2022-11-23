import './fonts/Roboto/Roboto-Light.ttf';

import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter} from 'react-router-dom'
import './index.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {UserProvider} from "./components/contexts/user.context";
import {ShopProvider} from "./components/contexts/shop.context";

const root = ReactDOM.createRoot(
        document.getElementById('root') as HTMLElement
);
root.render(
        <React.StrictMode>
            <BrowserRouter>
                <UserProvider>
                    <ShopProvider>
                        <App/>
                    </ShopProvider>
                </UserProvider>
            </BrowserRouter>
        </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
