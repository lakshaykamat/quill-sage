import Link from "next/link"
import { AiFillFileText } from "react-icons/ai"


const File = ({noteid,noteTitle,name}:{name:string,noteid:string,noteTitle:string}) => {
    const limitedText = noteTitle.length > 10 ? `${noteTitle.slice(0, 10)}...` : noteTitle;
  return (
    <Link href={`${name}/${noteid}`} title={noteTitle} className="flex flex-col items-center p-2 transition-all duration-150 ease-in-out rounded-lg delay-50 hover:bg-slate-100">
    <AiFillFileText className="w-12 h-12 text-gray-500 sm:w-24 sm:h-24" />
    <span className="font-medium">
      {limitedText}
    </span>
  </Link>
  )
}

export default File