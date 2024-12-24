// import { createSlice } from "@reduxjs/toolkit";



// const companySlice = createSlice({
//     name:"company",
//     initialState:{
//         singleCompany:null,
//         companies:[],
//         searchCompanyByText:"",
//     },
//     reducers:{
//         // actions
//         setSingleCompany:(state,action) => {
//             state.singleCompany = action.payload;
//         },
//         setCompanies:(state,action) => {
//             state.companies = action.payload;
//         },
//         setSearchCompanyByText:(state,action) => {
//             state.searchCompanyByText = action.payload;
//         }
//     }
// });
// export const {setSingleCompany, setCompanies,setSearchCompanyByText} = companySlice.actions;
// export default companySlice.reducer;


import { createSlice } from "@reduxjs/toolkit";

// Global initial state
const initialState = {
    singleCompany: null,
    companies: [],
    searchCompanyByText: "",
};

const companySlice = createSlice({
    name: "company",
    initialState,
    reducers: {
        // Actions
        setSingleCompany: (state, action) => {
            state.singleCompany = action.payload;
        },
        setCompanies: (state, action) => {
            state.companies = action.payload;
        },
        setSearchCompanyByText: (state, action) => {
            state.searchCompanyByText = action.payload;
        },
    },
});

// Export actions and reducer
export const { setSingleCompany, setCompanies, setSearchCompanyByText } = companySlice.actions;
export default companySlice.reducer;
