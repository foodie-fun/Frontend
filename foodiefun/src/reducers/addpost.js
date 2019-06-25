// import { FETCHING, SUCCESS, FAILURE, LOGIN_SUCCESS,  LOGIN_START } from "../actions";
import { ADD_POST_SUCCESS, ADD_POST_FAILURE, SU} from "../actions";

const initialState = {
    error: null,
    reviews: [],
}

const addPostReducer = (state = initialState, action) => {
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
        case SU:
            return {
                ...state,
                reviews: action.payload
            }       
        default:
            return state
    }
}

export default addPostReducer;