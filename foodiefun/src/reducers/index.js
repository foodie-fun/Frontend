import signInReducer from "./login";
import addPostReducer from './addpost'
import { combineReducers } from "redux";

const rootReducer = combineReducers({
    signInReducer,
    addPostReducer
});

export default rootReducer;