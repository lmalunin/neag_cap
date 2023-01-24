import { takeLatest, all, call, put } from 'redux-saga/effects';
import { getCategoriesAndDocuments } from "../../utils/firebase/frebase.utils";
import { fetchCategoriesSuccess, fetchCategoriesError } from "./category.action";
import { CATEGORIES_ACTION_TYPES } from './category.types';


export function* fetchCategoriesAsync() {
    try {
        const categoriesArray = yield call(getCategoriesAndDocuments);
        yield put(fetchCategoriesSuccess(categoriesArray))
    } catch (error) {
        yield put(fetchCategoriesError(error));
    }
}

export function* onFetchCategories() {
    yield takeLatest(CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_START, fetchCategoriesAsync);
}

export function* categoriesSaga() {
    yield all([call(onFetchCategories)]);
}