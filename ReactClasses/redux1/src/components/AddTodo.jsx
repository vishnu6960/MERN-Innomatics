import React, { useState } from 'react'
import { addTodo } from '../features/toDoSlice'
import { useDispatch } from 'react-redux'

const AddTodo = () => {

    const [input, setInput] = useState("")
    const dispatch = useDispatch()

    function handleSubmit(e){
        e.preventDefault()
        dispatch(addTodo(input))
        setInput("")

    }
    return (
        <>
            <form onSubmit={handleSubmit}>
                <input type="text"          
                  placeholder='enter your text'
                    value={input}
                    onChange={(e) => setInput(e.target.value)}     />
                <button type='submit'>Add</button>
            </form>
        </>
    )
}

export default AddTodo
