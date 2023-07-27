"use client"
import { useQuery } from "@tanstack/react-query";
import { userDetails } from "../utils/api";

const ProfilePage = () => {
    const user_details = useQuery({
        queryKey: ["fetch_user"],
        queryFn: () => {
            return userDetails();
        },
    });
    if(user_details.isLoading) return <h1>Loading...</h1>
    if(user_details.isError) return  <h1>Error</h1>
    if(user_details.data) return <pre>{JSON.stringify(user_details.data)}</pre>
}

export default ProfilePage