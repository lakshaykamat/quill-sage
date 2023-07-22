"use client"
import { useEffect, useState } from "react"
import Card from "./components/Card"
import { Note } from "./types"
import { useRouter } from 'next/navigation'
import { getAllNotes } from "./lib"

const Feed = () => {
  const [notes, setNotes] = useState<Note[] | null>(null)

  const router = useRouter()
  useEffect(() => {
    const fetch = async () => {
      const res = await getAllNotes()
      if (res === "Unauthorized") {
        //TODO Create a error Page
        return window.open(`${process.env.NEXT_PUBLIC_SERVER_URL}/auth/google`)
      }
      setNotes(res)
    }
    fetch()
  }, [])


  return (
    <div className="flex flex-col max-w-6xl gap-3 mx-auto my-12">
      {/* <div className="flex justify-between w-full mb-2">
        <h1 className="mb-2 text-3xl font-bold text-start">My Feed</h1>
        <select className="px-3 text-sm rounded-lg bg-button drop-shadow-sm outline-gray-500">
          <option value="">Most Recent</option>
          <option value="">Most Liked</option>
        </select>
      </div> */}
      <div className="flex flex-wrap gap-5">
        {!notes ? <h1>Wait...</h1> :
          notes.map((note) => {
            return <Card
              key={note._id}
              note_id={note._id}
              user_id={note.user_id}
              title={note.title}
              likes={note.likes}
              tags={note.tags}
              content={note.content}
              date={note.createdAt} />
          })
        }
      </div>
    </div>
  )
}
export default Feed