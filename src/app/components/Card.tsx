import { AiFillStar, AiOutlineUser } from "react-icons/ai"
import { getDate } from "../lib/getDate";
import { useEffect,useState } from "react";
import { User } from "../types";
import { fetchUser } from "../lib";
import Image from "next/image";
import Link from "next/link";

type CardProps = {
    note_id:string
    title: string,
    user_id:string
    content: string,
    date: string,
    likes: Array<{id:string}>,
    tags:Array<string>
}
const Card = ({ title, content, date, likes,user_id,note_id ,tags}: CardProps) => {
    
    const [user,setUser] = useState<User | null>(null)

    useEffect(() => {
      const fetch = async () => {
        const res = await fetchUser(user_id)  
        setUser(res)
      }
      fetch()
    }, [])
    
    const DESCRIPTION_LENGTH:number = 200;
    const description:string = content.length > DESCRIPTION_LENGTH ? `${content.slice(0, DESCRIPTION_LENGTH)}...` : content;
    return (
        <div className="w-full p-6 rounded-lg outline bg-light drop-shadow-md dark:bg-gray-800 dark:border-gray-700 outline-1 outline-black">
                <Link href={`/note/${note_id}`}>
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    {title}
                </h5>
                </Link>
                <div className="flex flex-wrap gap-3 mb-3">
                    {
                        tags.map((tag,index)=>{
                            return (<span key={index} className="px-2 py-1 text-sm rounded-md bg-very_light drop-shadow">{tag}</span>)
                        })
                    }
                </div>
            <p dangerouslySetInnerHTML={{__html: description}} className="mb-3 font-normal text-gray-700 dark:text-gray-400"></p>
            <div className="flex justify-between">
                <div className="flex items-center gap-3">
                    {user ? 
                    <Image src={user.avatar} className="rounded-sm" alt="User avatar" width={24} height={24}/> :
                    <AiOutlineUser/>
                    }
                    <Link href={`/profile/${user_id}`}>{user ? user.username : "User"}</Link> |
                    <span>{getDate(new Date(date))}</span>
                </div>
                <div className="flex items-center gap-2">
                    <AiFillStar />
                    <span>{likes.length}</span>
                </div>
            </div>
        </div>
    )
}
export default Card