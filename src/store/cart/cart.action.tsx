import { createAction } from "../../utils/reducer.utils";
import { CART_ITEMS_ACTION_TYPES } from "./cart.types";

export const setIsCartOpen = (isCartOpen) =>
    createAction(
        CART_ITEMS_ACTION_TYPES.SET_CART_ITEMS,
        { isCartOpen }
    );