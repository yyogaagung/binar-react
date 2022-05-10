const counterReducer = (state = 0, action) =>{
    switch(action.type){
        case 'STATE/INCREMENT':
            return state + 1;
        case 'STATE/DECREMENT':
            return state - 1;
        case 'STATE/INCREMENT + X':
            return state + action.payload;
        default:
            return state;
    }
}

export default counterReducer;