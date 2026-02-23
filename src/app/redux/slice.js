// A slice is a collection of Redux reducer logic and actions for a single feature in your app, typically defined together in a single file. The createSlice() function accepts an initial state, an object full of reducer functions, and a "slice name", and automatically generates action creators and action types that correspond to the reducers and state.
import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    users: [],
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
                    console.log("User added to state:", data);
                }
            }
        },
    },
);

export const { addUser } = userSlice.actions;
export default userSlice.reducer;