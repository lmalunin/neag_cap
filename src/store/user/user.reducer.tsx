import { USER_ACTION_TYPES } from "./user.types";


const INITIAL_STATE = {
    currentUser: null,
    isLoading: false,
    error: null,
}

export const userReducer = (state = INITIAL_STATE, action) => {
    console.log('dispathed', action);
    const { type, payload } = action;

    switch (type) {
        case USER_ACTION_TYPES.SIGN_IN_SUCCESS: {
            return { ...state, currentUser: payload }
        }
        case USER_ACTION_TYPES.SIGN_IN_FAILED: {
            return { ...state, currentUser: payload }
        }
        default: {
            return state;
        }
    }
}