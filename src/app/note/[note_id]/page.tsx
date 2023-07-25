"use client"
import { useUserContext } from '@/app/context/user';
// import { fetchUser, getNote, updateNote } from '@/app/lib'
import { getDate } from '@/app/lib/getDate';
import { Note, User } from '@/app/types';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { PLACEHOLER_LIKE_ICON, SET_LIKE_ICON } from '@/app/assets/Icons';
import { fetchNote, fetchUser, updateNote } from '../../../../utils/api';
import { useQuery } from '@tanstack/react-query';


const NotePage = ({ params }: { params: { note_id: string } }) => {
  const { note_id } = params;
  const { current_user }: { current_user: User } = useUserContext()

  const note = useQuery({ queryKey: ["fetch_note"], queryFn: () => fetchNote(note_id) })
  const user = useQuery({ queryKey: ["fetch_user"], queryFn: () => fetchUser(note.data.user_id), enabled: !note.isLoading })


  if (note.isLoading) return <h1>Loading...</h1>
  if (note.isError) return <h1>Error</h1>


  const giveLike = async (that_note: Note) => {
    try {
      //If user already likes the note 
      if (that_note.likes.some(item => item.id === current_user._id)) {
        const existingLikes = that_note.likes

        await updateNote(note_id, {
          likes: existingLikes.filter((item) => current_user._id != item.id),
        })
      } else {
        //if user not liked this note
        const existingLikes = that_note.likes

        existingLikes.push({ id: current_user._id })

        await updateNote(note_id, { likes: existingLikes })

      }
    } catch (error) {
      console.log(error)
      return alert("Try Again Later...")
    }
    return note.refetch()
  }

  //If note is null show loading screen
  return (
    <main className='mx-5 lg:max-w-3xl lg:mx-auto'>
      <h1 className='text-center sm:text-start'>{note.data.title}</h1>
      <div className='flex flex-col items-center justify-center gap-4 mt-1 mb-3 sm:items-start sm:flex-row sm:justify-between'>
        <div className='flex flex-wrap items-center justify-center gap-5'>
          <div className='flex items-center '>
            {
              user.isLoading ? <p>Loading...</p> : user.isError ? <p>Error</p> :
                <>
                  <Image width={24} height={24} className='rounded-md' src={user.data.avatar} alt="User" />
                  <span className='ml-3 text-sm'>{user.data.username}</span>
                </>
            }
          </div>
          <span className='text-sm'>{getDate(note.data.createdAt)}</span>
        </div>

        {/* <button } className={`flex items-center gap-2 px-3 py-1 drop-shadow ${note.likes.some(item => item.id === current_user._id) ? "bg-red-400" : "bg-buttons"}`}> */}



        <button onClick={() => giveLike(note.data)} className='flex items-center gap-1'>
          {
            note.data.likes.some((item: { id: string; }) => item.id === current_user._id)
              ? <SET_LIKE_ICON classes={"text-red-500"} /> : 
              <PLACEHOLER_LIKE_ICON classes={"text-slate-800"} />
          }
          <span className='text-sm'>{note.data.likes.length}</span>
        </button>


      </div>
      <hr className='mb-4' />
      <p className='mx-auto prose' dangerouslySetInnerHTML={{ __html: note.data.content }}></p>
    </main>
  )
}

export default NotePage