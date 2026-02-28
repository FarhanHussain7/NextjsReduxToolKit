// A slice is a collection of Redux reducer logic and actions for a single feature in your app, typically defined together in a single file. The createSlice() function accepts an initial state, an object full of reducer functions, and a "slice name", and automatically generates action creators and action types that correspond to the reducers and state.
import { createSlice, nanoid, createAsyncThunk } from "@reduxjs/toolkit";
// import { configureStore } from "@reduxjs/toolkit";

// Initial state without localStorage to avoid hydration mismatch
const initialState = {
    users: [],
    apiData: [],
    loading: false,
    error: null,
};

// Async thunk for fetching API data
export const fetchApiData = createAsyncThunk("users/fetchApiData", async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await response.json();
    return data;
});

const userSlice = createSlice({
    name: "users",
    initialState,   
    reducers: {
        addUser(state, action) {
            const data = {
                id: action.payload.id,
                name: action.payload.name,
            };
            state.users.push(data);
            // Only access localStorage on client side
            if (typeof window !== 'undefined') {
                let userData = JSON.stringify(state.users);
                localStorage.setItem("users", userData);
            }
            // console.log("User added to state:", data);
        },
        removeUser(state, action) {
            const userId = action.payload; // no .id here
            state.users = state.users.filter((user) => user.id !== userId);
            console.log("User removed from state with ID:", userId);
            // Only access localStorage on client side
            if (typeof window !== 'undefined') {
                let userData = JSON.stringify(state.users);
                localStorage.setItem("users", userData);
            }
        },
        // New action to hydrate state from localStorage
        hydrateUsers(state, action) {
            state.users = action.payload;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchApiData.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchApiData.fulfilled, (state, action) => {
                state.loading = false;
                state.apiData = action.payload;
            })
            .addCase(fetchApiData.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            });
    },
});

export const { addUser, removeUser, hydrateUsers } = userSlice.actions;
export default userSlice.reducer;