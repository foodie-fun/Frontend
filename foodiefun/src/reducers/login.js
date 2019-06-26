// import { FETCHING, SUCCESS, FAILURE, LOGIN_SUCCESS,  LOGIN_START } from "../actions";
// import { SIGNUP_START, SIGNUP_SUCCESS, SIGNUP_FAILURE, LOGIN_SUCCESS,  LOGIN_START } from "../actions";

// const initialState = {
//     error: null,
//     loggingIn: false,
//     signedUp: false
// }

// const signInReducer = (state = initialState, action) => {
//     switch (action.type) {
//         case SIGNUP_START:
//         return {
//             ...state,
//             loggingIn: true,
//             error: null
//         };
//         case SIGNUP_SUCCESS:
//         return {
//             ...state,
//             loggingIn: false,
//             signedUp: true
//         };
//         case SIGNUP_FAILURE:
//         return {
//             ...state,
//             loggingIn: false,
//             signedUp: false,
//             error: action.payload
//         };
//         case LOGIN_SUCCESS:
//         return {
//             ...state,
//             loggingIn: true,
//             error: null
//         };
//         case LOGIN_START:
//         return {
//             ...state,
//             loggingIn: false,
//             signedUp: true
//         };
//         default:
//             return state
//     }
// }

// export default signInReducer;