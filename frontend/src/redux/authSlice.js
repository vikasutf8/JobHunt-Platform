// import { createSlice } from "@reduxjs/toolkit";

// const authSlice = createSlice({
//     name:"auth",
//     initialState:{
//         loading:false,
//         user:null
//     },
//     reducers:{
//         // actions
//         setLoading:(state, action) => {
//             state.loading = action.payload;
//         },
//         setUser:(state, action) => {
//             state.user = action.payload;
//         }
//     }
// });
// export const {setLoading, setUser} = authSlice.actions;
// export default authSlice.reducer;



import { createSlice } from "@reduxjs/toolkit";

// Global initial state
const initialState = {
    loading: false,
    user: null,
};

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        setLoading: (state, action) => {
            state.loading = action.payload; // Modify state based on action
        },
        setUser: (state, action) => {
            state.user = action.payload; // Update user in state
        },
    },
});

// Export actions and reducer
export const { setLoading, setUser } = authSlice.actions;
export default authSlice.reducer;
