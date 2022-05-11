import { combineReducers } from "redux";
import toDoReducer from "./toDo";
import counterReducer from "./Counter";
import postReducer from "./postReducer";

const allReducer = combineReducers({
    counter : counterReducer,
    todo : toDoReducer,
    post : postReducer
});

export default allReducer;

