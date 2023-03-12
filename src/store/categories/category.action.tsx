import { createAction, Action, ActionWithPayload, withMatcher } from "../../utils/reducer.utils";
import { CATEGORIES_ACTION_TYPES, Category } from "./category.types";

export type FetchCategoriesStart = Action<CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_START>;
export type FetchCategoriesSuccess = ActionWithPayload<CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_SUCCESS, Category[]>;
export type FetchCategoriesError = ActionWithPayload<CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_FAILED, Error>;

export const fetchCategoriesStart = withMatcher((): FetchCategoriesStart => createAction(CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_START));
export const fetchCategoriesSuccess = withMatcher((payload): FetchCategoriesSuccess => createAction(CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_SUCCESS, payload));
export const fetchCategoriesError = withMatcher((error): FetchCategoriesError => createAction(CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_FAILED, error));
