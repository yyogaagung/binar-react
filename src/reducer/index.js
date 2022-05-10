import { combineReducers } from "redux";
import loggedReducer from "./IsLogged";
import counterReducer from "./Counter";

const allReducer = combineReducers({
    counter : counterReducer,
    logged : loggedReducer
});

export default allReducer;

