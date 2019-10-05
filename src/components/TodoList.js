import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { toggleTodoAction, deleteTodoAction } from '../redux';
const TodoList = () => {
    const todos = useSelector(state => state.todos);
    const dispatch = useDispatch();

    const onChange = (id) => {
        dispatch(toggleTodoAction(id))
    }

    const onDelete = (id) => {
        dispatch(deleteTodoAction(id))
    }
    return (
       <ul className="todolist">
           {todos.map(todo => (
               <li key={todo.id}>
               <input type="checkbox" checked={todo.complete} onChange={() => onChange(todo.id)}/>
               <span className={todo.complete ? 'complete' : null}>{todo.name}</span>
               <span className="delete-button" onClick={() => onDelete(todo.id)}>X</span>
               </li>
           ))}
       </ul>
    )
}

export default TodoList