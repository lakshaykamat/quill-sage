import { getDate } from "../lib/getDate";

import Image from "next/image";
import Link from "next/link";
import { PLACEHOLDER_LIKE_ICON } from "../assets/Icons";
import { useQuery } from "@tanstack/react-query";
import { fetchUser } from "../utils/api";

type CardProps = {
    note_id: string
    title: string,
    user_id: string
    content: string,
    date: string,
    likes: Array<{ id: string }>,
    tags: Array<string>
}
const Card = ({ title, content, date, likes, user_id, note_id, tags }: CardProps) => {
    // const [user, setUser] = useState<User | null>(null)
    // useEffect(() => {
    //     const fetch = async () => {
    //         const res = await fetchUser(user_id)
    //         setUser(res)
    //     }
    //     fetch()
    // }, [])

    const user = useQuery({ queryKey: ["user", user_id], queryFn: () => fetchUser(user_id) })

    const DESCRIPTION_LENGTH: number = 50;
    const description: string = content.length > DESCRIPTION_LENGTH ? `${content.slice(0, DESCRIPTION_LENGTH)}...` : content;
    const TITLE_LENGTH: number = 15;
    const short_title: string = title.length > TITLE_LENGTH ? `${title.slice(0, TITLE_LENGTH)}...` : title;

    function removeAllTagsAndWrapInParagraph(htmlString: string): string {
        // Create a temporary div element to hold the parsed HTML
        const tempDiv = document.createElement('span');
        tempDiv.innerHTML = htmlString;

        // Get the text content of the temporary div
        const textContent = tempDiv.textContent;

        // Create a new paragraph element
        const paragraph = document.createElement('span');
        if (textContent !== null) {
            paragraph.textContent = textContent;
        }

        // Return the paragraph content
        return paragraph.outerHTML;
    }

    const all_tags: JSX.Element[] = tags.map((tag, index) => {
        return (<span key={index} className="px-2 py-1 text-sm rounded-md text-slate-100 bg-slate-500 drop-shadow">{tag}</span>)
    })
    return (
        <div className="flex flex-col p-6 rounded bg-slate-600 drop-shadow-md">
            <div className="flex justify-between">
                <Link href={`/note/${note_id}`}>
                    <h2 title={title} className="text-slate-100">
                        {short_title}
                    </h2>
                </Link>
                <PLACEHOLDER_LIKE_ICON classes={null} />
            </div>
            <div className="flex flex-wrap gap-3 mb-3 empty:hidden">{all_tags}</div>
            <p dangerouslySetInnerHTML={{ __html: removeAllTagsAndWrapInParagraph(description) }} className="mb-3 font-normal leading-relaxed text-slate-200 grow"></p>
            <div className="flex justify-between">
                <div className="flex items-center gap-3">
                    {user.data &&
                        <>
                            <Image src={user.data.avatar} className="rounded-sm" alt="User avatar" width={25} height={25} />
                            <Link href={`/profile/${user.data?._id}`} className="text-sm text-slate-300">{user.data.username}</Link>
                        </>
                    }
                    <span className="text-sm text-slate-300">{getDate(date)}</span>
                </div>
            </div>
        </div>
    )
}
export default Card