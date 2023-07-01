import { AiFillStar, AiOutlineUser } from "react-icons/ai"

type Props = {}

const Feed = (props: Props) => {
    const notes = [
        {
          title: "Welcome",
          description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus amet ea quisquam voluptas cum doloribus facere dolores iste, inventore voluptatem.",
          date: "12 July 2014",
          likes: 23,
          author: "Lakshay"
        }
      ]
  return (
    <div className="flex flex-col items-center max-w-2xl gap-3 mx-auto">
    <div className="flex justify-between w-full mb-2yarn">
      <h1 className="mb-2 text-3xl font-bold text-start">My Feed</h1>
      <select className="px-3 text-sm bg-indigo-200 rounded-lg drop-shadow-sm outline-gray-500" name="" id="">
        <option value="">Most Recent</option>
        <option value="">Most Liked</option>
      </select>
    </div>
    {/* {
        notes.map(())
    } */}
    <Card/>
    <Card />
    <Card />
    <Card />
    <Card />
  </div>
  )
}
const Card = (props: Props) => {
    return (
        <div className="max-w-2xl p-6 bg-indigo-100 rounded-lg drop-shadow-md dark:bg-gray-800 dark:border-gray-700 outline-1 outline-black outline">
            <a href="#">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    Noteworthy technology acquisitions 2021
                </h5>
            </a>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                Here are the biggest enterprise technology acquisitions of 2021 so far, in
                reverse chronological order.
            </p>
            <div className="flex justify-between">
                <div className="flex items-center gap-3">

                    <AiOutlineUser />
                    <span>Lakshay</span>
                    <span>12 July 2023</span>
                </div>
                <div className="flex items-center gap-2">
                    <AiFillStar />
                    <span>23</span>
                </div>
            </div>
        </div>

    )
}
export default Feed