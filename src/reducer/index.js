import { combineReducers } from "redux";
import toDoReducer from "./toDo";
import counterReducer from "./Counter";

const allReducer = combineReducers({
    counter : counterReducer,
    todo : toDoReducer
});

export default allReducer;

