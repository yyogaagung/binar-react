import React, {Fragment, useState} from "react";
import {useSelector, useDispatch} from 'react-redux';
import {addTodo, deleteTodo} from './actions'


const ToDoComp = () => {
    const [todoList, setTodoList] = useState('');
    const todo = useSelector(state => state.todo.todo);
    const dispatch = useDispatch ();
    
    const updateTodo = (e) => {
        setTodoList(e.target.value);
    }

    const submitTodo = (e) => {
        e.preventDefault();
        dispatch(addTodo(todoList))    
    }


    return (
        <div className="App">
        
        <h1>Todo List</h1>
        {todo.length === 0 ? <h4>Tidak ada kegiatan</h4> : ''}        
                <ol>
                    {
                        todo.map((el, index)=>{
                            return(
                                <Fragment>
                                    <li key={index}>{el}</li>
                                    <form onSubmit={(e) => {e.preventDefault(); dispatch(deleteTodo(index))}}>
                                        <button >delete</button>
                                    </form>                                    
                                </Fragment>                               
                            )
                        })
                    }
                </ol>

        <form onSubmit={submitTodo}>
            <input type='text' name= {todoList} placeholder="Masukan kegiatan" onChange={updateTodo}></input>
            <button>submit</button>
        </form>
        
        </div>
    );
}

export default ToDoComp;