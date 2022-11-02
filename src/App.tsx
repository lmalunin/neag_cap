import React from 'react';
import {Route, Routes} from 'react-router-dom'
import './App.scss';
import {Home} from "./routes/home/home.component";
import {Navigation} from "./routes/navigation/navigation.component";
import SignIn from "./routes/authentication/authentication";

const Shop = () => {
    return <h1>Shop page</h1>
}


const App = () => {
    return (
            <Routes>
                <Route path='/' element={<Navigation/>}>
                    <Route index element={<Home/>}/>
                    <Route path='/shop' element={<Shop/>}/>
                    <Route path='/auth' element={<SignIn/>}/>
                </Route>
            </Routes>
    )
}

export default App;
