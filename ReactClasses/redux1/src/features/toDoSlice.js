import { createSlice, nanoid } from '@reduxjs/toolkit'

const initialState = {
  todos: [{id : 1, text : "Hello World!"}]
}

export const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    addTodo:(state, action) =>{
        const todo = {
            id : nanoid(),
            text : action.payload
        }

        state.todos.push(todo)
    },

    removeTodo:(state, action) =>{
        state.todos = state.todos.filter((item) => item.id !== action.payload)
    },
  },
})

// Action creators are generated for each case reducer function
export const { addTodo, removeTodo } = todoSlice.actions

export default todoSlice.reducer