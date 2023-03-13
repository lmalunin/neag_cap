import { User } from "firebase/auth";
import { AdditionalInformation } from "../../utils/firebase/frebase.utils";
import { Action, ActionWithPayload, createAction, withMatcher } from "../../utils/reducer.utils";
import { USER_ACTION_TYPES } from "./user.types";

export type CheckUserSession = Action<USER_ACTION_TYPES.CHECK_USER_SESSION>;
export type SetCurrentUser = ActionWithPayload<USER_ACTION_TYPES.SET_CURRENT_USER, User>;
export type GoogleSignInStart = Action<USER_ACTION_TYPES.GOOGLE_SIGN_IN_START>;
export type EmailSignInStart = ActionWithPayload<USER_ACTION_TYPES.EMAIL_SIGN_IN_START, { email: string, password: string }>;
export type SignInSuccess = ActionWithPayload<USER_ACTION_TYPES.SIGN_IN_SUCCESS, User>;
export type SignInFailed = ActionWithPayload<USER_ACTION_TYPES.SIGN_IN_FAILED, Error | unknown>;
export type SignUpStart = ActionWithPayload<USER_ACTION_TYPES.SIGN_UP_START, {
    email: string,
    password: string,
    displayName: string
}>;
export type SignUpSuccess = ActionWithPayload<USER_ACTION_TYPES.SIGN_UP_SUCCESS, {
    user: User,
    additionalDetails: AdditionalInformation
}>;
export type SignUpFailed = ActionWithPayload<USER_ACTION_TYPES.SIGN_UP_FAILED, Error>;
export type SignOutStart = Action<USER_ACTION_TYPES.SIGN_OUT_START>;
export type SignOutSuccess = Action<USER_ACTION_TYPES.SIGN_OUT_SUCCES>;
export type SignOutFailed = ActionWithPayload<USER_ACTION_TYPES.SIGN_OUT_FAILED, Error | unknown>;


export const checkUserSession = withMatcher((): CheckUserSession => createAction(USER_ACTION_TYPES.CHECK_USER_SESSION));
export const setCurrentUser = withMatcher((user: User): SetCurrentUser =>
    createAction(USER_ACTION_TYPES.SET_CURRENT_USER, user));
export const googleSignInStart = withMatcher((): GoogleSignInStart => createAction(USER_ACTION_TYPES.GOOGLE_SIGN_IN_START));
export const emailSignInStart = withMatcher((email: string, password: string): EmailSignInStart =>
    createAction(USER_ACTION_TYPES.EMAIL_SIGN_IN_START, {
        email,
        password
    }));
export const signInSuccess = withMatcher((user: User): SignInSuccess => createAction(USER_ACTION_TYPES.SIGN_IN_SUCCESS, user));
export const signInFailed = withMatcher((error: Error | unknown): SignInFailed => createAction(USER_ACTION_TYPES.SIGN_IN_FAILED, error));
export const signUpStart = withMatcher((email: string, password: string, displayName: string): SignUpStart =>
    createAction(USER_ACTION_TYPES.SIGN_UP_START, {
        email,
        password,
        displayName
    }));
export const signUpSuccess = withMatcher((user: User, additionalDetails: AdditionalInformation): SignUpSuccess =>
    createAction(USER_ACTION_TYPES.SIGN_UP_SUCCESS, {
        user,
        additionalDetails
    }));
export const signUpFailed = withMatcher((error: Error): SignUpFailed => createAction(USER_ACTION_TYPES.SIGN_UP_FAILED, error));


export const signOutStart = withMatcher((): SignOutStart => createAction(USER_ACTION_TYPES.SIGN_OUT_START));
export const signOutSuccess = withMatcher((): SignOutSuccess => createAction(USER_ACTION_TYPES.SIGN_OUT_SUCCES));
export const signOutFailed = withMatcher((error: Error | unknown): SignOutFailed => createAction(USER_ACTION_TYPES.SIGN_OUT_FAILED, error));