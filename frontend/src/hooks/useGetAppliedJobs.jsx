import { setAllAppliedJobs } from "@/redux/jobSlice";
import { APPLICATION_API_END_POINT } from "@/utils/constant";
import axios from "axios";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

const useGetAppliedJobs = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        const fetchAppliedJobs = async () => {
            try {
                const res = await axios.get(`${APPLICATION_API_END_POINT}/get`, { withCredentials: true });

                if (res.data.success) {
                    if (res.data.application.length === 0) {
                        console.log("No applied jobs found.");
                    } else {
                        dispatch(setAllAppliedJobs(res.data.application));
                    }
                } else {
                    console.log("Server responded with an issue: ", res.data.message);
                }

            } catch (error) {
                console.error("Error occurred while fetching applied jobs:", error.response?.data || error.message);
            }
        };

        fetchAppliedJobs();
    }, [dispatch]);

};

export default useGetAppliedJobs;
