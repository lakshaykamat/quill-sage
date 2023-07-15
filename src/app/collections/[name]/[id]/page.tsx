"use client"
import { useUserContext } from "@/app/context/user";
import { changeVisibilty, updateNote } from "@/app/lib";
import { getHTML } from "@/app/lib/getHTML";
import { getNote } from "@/app/lib/";
import MenuBar from "@/app/components/Menubar";
import Tags from "@/app/components/Tags";
import TipTap from "@/app/components/TipTap";
import { Note, Tag } from "@/app/types";
import Placeholder from "@tiptap/extension-placeholder";
import { useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import { useEffect, useState } from "react"
import { BsLockFill, BsUnlockFill } from "react-icons/bs";
import { MdEdit, MdSave, MdVisibility,MdVisibilityOff} from 'react-icons/md'

const Page = ({ params }: { params: { id: number; name: string } }) => {
    const { id, name } = params;

    const [noteData, setNoteData] = useState<Note | null>(null);

    useEffect(() => {
      const fetch = async () => {
        const res = await getNote(id.toString())
        setNoteData(res)
      }
      fetch()
    }, [noteData,id])

    const [showTEditor,setShowTEditor] = useState(false)
    const showEditor = ()=>{
      setShowTEditor(true)
    }
  return (
      !noteData ?
      <h1>Loading Note...</h1>
      :
      !showTEditor  ?
      <>
        <button className="px-3 py-1 mb-2 outline" onClick={showEditor}>
          <MdEdit className="inline w-6 h-6"/> Edit
        </button>
        <main className="mx-auto prose">
        <h1>{noteData.title}</h1>
        <hr/>
        <p dangerouslySetInnerHTML={{__html:noteData.content}}></p>
        </main>
      </>
      :
      <TextEditor 
      tags={noteData.tags.map((name, index) => ({
        id: index,
        name
      }))} 
      content={noteData.content} 
      noteid={id.toString()} 
      title={noteData.title}
      visibility={noteData.isPrivate}/>
  )
}

type Props = {
  content:string | undefined,
  title: string | undefined,
  noteid:string
  tags:Tag[]
  visibility:boolean
}

const TextEditor = (props:Props) => {
  const { user } = useUserContext();
  const [title, setTitle] = useState(props.title === undefined ? "": props.title);
  const [isEditable, setIsEditable] = useState(true);
  const [isPrivate,setIsPrivate] = useState(props.visibility)
  
  const [tags, setTags] = useState<Tag[]>(props.tags);

  const [suggestions, setSuggestions] = useState<Tag[]>([
    { id: 1, name: "Apples" },
    { id: 2, name: "Pears" },
    { id: 3, name: "Bananas" },
    { id: 4, name: "Mangos" },
    { id: 5, name: "Lemons" },
    { id: 6, name: "Apricots" },
  ]);
  
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

  const save = ()=>{
    //Create Save function to update a note
    const content = getHTML(editor)
    let data = JSON.stringify({
      title,
      content,
      // @ts-ignore
      author: user.username,
      tags: tags.map(item => item.name)
  });
  console.log(data)
    const note = updateNote(data,props.noteid)
    if(note) alert("Updated" + note)
  }
  return (
    <main className="max-w-full">
      <div className="flex items-center gap-3 mb-4">   
      <button className="flex gap-1 px-2 py-1 rounded drop-shadow bg-button" onClick={() => setIsEditable(!isEditable)}>
      {!isEditable ? "Lock":  "Unlock"}
        {!isEditable ? (
          <BsLockFill title="Lock" className="w-6 h-6 text-gray-500" />
        ) : (
          <BsUnlockFill title="Unlock" className="w-6 h-6" />
        )}
      </button>
      <button onClick={save}  title="Save" className="flex gap-1 px-2 py-1 rounded drop-shadow bg-button">
        Save
        <MdSave className="w-6 h-6" />
      </button>
      <button onClick={()=>{
          changeVisibilty(props.noteid)
          setIsPrivate((prev)=>!prev)
        }} className="flex gap-1 px-2 py-1 rounded drop-shadow bg-button">
          {isPrivate ? "Private":  "Public"}
        {isPrivate ? <MdVisibilityOff title="Private" className="w-6 h-6"/>:<MdVisibility title="Public "className="w-6 h-6" />}
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
          setSuggestions={setSuggestions} 
          suggestions={suggestions} />
        </>
      )}
      <hr />
      <TipTap editor={editor} />
    </main>
  );
};
export default Page