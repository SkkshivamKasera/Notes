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

export const createCourse = (name, desc, paid, price, CourseImage, docs_name) => async (dispatch) => {
    try{
        dispatch({type: "CreateCourseRequest"})
        const { data } = await axios.post(`${server_link}/api/v1/admin/new`, {
            name, desc, paid, price, CourseImage, docs_name
        },config1)
        dispatch({type: "CreateCourseSuccess", payload: data.message})
    }catch(error){
        if(error.response){
            dispatch({type: "CreateCourseFailure", payload: error.response.data.message})
        }else
        {
            dispatch({type: "CreateCourseFailure", payload: error.message})
        }
    }
}

export const getAllCourses = () => async (dispatch) => {
    try{
        dispatch({type: "GetAllCoursesRequest"})
        const { data } = await axios.get(`${server_link}/api/v1/getAllCourse`, config2)
        dispatch({type: "GetAllCoursesSuccess", payload: data.courses})
    }catch(error){
        if(error.response){
            dispatch({type: "GetAllCoursesFailure", payload: error.response.data.message})
        }else
        {
            dispatch({type: "GetAllCoursesFailure", payload: error.message})
        }
    }
}

export const getCourseInfo = (id) => async (dispatch) => {
    try{
        dispatch({type: "GetCourseInfoRequest"})
        const { data } = await axios.get(`${server_link}/api/v1/course/${id}`, config2)
        dispatch({type: "GetCourseInfoSuccess", payload: data.course})
    }catch(error){
        if(error.response){
            dispatch({type: "GetCourseInfoFailure", payload: error.response.data.message})
        }else
        {
            dispatch({type: "GetCourseInfoFailure", payload: error.message})
        }
    }
}

export const enrollCourse = (id) => async (dispatch) => {
    try{
        dispatch({type: "EnrollRequest"})
        const { data } = await axios.get(`${server_link}/api/v1/enroll/add/${id}`, config2)
        dispatch({type: "EnrollSuccess", payload: data.message})
    }catch(error){
        if(error.response){
            dispatch({type: "EnrollFailure", payload: error.response.data.message})
        }else
        {
            dispatch({type: "EnrollFailure", payload: error.message})
        }
    }
}

export const createNote = (name, img) => async(dispatch) => {
    try{
        dispatch({type: "CreateNoteRequest"})
        const { data } = await axios.post(`${server_link}/api/v1/admin/note/new`, {
            name, img
        }, config1)
        dispatch({type: "CreateNoteSuccess", payload: data.message})
    }catch(error){
        if(error.response){
            dispatch({type: "CreateNoteFailure", payload: error.response.data.message})
        }else
        {
            dispatch({type: "CreateNoteFailure", payload: error.message})
        }
    }
}

export const getAllNotes = () => async (dispatch) => {
    try{
        dispatch({type: "GetAllNotesRequest"})
        const { data } = await axios.get(`${server_link}/api/v1/getAllNotes`, config2)
        dispatch({type: "GetAllNotesSuccess", payload: data.notes})
    }catch(error){
        if(error.response){
            dispatch({type: "GetAllNotesFailure", payload: error.response.data.message})
        }else
        {
            dispatch({type: "GetAllNotesFailure", payload: error.message})
        }
    }
}