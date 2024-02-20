import { combineReducers, createStore } from "redux";
import ModalTrailerReducer from "./reducers/ModalTrailerReducer"
const rootReducer = combineReducers({
    ModalTrailerReducer,
})

export const store = createStore(rootReducer);