import { configureStore } from '@reduxjs/toolkit'
import { courseReducer, userReducer, courseInfoReducer, commonReducer, noteReducer } from "./reducers/reducer"

export const store = configureStore({
    reducer: {
        user: userReducer,
        course: courseReducer,
        note: noteReducer,
        courseInfo: courseInfoReducer,
        common: commonReducer
    }
})