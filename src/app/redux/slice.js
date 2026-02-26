// A slice is a collection of Redux reducer logic and actions for a single feature in your app, typically defined together in a single file. The createSlice() function accepts an initial state, an object full of reducer functions, and a "slice name", and automatically generates action creators and action types that correspond to the reducers and state.
import { createSlice, nanoid } from "@reduxjs/toolkit";
// import { configureStore } from "@reduxjs/toolkit";
const initialState = {
    users: JSON.parse(localStorage.getItem("users")) || [],
};

const userSlice = createSlice({
    name: "users",
    initialState,   
    reducers: {
        addUser: {
            reducer(state, action) {
                const data = {
                    id: action.payload.id,
                    name: action.payload.name,
                };
                    state.users.push(data);
                    let userData = JSON.stringify(state.users);
                    localStorage.setItem("users", userData);
                    // console.log("User added to state:", data);
                }
            },
            removeUser: {
                reducer(state, action) {
                    const userId = action.payload; // no .id here
                    state.users = state.users.filter((user) => user.id !== userId);
                    console.log("User removed from state with ID:", userId);
                    let userData = JSON.stringify(state.users);
                    localStorage.setItem("users", userData);
                }
            }
        },
    },
);

export const { addUser, removeUser } = userSlice.actions;
export default userSlice.reducer;