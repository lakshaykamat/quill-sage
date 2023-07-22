import { AiFillStar, AiOutlineUser } from "react-icons/ai"
import { getDate } from "../lib/getDate";
import { useEffect,useState } from "react";
import { User } from "../types";
import { fetchUser } from "../lib";
import Image from "next/image";
import Link from "next/link";
import { PLACEHOLER_LIKE_ICON } from "../assets/Icons";

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
    
    const DESCRIPTION_LENGTH:number = 100;
    const description:string = content.length > DESCRIPTION_LENGTH ? `${content.slice(0, DESCRIPTION_LENGTH)}...` : content;
    const TITLE_LENGTH:number = 20;
    const short_title:string = title.length > TITLE_LENGTH ? `${title.slice(0, TITLE_LENGTH)}...` : title;
    return (
        <div className="flex flex-col max-w-sm p-6 rounded-lg bg-slate-600 drop-shadow-md">
            <div className="flex justify-between">
                <Link href={`/note/${note_id}`}>
                <h2 title={title} className="text-slate-100">
                    {short_title}
                </h2>
                </Link>
                {PLACEHOLER_LIKE_ICON}
            </div>
                <div className="flex flex-wrap gap-3 mb-3">
                    {
                        tags.map((tag,index)=>{
                            return (<span key={index} className="px-2 py-1 text-sm rounded-md text-slate-100 bg-slate-500 drop-shadow">{tag}</span>)
                        })
                    }
                </div>
            <p dangerouslySetInnerHTML={{__html: description}} className="mb-3 font-normal leading-relaxed text-slate-200 grow dark:text-gray-400"></p>
            <div className="flex justify-between">
                <div className="flex items-center gap-3">
                    {user ? 
                    <Image src={user.avatar} className="rounded-sm" alt="User avatar" width={25} height={25}/> :
                    <AiOutlineUser/>
                    }
                    <Link href={`/profile/${user_id}`} className="text-sm text-slate-300">{user ? user.username : "User"}</Link>
                    <span className="text-sm text-slate-300">{getDate(new Date(date))}</span>
                </div>
                {/* <div className="flex items-center gap-2">
                    <AiFillStar />
                    <span>{likes.length}</span>
                </div> */}
            </div>
        </div>
    )
}
export default Card