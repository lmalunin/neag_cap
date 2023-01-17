import { createSelector } from "reselect";

const selectCartReducer = (state) => state.cart;

export const selectCartIsOpen = createSelector(
    [selectCartReducer],
    (cartSlice) => cartSlice.isCartOpen
)