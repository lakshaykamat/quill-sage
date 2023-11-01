"use client"
import { fetchUser, fetchUserNote } from "@/app/utils/api/user";
import { useQuery } from "@tanstack/react-query";
import { notFound } from "next/navigation";
import Header from "../components/Header";
import ProfileCards from "../components/ProfileCards";

const ProfilePage = ({ params }: { params: { userid: string } }) => {
    const { userid } = params
    const user_details = useQuery({
        queryKey: ["fetch_user", userid],
        queryFn: () => fetchUser(userid),
    });
    const user_notes = useQuery({
        queryKey: ["fetch_user_notes", userid],
        enabled: user_details.data != null,
        queryFn: () => user_details.data && fetchUserNote(user_details.data._id)
    });

    if (user_details.isLoading || user_notes.isLoading) return <h1>Loading...</h1>
    if (user_details.isError || user_notes.isError) return notFound()

    return (
        <div className="max-w-6xl mx-auto">
            <Header
                avatar={user_details.data.avatar}
                bio={user_details.data.bio}
                //@ts-ignore
                editBio={null}
                inputBox={null}
                setInputBox={null}
                username={user_details.data.username} />

            {
                user_notes.isLoading ? (
                    <h1>Loading...</h1>
                ) : (
                    <ProfileCards notes={user_notes.data} />
                )
            }
        </div>
    )
}

export default ProfilePage