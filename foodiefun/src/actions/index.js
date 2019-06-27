import axios from 'axios';
import axiosWithAuth from "../axiosWithAuth";
export const FETCHING = 'FETCHING';
export const SUCCESS = 'SUCCESS';
export const FAILURE = 'FAILURE';


// Sign Up 
export const SIGNUP_START = 'SIGNUP_START';
export const SIGNUP_SUCCESS = 'SIGNUP_SUCCESS';
export const SIGNUP_FAILURE = 'SIGNUP_FAILURE';
export const signUp = creds => dispatch => {
    dispatch({
        type: SIGNUP_START
    })
    return axios
        .post(`https://foodiefun-be.herokuapp.com/api/new/register`, creds)
        .then(res => {
            console.log(res)
            localStorage.setItem('token', res.data.payload);
            dispatch({
                type: SIGNUP_SUCCESS,
                payload: res.data.payload
            });
            setUser();
        })
        .catch(err => {
            dispatch({
                type: SIGNUP_FAILURE,
                payload: err
            })
        })
}
export const setUser = () => dispatch => {
    dispatch({
        type: FETCHING
    });
    axios
        .get(`https://foodiefun-be.herokuapp.com/api/new/register`, {
            headers: {
                Authorization: localStorage.setItem('token')
            }
        })
        .then(res => {
            console.log(res)
            dispatch({
                type: SUCCESS,
                payload: res.data
            });
        })
        .catch(err => {
            dispatch({
                type: FAILURE,
                payload: err
            });
        });
};



// Login and request 
export const LOGIN_START = 'LOGIN_START';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';
export const login = creds => dispatch => {
    dispatch({
        type: LOGIN_START
    })
    return axios
        .post(`https://foodiefun-be.herokuapp.com/api/new/login`, creds)
        .then(res => {
            console.log(res)
            localStorage.setItem('token', res.data.token);
            localStorage.setItem('current', res.data.id);
            dispatch({
                type: LOGIN_SUCCESS,
                payload: res.data.payload
            });
            getUser();
        })
        .catch()
}

export const getUser = () => dispatch => {
    dispatch({
        type: FETCHING
    });
    axios
        .get(`https://foodiefun-be.herokuapp.com/api/new/login`, {
            headers: {
                Authorization: localStorage.getItem('token')
            }
        })
        .then(res => {
            console.log(res)
            dispatch({
                type: SUCCESS,
                payload: res.data
            });
        })
        .catch(err => {
            dispatch({
                type: LOGIN_FAILURE,
                payload: err
            });
        });
};

export const ADD_POST_START = 'ADD_POST_START';
export const ADD_POST_SUCCESS = 'ADD_POST_SUCCESS';
export const ADD_POST_FAILURE = 'ADD_POST_FAILURE';
export const addPost = post => dispatch => {
    // console.log(post)
    dispatch({
        type: ADD_POST_START
    });
    return axiosWithAuth()
        .post(`https://foodiefun-be.herokuapp.com/api/auth/review`, post)
        .then(res => {
            console.log(res);
            dispatch({
                type: ADD_POST_SUCCESS,
                payload: res.config.data
            })
        })
        .catch(err => {
            dispatch({
                type: ADD_POST_FAILURE,
                payload: err
            })
        })
}

export const GET_START = 'GET_START';
export const GET_SUCCESS = 'GET_SUCCESS';
export const GET_FAILURE = 'GET_FAILURE';
export const getPost = id => dispatch => {
    // console.log(post)
    dispatch({
        type: GET_START
    });
    axiosWithAuth()
        .get(`https://foodiefun-be.herokuapp.com/api/auth/review/user/${id}`)
        .then(res => {
            console.log(res)
            dispatch({
                type: GET_SUCCESS,
                payload: res.data
            })
        })
        .catch(err => {
            dispatch({
                type: GET_FAILURE,
                payload: err
            })
        })
}

// export const [SIGNUP_START, SIGNUP_SUCCESS, SIGNUP_FAIL] = [
//     "SIGNUP_START",
//     "SIGNUP_SUCCESS",
//     "SIGNUP_FAIL"
//   ];


// delete
export const DELETE_START = 'DELETE_START';
export const DELETE_SUCCESS = 'DELETE_SUCCESS';
export const DELETE_FAIL = 'DELETE_FAIL';
export const deletePost = id => dispatch => {
    dispatch({
        type: DELETE_START
    });
    return axiosWithAuth()
        .delete(`https://foodiefun-be.herokuapp.com/api/auth/review/${id}`)
        .then(res => {
            console.log(res)
            dispatch({
                type: DELETE_SUCCESS,
            })            
        })      
        .catch(err => {
            dispatch({
                type: DELETE_FAIL,
                payload: err
            })
        })
}


//update
export const UPDATE_START = 'UPDATE_START';
export const UPDATE_SUCCESS = 'UPDATE_SUCCESS';
export const UPDATE_FAIL = 'UPDATE_FAIL';
export const updatePost = item => dispatch => {
    console.log(item)
    dispatch({
        type: UPDATE_START
    });
    return axiosWithAuth()
        .put(`https://foodiefun-be.herokuapp.com/api/auth/review/${item.id}`, item)
        .then(res => {
            console.log(res)
            dispatch({
                type: UPDATE_SUCCESS,
                payload: res.data
            })
        })
        .catch(err => {
            dispatch({
                type: UPDATE_FAIL,
                payload: err
            })
        })
}

//
export const PUT_ON_STATE = "PUT_ON_STATE";
export const putOnState = (updateObj) => {
    return {
        type: PUT_ON_STATE,
        payload: updateObj
    }
}


// SEARCH
export const SEARCH = "SEARCH";
export const searchBar = search => {
    return { type: SEARCH, payload: search };
};