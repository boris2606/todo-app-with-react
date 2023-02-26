import { createSlice } from "@reduxjs/toolkit";

let todo = JSON.parse(localStorage.getItem("todo"))
let deleteTodo = JSON.parse(localStorage.getItem("deleteTodo"))

const toolkitSlice = createSlice({
    name: 'toolkit',
    initialState: {
        todo: !todo ? [] : todo,
        deleteTodo: !deleteTodo ? [] : deleteTodo,
    },
    reducers: {
        addTodo(state,action){
            state.todo.push(action.payload) 
            localStorage.setItem('todo',JSON.stringify(state.todo))
        },
        removeTodo(state,action){
            state.deleteTodo.push(state.todo.find(todo => todo.id === action.payload)) 
            state.todo = state.todo.filter(todo => todo.id !== action.payload)
            localStorage.setItem('todo',JSON.stringify(state.todo))
            localStorage.setItem('deleteTodo',JSON.stringify(state.deleteTodo))
        },
        completeTodo(state,action){
            const toogleComplete = state.todo.find(todo => todo.id === action.payload)
            toogleComplete.complete = !toogleComplete.complete
            localStorage.setItem('todo',JSON.stringify(state.todo))
        },
        removeDeletedTodo(state,action){
            state.deleteTodo = state.deleteTodo.filter(todo => todo.id !== action.payload)
            localStorage.setItem('deleteTodo',JSON.stringify(state.deleteTodo))
        },
        removeAllDeletedTodo(state){
            localStorage.removeItem('deleteTodo')
        }
    }
})

export default toolkitSlice.reducer
export const {addTodo,removeTodo,completeTodo,removeDeletedTodo,removeAllDeletedTodo} = toolkitSlice.actions