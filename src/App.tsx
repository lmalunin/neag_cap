import './App.scss';
import React, { useEffect } from 'react';
import { useDispatch } from "react-redux";
import { Route, Routes } from 'react-router-dom'
import { Home } from "./routes/home/home.component";
import { Navigation } from "./routes/navigation/navigation.component";
import SignIn from "./routes/authentication/authentication";
import Shop from "./components/shop/shop.component";
import CheckoutListComponent from "./components/checkout-list/checkout-list.component";
import { checkUserSession } from "./store/user/user.action";

const App = () => {
    console.log('Hit App');

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(checkUserSession());
    }, [])


    return (
        <Routes>
            <Route path='/' element={<Navigation/>}>
                <Route index element={<Home/>}/>
                <Route path='/shop/*' element={<Shop/>}/>
                <Route path='/auth' element={<SignIn/>}/>
                <Route path='/checkout' element={<CheckoutListComponent/>}/>
            </Route>
        </Routes>
    )
}

export default App;
