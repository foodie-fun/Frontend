// import signInReducer from "./login";
// import addPostReducer from './addpost'
// import { combineReducers } from "redux";

// const rootReducer = combineReducers({
//     signInReducer,
//     addPostReducer
// });

// export default rootReducer;

// import { FETCHING, SUCCESS, FAILURE, LOGIN_SUCCESS,  LOGIN_START } from "../actions";
import { ADD_POST_SUCCESS, ADD_POST_FAILURE, GET_SUCCESS} from "../actions";
import { SIGNUP_START, SIGNUP_SUCCESS, SIGNUP_FAILURE, LOGIN_SUCCESS,  LOGIN_START } from "../actions";
import {DELETE_SUCCESS, DELETE_FAIL, UPDATE_START, UPDATE_SUCCESS, UPDATE_FAIL, PUT_ON_STATE} from '../actions'


const initialState = {
    error: null,
    reviews: [],
    loggingIn: false,
    signedUp: false,
    delete: false,
    updating: false,
    editedObject: []
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST_SUCCESS:
        return {
            ...state,
            error: false,
            reviews: [...state.reviews, action.payload]
        }; 
        case ADD_POST_FAILURE:
        return {
            ...state,
            error: true
        }; 
        case GET_SUCCESS:
            return {
                ...state,
                reviews: action.payload
            } 
            case SIGNUP_START:
        return {
            ...state,
            loggingIn: true,
            error: null
        };
        case SIGNUP_SUCCESS:
        return {
            ...state,
            loggingIn: false,
            signedUp: true
        };
        case SIGNUP_FAILURE:
        return {
            ...state,
            loggingIn: false,
            signedUp: false,
            error: action.payload
        };
        case LOGIN_SUCCESS:
        return {
            ...state,
            loggingIn: true,
            error: null
        };
        case LOGIN_START:
        return {
            ...state,
            loggingIn: false,
            signedUp: true
        };
        case DELETE_SUCCESS:
            return {
                ...state,
                delete: true
            }
        case DELETE_FAIL:
            return {
                delete: false
            }
        case UPDATE_START:
            return {
                ...state,
                updating: true,
            } 
        case UPDATE_SUCCESS:
            return {
                ...state,
                updating: false,
            }
        case UPDATE_FAIL:
            return {
                ...state,
                updating: false,
            } 
        case PUT_ON_STATE:
            return {
                ...state,
                editedObject: [...state.reviews, action.payload]
            } 
        default:
            return state
    }
}

export default reducer;
