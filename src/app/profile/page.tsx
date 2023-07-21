"use client"
import { FormEvent, useEffect, useState } from 'react'
import { getAllUserNotes, getUser, updateUser } from '../lib'
import { Note, User } from '../types'
import Image from 'next/image'
import { getDate } from '../lib/getDate'
import { AiFillHeart, AiOutlineEdit } from 'react-icons/ai'
import { LuLayoutGrid, LuLayoutList } from 'react-icons/lu'
import Link from 'next/link'

const LAYOUT = {
    GRID: 'grid',
    LIST: 'list'
}
const Profile = () => {
    const [userData, setUserData] = useState<User | null>(null)
    const [userPublicNote, setIUserPublicNote] = useState<Note[] | null>(null)
    const [layout, setLayout] = useState(LAYOUT.GRID)
    const [userBioInput, setUserBioInput] = useState({ status: false, text: "" })

    useEffect(() => {
        const fetch = async () => {
            const data = await getUser()
            const res = await getAllUserNotes()
            setIUserPublicNote(res)
            setUserData(data)
            setUserBioInput({ ...userBioInput, text: data.bio })
        }
        fetch()
    }, [])

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if (!userData) return alert("User Data is Null")
        const res = await updateUser(userData._id, userBioInput.text)
        if (res.success) setUserBioInput({ ...userBioInput, status: false })
    }
    const note = userPublicNote && userPublicNote.map((note) => {
        return <Card key={note._id}
            tags={note.tags}
            note_id={note._id}
            user_id={note.user_id}
            title={note.title}
            likes={note.likes}
            content={note.content}
            date={note.createdAt} />
    })
    if (!userData || !userPublicNote) {
        return <h1>Loading User Data...</h1>
    } else {
        return (
            <main>
                <div className='flex items-center justify-start gap-5'>
                    <Image className='rounded-full drop-shadow' src={userData.avatar} alt='User avatar' width={100} height={100} />
                    <div>
                        <h1 className='text-2xl font-bold sm:text-3xl'>{userData.username}</h1>

                        {
                            !userBioInput.status &&
                            <p   
                                className={`flex items-center mt-1 ${!userBioInput.text && "text-gray-500"} cursor`}>
                                {userBioInput.text ? userBioInput.text : "Add bio"}
                                <AiOutlineEdit onClick={() => setUserBioInput({...userBioInput,status:true})} className='mx-2 cursor-pointer' />
                            </p>
                        }
                        {
                            userBioInput.status &&
                            <form onSubmit={(e) => handleSubmit(e)}>
                                <input
                                    autoFocus
                                    type='text'
                                    value={userBioInput.text}
                                    onBlur={() => setUserBioInput({ ...userBioInput, status: false })}
                                    onChange={(e) => setUserBioInput({ ...userBioInput, text: e.target.value })}
                                    className='px-2 py-1 border-b-2 outline-none bg-inherit border-primary ' />
                            </form>
                        }
                    </div>
                </div>
                <hr className='mt-5' />
                <div>
                    <div className='flex items-center justify-between'>
                        <h2 className='mt-6 mb-3 text-xl font-bold sm:text-2xl'>Public Notes</h2>
                        <div className='flex gap-3'>
                            <button onClick={() => setLayout(LAYOUT.GRID)} className={`rounded p-1 ${layout === LAYOUT.GRID && 'bg-gray-200'}`}>
                                <LuLayoutGrid className='w-6 h-6' />
                            </button>
                            <button onClick={() => setLayout(LAYOUT.LIST)} className={`rounded p-1 ${layout === LAYOUT.LIST && 'bg-gray-200'}`}>
                                <LuLayoutList className='w-6 h-6' />
                            </button>
                        </div>
                    </div>

                    {layout === LAYOUT.LIST ? <LIST_LAYOUT note={note} /> : <GRID_LAYOUT note={note} />}
                </div>
            </main>
        )
    }
}
const Card = (props: { tags: Array<string>, note_id: string, user_id: string, title: string, likes: Array<{ id: string }>, content: string, date: string }) => {

    const DESCRIPTION_LENGTH: number = 100;
    const description: string = props.content.length > DESCRIPTION_LENGTH ? `${props.content.slice(0, DESCRIPTION_LENGTH)}...` : props.content;

    const TITLE_LENGTH: number = 22;
    const title: string = props.title.length > TITLE_LENGTH ? `${props.title.slice(0, TITLE_LENGTH)}...` : props.title;

    const tags = props.tags.map((tag, index) => {
        return (<span key={index} className="px-2 py-1 text-xs text-white bg-gray-500 rounded">{tag}</span>)
    })
    return (
        <div className='px-4 py-3 my-3 transition-all rounded-md outline-1 outline outline-primary hover:bg-primary drop-shadow bg-light'>
            <Link href={`/note/${props.note_id}`}>
                <div className='flex items-center justify-between over'>
                    <h1 className='overflow-hidden text-lg font-semibold leading-normal sm:text-xl'>{title}</h1>
                    <button className='flex flex-row items-center justify-center gap-1'>
                        <AiFillHeart className='w-3 h-3 text-red-500' />
                        <span className='text-xs'>{props.likes.length}</span>
                    </button>
                </div>
                <div className="flex flex-wrap gap-3 my-1">
                    {tags}
                </div>
                <p className='mt-1 mb-3'>{getDate(new Date(props.date))}</p>
                
                {/* <div className='flex gap-1 mb-3'>
                <p>{getDate(new Date(props.date))}</p>
            </div> */}
                <p dangerouslySetInnerHTML={{ __html: description }}></p>
            </Link>
        </div>
    )
}

const GRID_LAYOUT = ({ note }: { note: JSX.Element[] | null }) => {
    return (
        <div className='grid grid-cols-2 gap-3 mx-auto lg:grid-cols-3'>
            {note}
        </div>
    )
}

const LIST_LAYOUT = ({ note }: { note: JSX.Element[] | null }) => {
    return (
        <div className='flex flex-col max-w-3xl gap-3 mx-auto'>
            {note}
        </div>
    )
}
export default Profile