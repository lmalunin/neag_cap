import { takeLatest, put, all, call } from "redux-saga/effects";
import {
    getCurrentUser,
    createUserDocumentFromAuth,
    signInWithGooglePopup,
    signInAuthUserWithEmailAndPassword
} from "../../utils/firebase/frebase.utils";
import { USER_ACTION_TYPES } from './user.types';
import { signInSuccess, signInFailed } from './user.action';

export function* getSnapshotFromUserAuth(userAuth, additionalDetails?) {
    try {
        const userSnapshot = yield call(createUserDocumentFromAuth, userAuth, additionalDetails);
        console.log('userSnapshot', userSnapshot);
        if (userSnapshot) {
            yield put(signInSuccess(
                { id: userSnapshot.id, ...userSnapshot?.data }
            ))
        }

    } catch (error) {
        yield put(signInFailed(error));
    }
}

export function* isUserAuthenticated() {
    try {
        const userAuth = yield call(getCurrentUser);
        if (!userAuth) return;
        yield call(getSnapshotFromUserAuth, userAuth);
    } catch (error) {
        yield put(signInFailed(error));
    }
}

export function* onCheckUserSession() {
    yield takeLatest(USER_ACTION_TYPES.CHECK_USER_SESSION, isUserAuthenticated)
}

export function* signInWithGoogle() {
    try {
        const { user } = yield call(signInWithGooglePopup);
        yield call(getSnapshotFromUserAuth, user);
    } catch (error) {
        yield put(signInFailed(error));
    }
}

export function* onGoogleSignInStart() {
    yield takeLatest(USER_ACTION_TYPES.GOOGLE_SIGN_IN_START, signInWithGoogle);
}

export function* signInWithEmail(action: { payload: { email, password }, type: string }) {
    try {
        const { user } = yield call(signInAuthUserWithEmailAndPassword, action.payload.email, action.payload.password);
        if (user) {
            yield call(getSnapshotFromUserAuth, user);
        }
    } catch (error) {
        yield put(signInFailed(error));
    }
}

export function* onEmailSignInStart() {
    yield takeLatest(USER_ACTION_TYPES.EMAIL_SIGN_IN_START, signInWithEmail);
}

export function* userSagas() {
    yield all([
            call(onCheckUserSession),
            call(onGoogleSignInStart),
            call(onEmailSignInStart)
        ]
    );
}