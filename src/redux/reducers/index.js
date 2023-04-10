import { combineReducers } from "redux";
import { loadUserData } from "utils/functions.util";
import { userLogin } from "./userLoginReducer";

export const allReducer = combineReducers({
  userLogin(state = loadUserData(), action) {
    return userLogin(state, action);
  },
});
