"use client"
import { fetchUser } from "@/app/utils/api";
import { useQuery } from "@tanstack/react-query";
import { notFound } from "next/navigation";

const ProfilePage = ({ params }: { params: { userid: string } }) => {
    const {userid} = params
    const user_details = useQuery({
        queryKey: ["fetch_user"],
        queryFn: () => {
            return fetchUser(userid);
        },
    });
    if(user_details.isLoading) return <h1>Loading...</h1>
    if(user_details.isError) return  notFound()
    if(user_details.data) return <pre>{JSON.stringify(user_details.data)}</pre>
}

export default ProfilePage