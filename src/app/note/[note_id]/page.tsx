"use client"
import { getNote, updateNote } from '@/app/lib'
import { getDate } from '@/app/lib/getDate';
import { Note } from '@/app/types';
import { useEffect, useState } from 'react'
import { AiFillStar } from 'react-icons/ai';

const NotePage = ({ params }: { params: { note_id: string } }) => {
  const { note_id } = params;
  const [note, setNote] = useState<Note | null>(null)
  //const [likes, setLikes] = useState<number | null>(0)


  useEffect(() => {
    const fetch = async () => {
      const res = await getNote(note_id)
      console.log(res)
      setNote(res)
    }
    fetch()
  }, [])


  const giveLike = (note: Note) => {
    if(note.likes.includes(note.user_id)) {
      const existingLikes = note.likes
      let data = JSON.stringify({
        likes: existingLikes.filter((item)=> note.user_id != item) ,
      });
      setNote({...note,likes:existingLikes.filter((item)=> note.user_id != item)})
      return updateNote(data, note_id)
    }
    
    const existingLikes = note.likes
    existingLikes.push(note.user_id)
    let data = JSON.stringify({
      likes: existingLikes,
    });
    setNote({...note,likes:existingLikes})
    updateNote(data, note_id)
   //alert("Updated Note :)")
  }
  return (
    <main className='mx-auto prose'>
      {
        !note ? <h1>Loading...</h1>
          :
          <>
            <h1>{note.title}</h1>

            <div className='flex items-center gap-2'>
              <span>{note.author}</span> |
              <span>{getDate(new Date(note.createdAt))}</span>
              <button onClick={() => giveLike(note)} className={`flex items-center gap-2 px-3 py-1 drop-shadow ${note.likes.includes(note.user_id) ? "bg-red-400" : "bg-button"}`}>
                <AiFillStar />
                <span>{note.likes.length}</span>
              </button>
            </div>
            <hr />
            <p dangerouslySetInnerHTML={{ __html: note.content }}></p>
          </>
      }
    </main>
  )
}

export default NotePage