import { takeLatest, put, all, call } from "redux-saga/effects";
import { getCurrentUser } from "../../utils/firebase/frebase.utils";
import { USER_ACTION_TYPES } from './user.types';
import { signInSuccess, signInFailed } from './user.action';

export function* isUserAuthenticated() {
    try {
        const userAuth = yield call(getCurrentUser);
        if (!userAuth) return;
    } catch (error) {

    }
}

export function* onCheckUserSession() {
    yield takeLatest(USER_ACTION_TYPES.CHECK_USER_SESSION, isUserAuthenticated)
}

export function* userSagas() {
    yield all([onCheckUserSession]);
}