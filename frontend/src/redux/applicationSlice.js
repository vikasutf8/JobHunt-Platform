// import { createSlice } from "@reduxjs/toolkit";

// const applicationSlice = createSlice({
//     name:'application',
//     initialState:{
//         applicants:null,
//     },
//     reducers:{
//         setAllApplicants:(state,action) => {
//             state.applicants = action.payload;
//         }
//     }
// });
// export const {setAllApplicants} = applicationSlice.actions;
// export default applicationSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";

// Global initial state
const initialState = {
    applicants: null,
};

const applicationSlice = createSlice({
    name: 'application',
    initialState,
    reducers: {
        setAllApplicants: (state, action) => {
            state.applicants = action.payload;
        },
    },
});

// Exporting actions and reducer
export const { setAllApplicants } = applicationSlice.actions;
export default applicationSlice.reducer;
