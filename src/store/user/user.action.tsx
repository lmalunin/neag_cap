import { USER_ACTION_TYPES } from "../../components/contexts/user.context";
import { createAction } from "../../utils/reducer.utils";

export const setCurrentUser = (user) =>
    createAction(USER_ACTION_TYPES.SET_CURRENT_USER, user);
