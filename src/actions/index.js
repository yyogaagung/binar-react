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