import './App.scss';
import React, { useEffect } from 'react';
import { useDispatch } from "react-redux";
import { Route, Routes } from 'react-router-dom'
import { Home } from "./routes/home/home.component";
import { Navigation } from "./routes/navigation/navigation.component";
import SignIn from "./routes/authentication/authentication";
import Shop from "./components/shop/shop.component";
import CheckoutListComponent from "./components/checkout-list/checkout-list.component";
import { createUserDocumentFromAuth, onAuthStateChangedListener } from "./utils/firebase/frebase.utils";
import { setCurrentUser } from "./store/user/user.action";

const App = () => {
    console.log('Hit App');

    const dispatch = useDispatch();

    useEffect(() => {
        const ubsubscribe = onAuthStateChangedListener((user) => {
            if (user) {
                createUserDocumentFromAuth(user);
            }
            dispatch(setCurrentUser(user));
        })
        return ubsubscribe;
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
