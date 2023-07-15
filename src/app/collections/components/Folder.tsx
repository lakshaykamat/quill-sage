import Link from "next/link";
import { AiFillFolder } from "react-icons/ai";

const FolderCard = ({name}: {name: string }) => {
    return (
      <Link href={`collections/${name}`}  className="flex flex-col items-center p-2 transition-all duration-150 ease-in-out rounded-lg delay-50 hover:bg-slate-200">
        <AiFillFolder className="w-24 h-24 text-primary md:w-28 md:h-28" />
        <span className="font-medium">{name}</span>
      </Link>
    );
  };
export default FolderCard