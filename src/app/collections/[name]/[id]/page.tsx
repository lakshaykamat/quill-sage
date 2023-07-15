"use client"
import { useEffect, useState } from 'react'
import { MdEdit } from 'react-icons/md'
import { notFound } from "next/navigation";
import Editor from "./components/Editor";
import { Note } from '@/app/types';
import { getNote } from '@/app/lib';

const Page = ({ params }: { params: { id: string } }) => {
  const { id } = params;

  const [noteData, setNoteData] = useState<Note | null>(null);

  useEffect(() => {
    const fetch = async () => {
      const res = await getNote(id)
      setNoteData(res)
    }
    fetch()
  }, [noteData, id])

  const [showTEditor, setShowTEditor] = useState(false)
  const showEditor = () => {
    setShowTEditor(true)
  }
  if (!noteData) {
    return <h1>Loading Note Data...</h1>
  } else {
    if (noteData.error) {
      return notFound()
    }
    return (
      !showTEditor ?
        <>
          <button className="px-3 py-1 mb-2 outline" onClick={showEditor}>
            <MdEdit className="inline w-6 h-6" /> Edit
          </button>
          <main className="mx-auto prose">
            <h1>{noteData.title}</h1>
            <hr />
            <p dangerouslySetInnerHTML={{ __html: noteData.content }}></p>
          </main>
        </>
        :
        <Editor
          tags={noteData.tags.map((name, index) => ({
            id: index,
            name
          }))}
          suggestions={[
            { id: 1, name: "Apples" },
            { id: 2, name: "Pears" },
            { id: 3, name: "Bananas" },
            { id: 4, name: "Mangos" },
            { id: 5, name: "Lemons" },
            { id: 6, name: "Apricots" },
          ]}
          content={noteData.content}
          noteid={id}
          title={noteData.title}
          visibility={noteData.isPrivate} />
    )
  }
}
export default Page