import { setAllAdminJobs } from '@/redux/jobSlice';
import { JOB_API_END_POINT } from '@/utils/constant';
import axios from 'axios';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

const useGetAllAdminJobs = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        const fetchAllAdminJobs = async () => {
            try {
                const res = await axios.get(`${JOB_API_END_POINT}/getadminjobs`, { withCredentials: true });

                if (res.data.success) {
                    dispatch(setAllAdminJobs(res.data.jobs));
                } else {
                    console.log("Failed to fetch admin jobs:", res.data.message);
                }
            } catch (error) {
                console.error("Error fetching admin jobs:", error.response?.data || error.message);
            }
        };

        fetchAllAdminJobs();
    }, [dispatch]); // Ensure the effect runs on mount, and `dispatch` is included in the dependency array
};

export default useGetAllAdminJobs;
