import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { removeTodo } from '../features/toDoSlice'

const Todos = () => {

    const todos = useSelector((state) => state.todos)
    const dispatch = useDispatch()
    console.log(todos)    
  return (
    <>
      {todos.map((item) => (
        <li key={item.id}>
            {item.text}
            <button onClick={() => dispatch(removeTodo(item.id))}>X</button>
        </li>
      ))}
    </>
  )
}

export default Todos
