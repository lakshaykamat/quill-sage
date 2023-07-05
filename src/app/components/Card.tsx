import { AiFillStar, AiOutlineUser } from "react-icons/ai"

type CardProps = {
    title: string,
    description: string,
    date: string,
    likes: number,
    author: string
}
const Card = ({ title, description, date, author, likes }: CardProps) => {
    return (
        <div className="w-full p-6 rounded-lg outline bg-light drop-shadow-md dark:bg-gray-800 dark:border-gray-700 outline-1 outline-black">
            <a href="#">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    {title}
                </h5>
            </a>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                {description}
            </p>
            <div className="flex justify-between">
                <div className="flex items-center gap-3">

                    <AiOutlineUser />
                    <span>{author}</span>
                    <span>{date}</span>
                </div>
                <div className="flex items-center gap-2">
                    <AiFillStar />
                    <span>{likes}</span>
                </div>
            </div>
        </div>
    )
}
export default Card