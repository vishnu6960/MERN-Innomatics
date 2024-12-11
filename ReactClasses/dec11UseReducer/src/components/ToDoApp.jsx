import React, { useReducer, useState } from 'react'
import { toDoReducer } from './reducer'

const ToDoApp = () => {
    const [todos, dispatch] = useReducer(toDoReducer, [])
    const [text, setText] = useState("")

    const handleAddTodo = () =>{
        if(text.trim() === ""){
            return
        }
        dispatch({type: 'add', text})
        setText("")
    }
  return (
    <div>
      <h1>Todo List</h1>
      <input type="text" value={text} onChange={(e) => setText(e.target.value)} />
      <button onClick={handleAddTodo}>Add</button>
        <ul>
            {todos.map((todo) => (
                <li key={todo.id} style={{textDecoration: todo.completed ? 'line-through' : 'none'}}>
                    {todo.text}
                    <button onClick={() => dispatch({type: 'toggle', id: todo.id})}>{todo.completed ? 'undo' : 'completed'}</button>
                    <button onClick={() => dispatch({type: 'delete', id: todo.id})}>Delete</button>
                </li>
            ))}
        </ul>
    </div>
  )
}

export default ToDoApp
