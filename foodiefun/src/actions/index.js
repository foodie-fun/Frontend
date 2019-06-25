import axios from 'axios';
export const FETCHING = 'FETCHING';
export const SUCCESS = 'SUCCESS';
export const FAILURE = 'FAILURE';




// Sign Up 
export const SIGNUP_START='SIGNUP_START';
export const SIGNUP_SUCCESS='SIGNUP_SUCCESS';
export const SIGNUP_FAILURE='SIGNUP_FAILURE';
export const signUp = creds => dispatch =>{
    dispatch({ type: SIGNUP_START })
    return axios
        .post(`https://foodiefun-be.herokuapp.com/api/new/register`, creds)
        .then(res => {
            console.log(res)
            localStorage.setItem('token', res.data.payload);
            dispatch({ type: SIGNUP_SUCCESS, payload: res.data.payload});
            setUser();
        })
        .catch(err => {
            dispatch({ type: SIGNUP_FAILURE, payload: err})
        })
}

export const setUser = () => dispatch => {
    dispatch({type: FETCHING});
    axios
        .get(`https://foodiefun-be.herokuapp.com/api/new/register`, { 
            headers: { Authorization: localStorage.setItem('token')}
        })
        .then(res => {
            console.log(res)
        dispatch({type: SUCCESS, payload: res.data});
    })
    .catch(err => {
        dispatch({type: FAILURE, payload: err});
    });
};



// Login and request 
export const LOGIN_START='LOGIN_START';
export const LOGIN_SUCCESS='LOGIN_SUCCESS';
export const LOGIN_FAILURE='LOGIN_FAILURE';
export const login = creds => dispatch =>{
    dispatch({ type: LOGIN_START })
    return axios
        .post(`https://foodiefun-be.herokuapp.com/api/new/login`, creds)
        .then(res => {
            console.log(res)
            localStorage.setItem('token', res.data.payload);
            dispatch({ type: LOGIN_SUCCESS, payload: res.data.payload});
            getUser();
        })
        .catch()
}

export const getUser = () => dispatch => {
    dispatch({type: FETCHING});
    axios
        .get(`https://foodiefun-be.herokuapp.com/api/new/login`, { 
            headers: { Authorization: localStorage.getItem('token')}
        })
        .then(res => {
            console.log(res)
        dispatch({type: SUCCESS, payload: res.data});
    })
    .catch(err => {
        dispatch({type: LOGIN_FAILURE, payload: err});
    });
};

