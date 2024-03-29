import { takeLatest, put, all, call } from 'typed-redux-saga/macro';
import { User } from 'firebase/auth';
import {
    getCurrentUser,
    createUserDocumentFromAuth,
    signInWithGooglePopup,
    signInAuthUserWithEmailAndPassword, createAuthUserWithEmailAndPassword, signOutUser,
    AdditionalInformation
} from "../../utils/firebase/frebase.utils";
import { USER_ACTION_TYPES } from './user.types';
import {
    signInSuccess,
    signInFailed,
    signUpSuccess,
    signUpFailed,
    signOutStart,
    signOutSuccess,
    signOutFailed
} from './user.action';

export function* getSnapshotFromUserAuth(userAuth: User, additionalDetails?: AdditionalInformation) {
    try {
        const userSnapshot = yield call(createUserDocumentFromAuth, userAuth, additionalDetails);
        console.log('userSnapshot', userSnapshot);
        if (userSnapshot) {
            yield put(signInSuccess(
                { id: userSnapshot.id, ...userSnapshot?.data }
            ))
        }

    } catch (error: unknown | Error) {
        yield put(signInFailed(error as Error));
    }
}

export function* isUserAuthenticated() {
    try {
        const userAuth = yield* call(getCurrentUser);
        if (!userAuth) return;
        yield* call(getSnapshotFromUserAuth, userAuth);
    } catch (error) {
        yield put(signInFailed(error as Error));
    }
}

export function* onCheckUserSession() {
    yield takeLatest(USER_ACTION_TYPES.CHECK_USER_SESSION, isUserAuthenticated)
}

export function* signInWithGoogle() {
    try {
        const { user } = yield* call(signInWithGooglePopup);
        yield* call(getSnapshotFromUserAuth, user);
    } catch (error) {
        yield* put(signInFailed(error));
    }
}

export function* onGoogleSignInStart() {
    yield* takeLatest(USER_ACTION_TYPES.GOOGLE_SIGN_IN_START, signInWithGoogle);
}

export function* signInWithEmail(action: { payload: { email, password }, type: string }) {
    try {
        const authData = yield* call(signInAuthUserWithEmailAndPassword, action.payload.email, action.payload.password);
        if (authData?.user) {
            yield* call(getSnapshotFromUserAuth, authData.user);
        }
    } catch (error) {
        yield put(signInFailed(error));
    }
}

export function* onEmailSignInStart() {
    yield* takeLatest(USER_ACTION_TYPES.EMAIL_SIGN_IN_START, signInWithEmail);
}

export function* signUp(action) {
    try {
        const userCredential = yield* call(createAuthUserWithEmailAndPassword, action.payload.email, action.payload.password);
        if (userCredential) {
            const { user } = userCredential;
            yield* put(signUpSuccess(user, { displayName: action.payload.displayName }));
        }
    } catch (error) {
        yield* put(signUpFailed(error as Error));
    }
}

export function* onSignUpStart() {
    yield* takeLatest(USER_ACTION_TYPES.SIGN_UP_START, signUp)
}

export function* singInAfterSignUp(action) {
    yield* call(getSnapshotFromUserAuth, action.payload.user, action.payload.additionalDetails);
}

export function* onSignUpSuccess() {
    yield* takeLatest(USER_ACTION_TYPES.SIGN_UP_SUCCESS, singInAfterSignUp)
}

export function* signOut() {
    try {
        yield* call(signOutUser);
        yield* put(signOutSuccess());
    } catch (error: Error | unknown) {
        yield* put(signOutFailed(error));
    }
}

export function* onSignOutStart() {
    yield* takeLatest(USER_ACTION_TYPES.SIGN_OUT_START, signOut);
}

export function* userSagas() {
    yield* all([
            call(onCheckUserSession),
            call(onGoogleSignInStart),
            call(onEmailSignInStart),
            call(onSignUpStart),
            call(onSignUpSuccess),
            call(onSignOutStart),
        ]
    );
}