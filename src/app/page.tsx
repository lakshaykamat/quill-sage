"use client";
import Card from "./components/Card";
import { useQuery } from "@tanstack/react-query";
import { Note } from "./types";
import { fetchNotesOnFeed } from "./utils/api/notes";

const Feed = () => {
  const feedNotesQuery = useQuery({
    queryKey: ["feedNotes"],
    queryFn: () => {
      return fetchNotesOnFeed();
    },
  });


  if (feedNotesQuery.isLoading) return <h1>Loading...</h1>;
  if (feedNotesQuery.isError) return <pre>Error: Refersh the page :(</pre>;
  const public_notes: JSX.Element[] | JSX.Element = feedNotesQuery.data.map(
    (note: Note) => {
      return (
        <Card
          key={note._id}
          note_id={note._id}
          user_id={note.user_id}
          title={note.title}
          likes={note.likes}
          tags={note.tags}
          content={note.content}
          date={note.createdAt}
        />
      );
    }
  );
  return (
    <div className="flex flex-col max-w-6xl gap-3 mx-auto my-12">
      <div className="grid grid-cols-1 gap-5 mx-5 lg:grid-cols-3 sm:grid-cols-2">
        {public_notes}
      </div>
    </div>
  );
};
export default Feed;
