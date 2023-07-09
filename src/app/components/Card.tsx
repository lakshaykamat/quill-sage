import { AiFillStar, AiOutlineUser } from "react-icons/ai"
import { getDate } from "../lib/getDate";

type CardProps = {
    title: string,
    content: string,
    date: string,
    likes: number,
    author?: string
    //FIX Author not NULL is server
}
const Card = ({ title, content, date, author, likes }: CardProps) => {
    const DESCRIPTION_LENGTH:number = 200;
    const description:string = content.length > DESCRIPTION_LENGTH ? `${content.slice(0, DESCRIPTION_LENGTH)}...` : content;
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
                    <span>{author ? author : "No"}</span>
                    <span>{getDate(new Date(date))}</span>
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