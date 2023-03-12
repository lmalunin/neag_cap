import { createSelector } from "reselect";
import { CartState } from "./cart.reducer";

const selectCartReducer = (state: { cart: CartState }): CartState => state.cart;

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