"use client"
import { fetchUser, fetchUserNotesById } from "@/app/lib"
import { Note, User } from "@/app/types";
import { useEffect, useState } from "react";
import Image from "next/image";
import { getDate } from "@/app/lib/getDate";
import { NoteTakingSVG } from "@/app/assets/Illustrations";
const Profile = ({ params }: { params: { userid: string } }) => {
    const { userid } = params;
    const [userData, setUserData] = useState<User | null>(null)
    const [userPublicNote, setIUserPublicNote] = useState<Note[] | null>(null)

    useEffect(() => {
        const fetch = async () => {
            const data = await fetchUser(userid)
            const res = await fetchUserNotesById(userid)
            setIUserPublicNote(res)
            setUserData(data)
            console.log(data,res)
        }
        fetch()
    }, [])

    if(!userData){
        return <h1>loading user...</h1>
    }else{
        return(<main>
        <div className='flex items-center justify-start gap-12'>
            <Image className='rounded-full drop-shadow' src={userData.avatar} height={150} width={150} alt='User avatar' />
            <div>
                <h1 className='text-4xl font-bold'>{userData.username}</h1>
                <p className='mt-1'>Joined at: {getDate(new Date(userData.createdAt))}</p>
            </div>
        </div>
        <hr className='mt-5' />
        {userPublicNote && userPublicNote.length === 0 ? (
            <div className="flex flex-col items-center mt-12 justify-normal">
                <NoteTakingSVG/>
                <h1 className="mt-6 font-semibold">Note not created yet</h1>
            </div>
        ) :
        <div>
            <h2 className='mt-6 mb-3 text-3xl font-bold'>Public Notes</h2>
            <div className='flex flex-col max-w-3xl gap-3 mx-auto'>
                {
                    userPublicNote && userPublicNote.map((note) => {
                        return <Card key={note._id}
                            note_id={note._id}
                            user_id={note.user_id}
                            title={note.title}
                            likes={note.likes}
                            content={note.content}
                            date={note.createdAt} />
                    })
                }
            </div>
        </div>
    }
    </main>)

    }

}

const Card = (props: { note_id: string, user_id: string, title: string, likes: Array<{ id: string }>, content: string, date: string }) => {
    const DESCRIPTION_LENGTH: number = 200;
    const description: string = props.content.length > DESCRIPTION_LENGTH ? `${props.content.slice(0, DESCRIPTION_LENGTH)}...` : props.content;

    return (
        <div className='px-4 py-3 my-3 rounded-md bg-light'>
            <h1 className='text-2xl'>{props.title}</h1>
            <div className='flex gap-1 mb-3'>
                <p>Likes {props.likes.length}</p> | 
                <p>{getDate(new Date(props.date))}</p>
            </div>
            <p dangerouslySetInnerHTML={{ __html: description }}></p>
        </div>
    )
}
export default Profile