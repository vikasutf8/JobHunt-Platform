// import { setSingleCompany } from '@/redux/companySlice'
// import { setAllJobs } from '@/redux/jobSlice'
// import { COMPANY_API_END_POINT, JOB_API_END_POINT } from '@/utils/constant'
// import axios from 'axios'
// import { useEffect } from 'react'
// import { useDispatch } from 'react-redux'

// const useGetCompanyById = (companyId) => {
//     const dispatch = useDispatch();
//     useEffect(()=>{
//         const fetchSingleCompany = async () => {
//             try {
//                 const res = await axios.get(`${COMPANY_API_END_POINT}/get/${companyId}`,{withCredentials:true});
//                 console.log(res.data.company);
//                 if(res.data.success){
//                     dispatch(setSingleCompany(res.data.company));
//                 }
//             } catch (error) {
//                 console.log(error);
//             }
//         }
//         fetchSingleCompany();
//     },[companyId, dispatch])
// }

// export default useGetCompanyById


import { setSingleCompany } from '@/redux/companySlice';
import { setAllJobs } from '@/redux/jobSlice';
import { COMPANY_API_END_POINT, JOB_API_END_POINT } from '@/utils/constant';
import axios from 'axios';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

const useGetCompanyById = (companyId) => {
    const dispatch = useDispatch();

    useEffect(() => {
        const fetchSingleCompany = async () => {
            try {
                const res = await axios.get(`${COMPANY_API_END_POINT}/get/${companyId}`, { withCredentials: true });

                if (res.data.success) {
                    dispatch(setSingleCompany(res.data.company));
                } else {
                    console.log(`Failed to fetch company: ${res.data.message}`);
                }
            } catch (error) {
                // Enhanced error handling
                if (error.response) {
                    // Server responded with a status other than 2xx
                    console.error("Error response:", error.response.data);
                } else if (error.request) {
                    // No response was received from the server
                    console.error("Error request:", error.request);
                } else {
                    // Something went wrong while setting up the request
                    console.error("Error:", error.message);
                }
            }
        };

        fetchSingleCompany();
    }, [companyId, dispatch]);
};

export default useGetCompanyById;
