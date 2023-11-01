import '../../../../styles/editor.css'
import { useRouter } from 'next/navigation';
import { changeVisibilty } from "@/app/lib";
import { getHTML } from "@/app/lib/getHTML";
import MenuBar from "@/app/components/Menubar";
import Tags from "@/app/components/Tags";
import TipTap from "@/app/components/TipTap";
import { Tag, User } from "@/app/types";
import Placeholder from "@tiptap/extension-placeholder";
import { useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import { BsLockFill, BsUnlockFill } from "react-icons/bs";
import { useEffect, useState } from "react"
import { MdSave, MdVisibility, MdVisibilityOff } from 'react-icons/md'
import { updateNote } from '@/app/utils/api/notes';
import { useQuery } from '@tanstack/react-query';
import { userDetails } from '@/app/utils/api/user';

type EditorProps = {
  content: string | undefined,
  title: string | undefined,
  noteid: string
  tags: Tag[]
  suggestions: Array<{id:number,name:string}>
  visibility: boolean
}

const Editor = (props: EditorProps) => {
  const router = useRouter()
  const userQuery = useQuery({queryKey: ["current_user"], queryFn:userDetails,refetchInterval:5000})
  if(userQuery.error) {
    router.push('http://localhost:3000/login')
  } 
  const  current_user = userQuery.data && userQuery.data
  const [title, setTitle] = useState(props.title === undefined ? "" : props.title);
  const [isEditable, setIsEditable] = useState(true);
  const [isPrivate, setIsPrivate] = useState(props.visibility)

  const [tags, setTags] = useState<Tag[]>(props.tags);

  const [suggestions, setSuggestions] = useState<Tag[]>(props.suggestions);
  const editor = useEditor({
    extensions: [
      StarterKit,
      Placeholder.configure({
        placeholder: "Write something …",
      }),
    ],
    content: props.content === undefined ? `` : props.content
  });


  useEffect(() => {
    //* If editable is true then show bubble menu
    if (editor) {
      editor.setEditable(isEditable);
    }
  }, [isEditable, editor]);

  const save = async () => {
    if(!current_user) return
    //Create Save function to update a note

    try {
      const response = await updateNote(props.noteid, {
        title,
        content: getHTML(editor),
        author: current_user.username,
        tags: [...new Set(tags.map(item => item.name))]
      })
      if (response.message == "Note Updated!") alert(`Updated`)
    } catch (error) {
      console.log(`Error ${error}`)
    }
  }
  return (
    <main className="max-w-full">
      <div className="flex items-center gap-3 mb-4">
        <button className="flex gap-1 px-3 py-2 text-gray-300 rounded drop-shadow bg-accent" onClick={() => setIsEditable(!isEditable)}>
          {!isEditable ? "Lock" : "Unlock"}
          {!isEditable ? (
            <BsLockFill title="Lock" className="w-6 h-6" />
          ) : (
            <BsUnlockFill title="Unlock" className="w-6 h-6" />
          )}
        </button>
        {
          isEditable && <button onClick={save} title="Save" className="flex gap-1 px-3 py-2 text-gray-300 rounded drop-shadow bg-accent">
            Save
            <MdSave className="w-6 h-6" />
          </button>
        }

        <button onClick={() => {
          changeVisibilty(props.noteid)
          setIsPrivate((prev) => !prev)
        }} className="flex gap-1 px-2 py-1 text-gray-300 rounded drop-shadow bg-accent">
          {isPrivate ? "Private" : "Public"}
          {isPrivate ? <MdVisibilityOff title="Private" className="w-6 h-6" /> : <MdVisibility title="Public " className="w-6 h-6" />}
        </button>
      </div>
      {!isEditable ? (
        <h1
          className={`w-full mb-2 text-2xl font-bold outline-none sm:text-3xl md:text-4xl bg-inherit ${!title && "text-gray-400"
            }`}
        >
          {!title ? "Your Title" : title}
        </h1>
      ) : (
        <>
          <MenuBar editor={editor} />
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full mb-2 text-2xl font-bold outline-none sm:text-3xl md:text-4xl bg-inherit"
            placeholder="What's The Title"
          />
          <Tags
            tags={tags}
            setTags={setTags}
            suggestions={suggestions} />
        </>
      )}
      <hr />
      <TipTap editor={editor} />
    </main>
  );
};
export default Editor