"use client"
import Card from "./components/Card"
import { Note } from "./types"
import API, { fetchNotesOnFeed, fetchUser } from "../../utils/api"
import { useQuery } from "@tanstack/react-query"


const Feed = () => {
  // const [notes, setNotes] = useState<Note[] | null>(null)
  const feedNotesQuery = useQuery({queryKey:["feedNotes"],queryFn:()=>{
    return fetchNotesOnFeed()
  }})

  // const router = useRouter()
  // useEffect(() => {
  //   const controller = new AbortController();
  //   const fetchNotesOnFeed = async () => {
  //     try {
  //       const res = await api.get(`/notes/public`,{signal: controller.signal,withCredentials: true})
  //       setNotes(res.data)
  //     } catch (error:any) {
  //       console.log(error)
  //       if(error.response?.data === "Unauthorized"){
  //        return router.push(`${process.env.NEXT_PUBLIC_SERVER_URL}/auth/google`) 
  //       }
  //     }
  //   }
  //   fetchNotesOnFeed()
  //   return () => {
  //     controller.abort()
  //   }
  // }, [])
  // useEffect(() => {
  //   const fetch = async () => {
  //     const res = await getAllNotes()
  //     if (res === "Unauthorized") {
  //       //TODO Create a error Page
  //       return router.push(`${process.env.NEXT_PUBLIC_SERVER_URL}/auth/google`)
  //     }
  //     setNotes(res)
  //   }
  //   fetch()
  // }, [])

  if(feedNotesQuery.isLoading) return <h1>Loading...</h1>
  if(feedNotesQuery.isError) return <pre>Error: Refersh the page :(</pre>
  const public_notes: JSX.Element[] | JSX.Element = feedNotesQuery.data.map((note:Note) => {
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
  return (
    <div className="flex flex-col max-w-6xl gap-3 mx-auto my-12">
      {/* <div className="flex justify-between w-full mb-2">
        <h1 className="mb-2 text-3xl font-bold text-start">My Feed</h1>
        <select className="px-3 text-sm rounded-lg bg-button drop-shadow-sm outline-gray-500">
          <option value="">Most Recent</option>
          <option value="">Most Liked</option>
        </select>
      </div> */}
      <div className="grid grid-cols-1 gap-5 mx-5 lg:grid-cols-3 sm:grid-cols-2">
        {public_notes}
      </div>
    </div>
  )
}
export default Feed