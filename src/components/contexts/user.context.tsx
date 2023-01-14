// import { createContext, type Dispatch, useEffect, useReducer, } from "react";
// import { createUserDocumentFromAuth, onAuthStateChangedListener } from "../../utils/firebase/frebase.utils";
// import { createAction } from "../../utils/reducer.utils";
//
// export const UserContext = createContext({
//     currentUser: null,
//     setCurrentUser: (() => undefined) as Dispatch<any>,
// });
//
// export const USER_ACTION_TYPES = {
//     SET_CURRENT_USER: 'SET_CURRENT_USER'
// }
//
// const userReducer = (state, action) => {
//     console.log('dispathed', action);
//     const { type, payload } = action;
//
//     switch (type) {
//         case USER_ACTION_TYPES.SET_CURRENT_USER: {
//             return {
//                 currentUser: payload
//             }
//         }
//         default: {
//             throw new Error(`Unhandled type ${type} in userReducer`);
//         }
//     }
// }
//
// const INITIAL_STATE = {
//     currentUser: null
// }
//
// export const UserProvider = ({ children }) => {
//     const [{ currentUser }, dispatch] = useReducer(userReducer, INITIAL_STATE);
//     console.log(currentUser);
//     const setCurrentUser = (user) => {
//         dispatch(createAction(USER_ACTION_TYPES.SET_CURRENT_USER, user));
//     }
//     const value = { currentUser, setCurrentUser };
//
//     useEffect(() => {
//         const ubsubscribe = onAuthStateChangedListener((user) => {
//             if (user) {
//                 createUserDocumentFromAuth(user);
//             }
//             setCurrentUser(user);
//         })
//         return ubsubscribe;
//     }, [])
//
//     return <UserContext.Provider value={value}>{children}</UserContext.Provider>
// }