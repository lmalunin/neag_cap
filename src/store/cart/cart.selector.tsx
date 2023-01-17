import { createSelector } from "reselect";

const selectCartReducer = (state) => state.cart;

export const selectCartIsOpen = createSelector(
    [selectCartReducer],
    (cartSlice) => cartSlice.isCartOpen
)

export const selectCartItems = createSelector(
    [selectCartReducer],
    (cartSlice) => cartSlice.cartItems
)

export const selectTotalPrice = createSelector(
    [selectCartReducer],
    (cartSlice) => cartSlice.totalPrice
)

export const selectCartCount = createSelector(
    [selectCartReducer],
    (cartSlice) => cartSlice.cartCount
)