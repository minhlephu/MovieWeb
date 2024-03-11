import { applyMiddleware, combineReducers, createStore } from "redux";
import ModalTrailerReducer from "./reducers/ModalTrailerReducer"
import AuthReducer from './reducers/AuthReducer'
import TimeFrameReducer from "./reducers/TimeFrameReducer";
import { thunk } from "redux-thunk";
const rootReducer = combineReducers({
    ModalTrailerReducer,
    AuthReducer,
    TimeFrameReducer
})

export const store = createStore(rootReducer,applyMiddleware(thunk));