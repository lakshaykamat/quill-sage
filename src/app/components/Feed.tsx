import Card from "./feed/Card"

const Feed = () => {
    const notes = [
        {
          title: "Welcome to Snap Note",
          description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus amet ea quisquam voluptas cum doloribus facere dolores iste, inventore voluptatem.",
          date: "12 July 2014",
          likes: 23,
          author: "Lakshay"
        },
        {
          title: "React is Osm",
          description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus amet ea quisquam voluptas cum doloribus facere dolores iste, inventore voluptatem consectetur adipisicing elit. Minus amet ea quisquam voluptas cum doloribus facere dolores iste, inventore voluptatem ",
          date: "2 Feb 2004",
          likes: 203,
          author: "Jhonny"
        },
      ]
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
        notes.map((item,index)=>{
           return <Card key={index} title={item.title} likes={item.likes} description={item.description} date={item.date} author={item.author}/>
        })
    }
  </div>
  )
}
export default Feed