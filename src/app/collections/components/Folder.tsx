import Link from "next/link";
import { AiFillFolder } from "react-icons/ai";

const FolderCard = ({ id,name}: { id:number,name: string }) => {
    return (
      <Link href={`collections/${name}`}  className="flex flex-col items-center p-2 transition-all duration-150 ease-in-out rounded-lg delay-50 hover:bg-slate-200">
        <AiFillFolder className="text-primary w-28 h-28" />
        <span className="font-medium">{name}</span>
      </Link>
    );
  };
export default FolderCard