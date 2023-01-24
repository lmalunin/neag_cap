import { createAction } from "../../utils/reducer.utils";
import { CATEGORIES_ACTION_TYPES } from "./category.types";

export const fetchCategoriesStart = () => createAction(CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_START);
export const fetchCategoriesSuccess = (payload) => createAction(CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_SUCCESS, payload);
export const fetchCategoriesError = (error) => createAction(CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_SUCCESS, error);
