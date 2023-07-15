"use client"
import { useUserContext } from '@/app/context/user';
import { fetchUser, getNote, updateNote } from '@/app/lib'
import { getDate } from '@/app/lib/getDate';
import { Note, User } from '@/app/types';
import Image from 'next/image';
import { useEffect, useState, useContext } from 'react'
import { AiFillStar } from 'react-icons/ai';
import { notFound } from 'next/navigation';


const NotePage = ({ params }: { params: { note_id: string } }) => {
  const { note_id } = params;
  const [note, setNote] = useState<Note | null>(null)
  const [user, setUser] = useState<User | null>(null)

  const current_user:User = useUserContext()
  useEffect(() => {
    const fetch = async () => {
      //Fetching note with id on params object
      const res = await getNote(note_id)

      //Fetching user of this note
      const res2 = await fetchUser(res.user_id)
      setUser(res2)
      setNote(res)
    }
    fetch()
  }, [])


  const giveLike = (note: Note) => {
    //If user already likes the note
    if (note.likes.some(item => item.id === current_user._id)) {
      const existingLikes = note.likes
      
      //Removing the like to the user
      let data = JSON.stringify({
        likes: existingLikes.filter((item) => current_user._id != item.id),
      });
      setNote({ ...note, likes: existingLikes.filter((item) => current_user._id != item.id) })
      return updateNote(data, note_id)
    } else {
      //if user not liked this note
      const existingLikes = note.likes

      //Pushing user id to likes array of current user
      existingLikes.push({ id: current_user._id })
      let data = JSON.stringify({
        likes: existingLikes,
      });
      
      //Changing state of note to reflect the like change on screen
      setNote({ ...note, likes: existingLikes })
      
      //Updating note on server
      return updateNote(data, note_id)
    }
  }

  //If note is null show loading screen
  if (!note) {
    return <h1>Loading...</h1>
  } else {
    //if note has error properties show not found page
    if (note.error) {
      return notFound()
    } else {
      return (
        <main className='max-w-3xl mx-auto'>
          <h1 className='my-3 text-3xl font-bold'>{note.title}</h1>
          <div className='flex flex-col items-start gap-2 my-6 sm:flex-row md:items-center'>
            <div className='flex flex-wrap gap-5'>
              <div className='flex'>
                {user &&
                  <Image width={30} height={30} className='rounded-md' src={user.avatar} alt="User" />}
                <span className='ml-3'>{user && user.username}</span>
              </div>

              <span>{getDate(new Date(note.createdAt))}</span>
              <button onClick={() => giveLike(note)} className={`flex items-center gap-2 px-3 py-1 drop-shadow ${note.likes.some(item => item.id === current_user._id) ? "bg-red-400" : "bg-button"}`}>
                <AiFillStar />
                <span>{note.likes.length}</span>
              </button>
            </div>


          </div>
          <hr className='mb-4' />
          <p className='leading-loose' dangerouslySetInnerHTML={{ __html: note.content }}></p>
        </main>
      )
    }
  }
}

export default NotePage