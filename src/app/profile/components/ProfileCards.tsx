import { Card } from "@/app/components/Card";
import { Note } from "@/app/types";

const ProfileCards = ({notes}:{notes:Note[]}) => {
  if(notes.length === 0){
    return <h3>Not created any public note</h3>
  }
  {
      <div className="grid grid-cols-3 gap-5 mb-12">
        {notes.map((note) => {
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
        })}
      </div>
  }
}

export default ProfileCards