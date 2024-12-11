export const toDoReducer = (state, action) => {
    switch (action.type) {
        case 'add':
            return [...state, { id: Date.now(), text: action.text, completed: false }]
        case 'toggle':
            return state.map((todo) => todo.id === action.id ? { ...todo, completed: !todo.completed } : todo)
        case 'delete':
            return state.filter(todo => todo.id !== action.id)

        default:
            throw new Error("unknown action")
    }
}