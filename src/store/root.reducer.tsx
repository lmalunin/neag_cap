import { combineReducers } from 'redux';
import { cartReducer } from "./cart/cart.reducer";
import { categoriesReducer } from "./categories/category.reducer";
import { userReducer } from "./user/user.reducer";
import { configureStore } from '@reduxjs/toolkit'

const store = configureStore({
    reducer: {
        user: userReducer,
        categories: categoriesReducer,
        cart: cartReducer,
    }
})

export const rootReducer = combineReducers({
    user: userReducer,
    categories: categoriesReducer,
    cart: cartReducer,
});