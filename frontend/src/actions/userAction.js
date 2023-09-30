import axios from 'axios'

const live_server_link = "https://notes-y8nr.onrender.com"
// const live_server_link = "http://localhost:5000"
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
        const { data } = await axios.post(`${live_server_link}/api/v1/login`, {
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
        const { data } = await axios.post(`${live_server_link}/api/v1/register`, {
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
        const { data } = await axios.get(`${live_server_link}/api/v1/me`,config2)
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
        const { data } = await axios.get(`${live_server_link}/api/v1/logout`,config2)
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

export const forgotPassword = (email) => async (dispatch) => {
    try{
        dispatch({type: "ForgotRequest"})
        const { data } = await axios.post(`${live_server_link}/api/v1/forgotpassword`, {
            email
        },config1)
        dispatch({type: "ForgotSuccess", payload: data.message})
    }catch(error){
        if(error.response){
            dispatch({type: "ForgotFaliure", payload: error.response.data.message})
        }else
        {
            dispatch({type: "ForgotFaliure", payload: error.message})
        }
    }
}

export const resetPassword = (token, password, confirmPassword) => async (dispatch) => {
    try{
        dispatch({type: "ResetRequest"})
        const { data } = await axios.post(`${live_server_link}/api/v1/resetpassword/${token}`, {
            password, confirmPassword
        },config1)
        dispatch({type: "ResetSuccess", payload: data.message})
    }catch(error){
        if(error.response){
            dispatch({type: "ResetFaliure", payload: error.response.data.message})
        }else
        {
            dispatch({type: "ResetFaliure", payload: error.message})
        }
    }
}

export const updateAvatar = (image) => async (dispatch) => {
    try{
        dispatch({type: "UpdateAvatarRequest"})
        const { data } = await axios.post(`${live_server_link}/api/v1/me/update/avatar`, {
            image
        },config1)
        dispatch({type: "UpdateAvatarSuccess", payload: data.message})
    }catch(error){
        if(error.response){
            dispatch({type: "UpdateAvatarFailure", payload: error.response.data.message})
        }else
        {
            dispatch({type: "UpdateAvatarFailure", payload: error.message})
        }
    }
}