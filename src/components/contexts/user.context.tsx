import {createContext, useState, type Dispatch,} from "react";

export const UserContext = createContext({
    currentUser: null,
    setCurrentUser: (() => undefined) as Dispatch<any>,
});

export const UserProvider = ({children}) => {
    const [currentUser, setCurrentUser] = useState(null);
    const value = {currentUser, setCurrentUser};
    return <UserContext.Provider value={value}>{children}</UserContext.Provider>
}