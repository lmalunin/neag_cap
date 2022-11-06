import {createContext, useState, type Dispatch, useEffect,} from "react";
import {onAuthStateChangedListener} from "../../utils/firebase/frebase.utils";

export const UserContext = createContext({
    currentUser: null,
    setCurrentUser: (() => undefined) as Dispatch<any>,
});

export const UserProvider = ({children}) => {
    const [currentUser, setCurrentUser] = useState(null);
    const value = {currentUser, setCurrentUser};

    useEffect(() => {
        const ubsubscribe = onAuthStateChangedListener((user) => {
            console.log(user);
        })
        return ubsubscribe;
    }, [])

    return <UserContext.Provider value={value}>{children}</UserContext.Provider>
}