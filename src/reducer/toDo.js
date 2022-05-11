const initialState = {
    todo: []
}

const toDoReducer= (state = initialState, action) => {
    switch(action.type){
        case 'ADDTODO':
            return {
                    ...state,
                    todo : [...state.todo, action.payload]
                }  
        case 'DELETE/TODO':
            const temp = [...state.todo];
            const result = temp.filter((val, index) => index !== action.index);
            return { 
                ...state,               
                todo : result
            }
        default:
            return state
    }
}

export default toDoReducer;