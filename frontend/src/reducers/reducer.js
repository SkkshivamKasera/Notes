import { createReducer } from "@reduxjs/toolkit";

export const userReducer = createReducer({}, {
    "LoginRequest": (state) => {
        state.loading = true
    },
    "LoginSuccess": (state, action) => {
        state.loading = false
        state.message = action.payload
        state.isAuthenticated = true
    },
    "LoginFaliure": (state, action) => {
        state.loading = false
        state.error = action.payload
        state.isAuthenticated = false
    },
    "SignUpRequest": (state) => {
        state.loading = true
    },
    "SignUpSuccess": (state, action) => {
        state.loading = false
        state.message = action.payload
        state.isAuthenticated = true
    },
    "SignUpFaliure": (state, action) => {
        state.loading = false
        state.error = action.payload
        state.isAuthenticated = false
    },
    "LogoutRequest": (state) => {
        state.loading = true
    },
    "LogoutSuccess": (state, action) => {
        state.loading = false
        state.message = action.payload
        state.isAuthenticated = false
        state.user = null
    },
    "LogoutFaliure": (state, action) => {
        state.loading = false
        state.error = action.payload
        state.isAuthenticated = true
    },
    "GetUserRequest": (state) => {
        state.loading = true
    },
    "GetUserSuccess": (state, action) => {
        state.isAuthenticated = true
        state.loading = false
        state.user = action.payload
    },
    "GetUserFailure": (state, action) => {
        state.isAuthenticated = false
        state.loading = false
        state.error = action.payload
    },
    ForgotRequest: (state) => {
        state.loading = true
    },
    ForgotSuccess: (state, action) => {
        state.loading = false
        state.message = action.payload
    },
    ForgotFaliure: (state, action) => {
        state.loading = false
        state.error = action.payload
    },
    ResetRequest: (state) => {
        state.loading = true
    },
    ResetSuccess: (state, action) => {
        state.loading = false
        state.message = action.payload
    },
    ResetFaliure: (state, action) => {
        state.loading = false
        state.error = action.payload
    },
    "ClearError": (state) => {
        state.error = null
    },
    "ClearMessage": (state) => {
        state.message = null
    }
})

export const courseReducer = createReducer({}, {
    "CreateCourseRequest": (state) => {
        state.loading = true
    },
    "CreateCourseSuccess": (state, action) => {
        state.loading = false
        state.message = action.payload
    },
    "CreateCourseFailure": (state, action) => {
        state.loading = false
        state.error = action.payload
    },
    "GetAllCoursesRequest": (state) => {
        state.loading = true
    },
    "GetAllCoursesSuccess": (state, action) => {
        state.loading = false
        state.courses = action.payload
    },
    "GetAllCoursesFailure": (state, action) => {
        state.loading = false
        state.error = action.payload
    },
    "ClearError": (state) => {
        state.error = null
    },
    "ClearMessage": (state) => {
        state.message = null
    }
})

export const courseInfoReducer = createReducer({}, {
    "GetCourseInfoRequest": (state) => {
        state.loading = true
    },
    "GetCourseInfoSuccess": (state, action) => {
        state.loading = false
        state.course = action.payload
    },
    "GetCourseInfoFailure": (state, action) => {
        state.loading = false
        state.error = action.payload
    },
    "ClearError": (state) => {
        state.error = null
    },
    "ClearMessage": (state) => {
        state.message = null
    }
})

export const commonReducer = createReducer({}, {
    "EnrollRequest": (state) => {
        state.loading = true
    },
    "EnrollSuccess": (state, action) => {
        state.loading = false
        state.message = action.payload
    },
    "EnrollFailure": (state, action) => {
        state.loading = false
        state.error = action.payload
    },
    "RemoveEnrollRequest": (state) => {
        state.loading = true
    },
    "RemoveEnrollSuccess": (state, action) => {
        state.loading = false
        state.message = action.payload
    },
    "RemoveEnrollFailure": (state, action) => {
        state.loading = false
        state.error = action.payload
    },
    "UpdateAvatarRequest": (state) => {
        state.loading = true
    },
    "UpdateAvatarSuccess": (state, action) => {
        state.loading = false
        state.message = action.payload
    },
    "UpdateAvatarFailure": (state, action) => {
        state.loading = false
        state.error = action.payload
    },
    "CreateNoteRequest": (state) => {
        state.loading = true
    },
    "CreateNoteSuccess": (state, action) => {
        state.loading = false
        state.message = action.payload
    },
    "CreateNoteFailure": (state, action) => {
        state.loading = false
        state.error = action.payload
    },
    "ClearError": (state) => {
        state.error = null
    },
    "ClearMessage": (state) => {
        state.message = null
    }
})

export const noteReducer = createReducer({}, {
    "GetAllNotesRequest": (state) => {
        state.loading = true
    },
    "GetAllNotesSuccess": (state, action) => {
        state.loading = false
        state.notes = action.payload
    },
    "GetAllNotesFailure": (state, action) => {
        state.loading = false
        state.error = action.payload
    },
    "ClearError": (state) => {
        state.error = null
    },
    "ClearMessage": (state) => {
        state.message = null
    }
})