import { AnyAction } from "redux";
import { UserData } from "../../utils/firebase/frebase.utils";
import { signInFailed, signInSuccess, signOutFailed, signOutSuccess, signUpFailed } from "./user.action";

export type UserState = {
    readonly currentUser: UserData | null;
    readonly isLoading: boolean;
    readonly error: Error | unknown;
}

const INITIAL_STATE: UserState = {
    currentUser: null,
    isLoading: false,
    error: null,
}

export const userReducer = (state: UserState = INITIAL_STATE, action: AnyAction) => {
    console.log('dispathed', action);

    if (signInSuccess.match(action)) {
        return { ...state, currentUser: action.payload };
    }

    if (signOutSuccess.match(action)) {
        return { ...state, currentUser: null };
    }

    if (signInFailed.match(action)
        || signOutFailed.match(action)
        || signUpFailed.match(action)) {
        return { ...state, currentUser: action.payload };
    }

    return state;
}