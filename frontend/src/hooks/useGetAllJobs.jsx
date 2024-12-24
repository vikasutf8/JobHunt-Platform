// import { setAllJobs } from '@/redux/jobSlice'
// import { JOB_API_END_POINT } from '@/utils/constant'
// import axios from 'axios'
// import { useEffect } from 'react'
// import { useDispatch, useSelector } from 'react-redux'

// const useGetAllJobs = () => {
//     const dispatch = useDispatch();
//     const {searchedQuery} = useSelector(store=>store.job);
//     useEffect(()=>{
//         const fetchAllJobs = async () => {
//             try {
//                 const res = await axios.get(`${JOB_API_END_POINT}/get?keyword=${searchedQuery}`,{withCredentials:true});
//                 if(res.data.success){
//                     dispatch(setAllJobs(res.data.jobs));
//                 }
//             } catch (error) {
//                 console.log(error);
//             }
//         }
//         fetchAllJobs();
//     },[])
// }

// export default useGetAllJobs

import { setAllJobs } from '@/redux/jobSlice';
import { JOB_API_END_POINT } from '@/utils/constant';
import axios from 'axios';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const useGetAllJobs = () => {
    const dispatch = useDispatch();
    const { searchedQuery } = useSelector((store) => store.job);

    useEffect(() => {
        const fetchAllJobs = async () => {
            if (!searchedQuery) {
                console.log("No search query provided");
                return;
            }

            try {
                const res = await axios.get(`${JOB_API_END_POINT}/get?keyword=${searchedQuery}`, {
                    withCredentials: true,
                });
                if (res.data.success) {
                    dispatch(setAllJobs(res.data.jobs));
                } else {
                    console.log("Failed to fetch jobs:", res.data.message);
                }
            } catch (error) {
                console.error("Error fetching jobs:", error.response?.data || error.message);
            }
        };

        fetchAllJobs();
    }, [searchedQuery, dispatch]); // Added `searchedQuery` as dependency to trigger effect when the search query changes

};

export default useGetAllJobs;
