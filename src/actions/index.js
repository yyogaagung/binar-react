import axios from "axios";

export const increment= () => {
    return {
        type: 'STATE/INCREMENT',
    };
};

export const decrement = () => {
    return {
        type: 'STATE/DECREMENT'
    };
};

export const input = (num) => {
    return {
        type: 'STATE/INCREMENT + X',
        payload: num * 1
    };
};

export const addTodo = (value) => {
    return {
        type: 'ADDTODO',
        payload: value
    };
};
export const deleteTodo = (index) => {
    return {
        type: 'DELETE/TODO',
        index
    };
};
const fetchPostStart = () => {
    return {
        type: 'POST/FETCH-START',
    };
};
const fetchPostSuccess = (payload) => {
    return {
        type: 'POST/FETCH-SUCCESS',
        payload
    };
};
const fetchPostFailed= (payload) => {
    return {
        type: 'POST/FETCH-FAILED',
        payload
    };
};

export const fetchPostAsync = () => {
    return function(dispatch, getState) {
        dispatch(fetchPostStart())
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then((response) => {
            // console.log(response);
            dispatch(fetchPostSuccess(response.data))
        })
        .catch((error) => {
            // console.log(error)
            dispatch(fetchPostFailed(error))
        })
    };
};