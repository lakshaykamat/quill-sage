"use client"
import { useEffect, useState } from 'react'
import { notFound } from "next/navigation";
import Editor from "./components/Editor";
import { Note, Tag } from '@/app/types';
import { getAllTags, getNote } from '@/app/lib';

const Page = ({ params }: { params: { id: string } }) => {
  const { id } = params;

  const [noteData, setNoteData] = useState<Note | null>(null);
  const [Suggested_tags, setSuggested_Tags] = useState<Tag[] | null>(null);

  useEffect(() => {
    const fetch = async () => {
      const res = await getNote(id)
      const tagData = await getAllTags()
      setNoteData(res)
      setSuggested_Tags(tagData)
    }
    fetch()
  }, [])


  if (!noteData || !Suggested_tags) {
    return <h1>Loading Note Data...</h1>
  } else {
    if (noteData.error) {
      return notFound()
    }
    return (
        <Editor
          tags={noteData.tags.map((name, index) => ({
            id: index,
            name
          }))}
          suggestions={Suggested_tags}
          content={noteData.content}
          noteid={id}
          title={noteData.title}
          visibility={noteData.isPrivate} />
    )
  }
}
export default Page