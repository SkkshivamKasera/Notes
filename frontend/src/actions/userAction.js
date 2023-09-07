import axios from 'axios'

const server_link = "http://localhost:5000"
const config1 = {
    headers: {
        "Content-Type": "application/json"
    },
    withCredentials: true
}
const config2 = {
    withCredentials: true
}

export const login = (email, password) => async (dispatch) => {
    try{
        dispatch({type: "LoginRequest"})
        const { data } = await axios.post(`${server_link}/api/v1/login`, {
            email, password
        },config1)
        dispatch({type: "LoginSuccess", payload: data.message})
    }catch(error){
        if(error.response){
            dispatch({type: "LoginFaliure", payload: error.response.data.message})
        }else
        {
            dispatch({type: "LoginFaliure", payload: error.message})
        }
    }
}

export const signup = (name, email, password) => async (dispatch) => {
    try{
        dispatch({type: "SignUpRequest"})
        const { data } = await axios.post(`${server_link}/api/v1/register`, {
            name, email, password
        },config1)
        dispatch({type: "SignUpSuccess", payload: data.message})
    }catch(error){
        if(error.response){
            dispatch({type: "SignUpFaliure", payload: error.response.data.message})
        }else
        {
            dispatch({type: "SignUpFaliure", payload: error.message})
        }
    }
}

export const loaduser = () => async (dispatch) => {
    try{
        dispatch({type: "GetUserRequest"})
        const { data } = await axios.get(`${server_link}/api/v1/me`,config2)
        dispatch({type: "GetUserSuccess", payload: data.user})
    }catch(error){
        if(error.response){
            dispatch({type: "GetUserFailure", payload: error.response.data.message})
        }else
        {
            dispatch({type: "GetUserFailure", payload: error.message})
        }
    }
}

export const logout = () => async (dispatch) => {
    try{
        dispatch({type: "LogoutRequest"})
        const { data } = await axios.get(`${server_link}/api/v1/logout`,config2)
        dispatch({type: "LogoutSuccess", payload: data.message})
    }catch(error){
        if(error.response){
            dispatch({type: "LogoutFaliure", payload: error.response.data.message})
        }else
        {
            dispatch({type: "LogoutFaliure", payload: error.message})
        }
    }
}