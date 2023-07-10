"use client"
import { useEffect, useState } from "react"
import Card from "./components/Card"
import { Note } from "./types"
import { useRouter } from 'next/navigation'
import { getAllNotes } from "./lib"

const Feed = () => {
  // const notes = my_notes
  const [notes,setNotes] = useState<Note[] | null>(null)

  const router = useRouter()
  useEffect(() => {
    const fetch = async () => {
      const res = await getAllNotes() 
      if(res === "Unauthorized"){
        //TODO Create a error Page
        return router.push('/error')
      }
      setNotes(res)
    }
    fetch()
    console.log(notes)
  }, [])
   

  return (
    <div className="flex flex-col items-center max-w-2xl gap-3 mx-auto">
      <div className="flex justify-between w-full mb-2">
        <h1 className="mb-2 text-3xl font-bold text-start">My Feed</h1>
        <select className="px-3 text-sm rounded-lg bg-button drop-shadow-sm outline-gray-500">
          <option value="">Most Recent</option>
          <option value="">Most Liked</option>
        </select>
      </div>
      {!notes ? <h1>Wait...</h1> : 
        notes.map((note) => {
          return <Card
            key={note._id}
            title={note.title}
            likes={note.likes}
            content={note.content}
            date={note.createdAt}
            author={note.author} />
        })
      }
    </div>
  )
}
export default Feed