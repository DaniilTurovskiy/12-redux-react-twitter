import { combineReducers } from "redux"
import { statsReducer } from "./statsReducer"
import { userReducer } from "./userReducer"


export const rootReducer = combineReducers({
    user: userReducer,
    stats: statsReducer
})