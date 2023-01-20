import { getCategoriesAndDocuments } from "../../utils/firebase/frebase.utils";
import { createAction } from "../../utils/reducer.utils";
import { CATEGORIES_ACTION_TYPES } from "./category.types";

// export const setCategories = (categories) =>
//     createAction(CATEGORIES_ACTION_TYPES.SET_CATEGORIES, categories);

export const fetchCategoriesStart = (payload) => createAction(CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_START, payload);
export const fetchCategoriesSuccess = (payload) => createAction(CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_SUCCESS, payload);
export const fetchCategoriesError = (payload) => createAction(CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_SUCCESS, payload);

export const fetchCategoriesAsync = () => async (dispatch: any) => {

    dispatch(fetchCategoriesStart({}));

    try {
        const categoriesArray = await getCategoriesAndDocuments();
        dispatch(fetchCategoriesSuccess(categoriesArray));
    } catch (error) {
        dispatch(fetchCategoriesError(error));
    }
}