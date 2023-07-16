"use client"
import { useEffect, useState } from 'react'
import { getAllUserNotes, getUser } from '../lib'
import { Note, User } from '../types'
import Image from 'next/image'
import { getDate } from '../lib/getDate'


const Profile = () => {
    const [userData, setUserData] = useState<User | null>(null)
    const [userPublicNote, setIUserPublicNote] = useState<Note[] | null>(null)

    useEffect(() => {
        const fetch = async () => {
            const data = await getUser()
            const res = await getAllUserNotes()
            setIUserPublicNote(res)
            setUserData(data)
        }
        fetch()
    }, [])

    if (!userData || !userPublicNote) {
        return <h1>Loading User Data...</h1>
    } else {
        return (
            <main>
                <div className='flex items-center justify-start gap-12'>
                    <Image className='rounded-full drop-shadow' src={userData.avatar} height={150} width={150} alt='User avatar' />
                    <div>
                        <h1 className='text-4xl font-bold'>{userData.username}</h1>
                        <p className='mt-1'>Joined at: {getDate(new Date(userData.createdAt))}</p>
                    </div>
                </div>
                <hr className='mt-5' />
                <div>
                    <h2 className='mt-6 mb-3 text-3xl font-bold'>Public Notes</h2>
                    <div className='flex flex-col max-w-3xl gap-3 mx-auto'>
                        {
                            userPublicNote.map((note) => {
                                return <Card key={note._id}
                                tags={note.tags}
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
            </main>
        )
    }
}
const Card = (props: { tags:Array<string>,note_id: string, user_id: string, title: string, likes: Array<{ id: string }>, content: string, date: string }) => {
    const DESCRIPTION_LENGTH: number = 200;
    const description: string = props.content.length > DESCRIPTION_LENGTH ? `${props.content.slice(0, DESCRIPTION_LENGTH)}...` : props.content;

    return (
        <div className='px-4 py-3 my-3 rounded-md bg-light'>
            <h1 className='text-2xl'>{props.title}</h1>
            <div className="flex flex-wrap gap-3 mb-3">
                    {
                        props.tags.map((tag,index)=>{
                            return (<span key={index} className="px-2 py-1 text-sm rounded-md bg-very_light drop-shadow">{tag}</span>)
                        })
                    }
                </div>
            <div className='flex gap-1 mb-3'>
                <p>Likes {props.likes.length}</p> | 
                <p>{getDate(new Date(props.date))}</p>
            </div>
            <p dangerouslySetInnerHTML={{ __html: description }}></p>
        </div>
    )
}
export default Profile