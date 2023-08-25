import { SET_LIKE_ICON } from "@/app/assets/Icons";
import { fetchUser } from "@/app/lib";
import { getDate } from "@/app/lib/getDate";
import { useQuery } from "@tanstack/react-query";
import Link from "next/link";

type ProfileCardProps = {
  note_id: string;
  title: string;
  user_id: string;
  content: string;
  date: string;
  likes: Array<{ id: string }>;
  tags: Array<string>;
};
export const ProfileCard = ({
  title,
  content,
  date,
  likes,
  user_id,
  note_id,
  tags,
}: ProfileCardProps) => {
  const user = useQuery({
    queryKey: ["user", user_id],
    queryFn: () => fetchUser(user_id),
  });

  const DESCRIPTION_LENGTH: number = 50;
  const description: string =
    content.length > DESCRIPTION_LENGTH
      ? `${content.slice(0, DESCRIPTION_LENGTH)}...`
      : content;

  const TITLE_LENGTH: number = 15;
  const short_title: string =
    title.length > TITLE_LENGTH ? `${title.slice(0, TITLE_LENGTH)}...` : title;

  const all_tags: JSX.Element[] = tags.map((tag, index) => {
    return (
      <span
        key={index}
        className="px-2 py-1 text-xs rounded-md text-slate-100 bg-slate-500 drop-shadow"
      >
        {tag}
      </span>
    );
  });
  return (
    <div className="flex flex-col p-6 rounded bg-slate-600 drop-shadow-md">
      <div className="flex justify-between">
        <Link href={`/note/${note_id}`}>
          <h4 title={title} className="text-slate-100">
            {short_title}
          </h4>
        </Link>
        <div className="flex gap-1">
          <SET_LIKE_ICON classes={"text-red-500"} />
          <span className="text-gray-200">{likes.length}</span>
        </div>
      </div>
      <div className="flex flex-wrap gap-3 mb-3 empty:hidden">{all_tags}</div>
      <div className="flex justify-between">
        <div className="flex items-center gap-3">
          <span className="text-sm text-slate-300">{getDate(date)}</span>
        </div>
      </div>
    </div>
  );
};
