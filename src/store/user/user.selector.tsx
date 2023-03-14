import { createSelector } from "reselect";
import { UserData } from "../../utils/firebase/frebase.utils";
import { RootState } from "../store";
import { UserState } from "./user.reducer";

export const selectUserReducer = (state: RootState): UserState => state.user;

export const selectCurrentUser = createSelector(
    selectUserReducer,
    (user): UserData | null => user?.currentUser
)