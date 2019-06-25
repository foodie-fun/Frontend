import signInReducer from "./login";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
    signInReducer,
});

export default rootReducer;