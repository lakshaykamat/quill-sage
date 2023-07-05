import Card from "./components/Card"
import { my_notes } from "./data"

const Feed = () => {
  const notes = my_notes
  return (
    <div className="flex flex-col items-center max-w-2xl gap-3 mx-auto">
      <div className="flex justify-between w-full mb-2">
        <h1 className="mb-2 text-3xl font-bold text-start">My Feed</h1>
        <select className="px-3 text-sm rounded-lg bg-button drop-shadow-sm outline-gray-500">
          <option value="">Most Recent</option>
          <option value="">Most Liked</option>
        </select>
      </div>
      {
        notes.map((note) => {
          return <Card
            key={note.id}
            title={note.title}
            likes={note.likes}
            description={note.description}
            date={note.date}
            author={note.author} />
        })
      }
    </div>
  )
}
export default Feed