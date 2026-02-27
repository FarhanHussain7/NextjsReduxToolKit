import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = { 
    todos: []
}

const Slice=createSlice({
    name:"todoList",
    initialState,
    reducers:{
        addTodo:(state,action)=>{
            const data={
                id:nanoid(),
                title:action.payload.title,
                description:action.payload.description
            }
            state.todos.push(data)
        }
    }
})

export const {addTodo}=Slice.actions
export default Slice.reducer    