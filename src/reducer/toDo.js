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
            return {
                todo : state.todo.filter( (item, index) => index !== action.index)
            }
        default:
            return state
    }
}

export default toDoReducer;