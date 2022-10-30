import React from 'react';
import {Routes, Route} from 'react-router-dom'
import './App.scss';
import Home from "./routes/home/home.component";

const Shop = () => {
    return <h1>Child</h1>
}

const App = () => {
    return (
            <Routes>
                <Route path='/' element={<Home/>}>
                    <Route path='/shop' element={<Shop/>}/>
                </Route>

            </Routes>
    )
}

export default App;
