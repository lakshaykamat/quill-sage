"use client"
import { useState, useEffect } from "react";
import { Folder, Note } from "@/app/types";
import { AiFillFileText } from 'react-icons/ai'
import Link from 'next/link'
import { removeEncodingSting } from "@/app/lib/removeEncodingString";
import { getAllFolders } from "@/app/lib/";
import { createNote, getFolderNotes } from "@/app/lib";
import { notFound } from "next/navigation";

const Page = ({ params }: { params: { name: string } }) => {
  const { name } = params; //folder name
  const [inputBox, setInputBox] = useState({
    status: false,
    text: ""
  }); //State of Input Box for creating new folder

  const [collectionNotes, setCollectionNotes] = useState<Note[] | null>(null); //state for folder notes
  const [folderDetails, setFolderDetails] = useState<Folder | null | undefined>(null) //state for folder details

  useEffect(() => {
    const fetchFolders = async () => {
      //Getting all the folders
      const res: Folder[] = await getAllFolders()

      //Finding current folder via name(unique)
      const folder = res.find(folder => folder.name === removeEncodingSting(name));
      if (folder) {
        //setting folder details if found
        setFolderDetails(folder)

        //getting all notes of the folder
        const res = await getFolderNotes(folder._id)
        setCollectionNotes(res)
      } else {
        setFolderDetails(undefined)
      }

    }
    fetchFolders()
  }, [])
  
  if (folderDetails === undefined) return notFound()

  //Creating a new Note
  async function handleNote(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!folderDetails) throw new Error("Foler Details is null")
    if (!collectionNotes) throw new Error("Notes is null")

    //Creating Note with Empty data
    const newNote = await createNote({
      title: inputBox.text,
      content: " ",
      tags: [],
      folderId: folderDetails._id
    })

    //setting new note to note
    setCollectionNotes([...collectionNotes, newNote]);
    setInputBox({ status: false, text: "" })
  }

  if (!collectionNotes) {
    return <h1>Loading Collection Folders...</h1>
  } else {
    return (
      <>
        <div className="flex items-center gap-1">
          <h1 className="my-2 text-3xl font-bold">{removeEncodingSting(name)}</h1>
        </div>

        <button
          onClick={() => setInputBox({ ...inputBox, status: true })}
          className="flex items-center gap-2 px-3 py-2 mt-2 mb-4 rounded-sm bg-button"
        >
          <AiFillFileText className="w-6 h-6" />
          Create New
        </button>
        <div className="flex flex-row flex-wrap items-center justify-start gap-10">
          {inputBox.status && (
            <div className="flex flex-col items-center p-2 transition-all duration-150 ease-in-out rounded-lg delay-50 hover:bg-slate-200">
              <AiFillFileText className="text-primary w-28 h-28" />
              <form id="files" name="details" onSubmit={handleNote}>
                <input
                  autoFocus
                  placeholder="New Folder"
                  onBlur={() => setInputBox({ ...inputBox, status: false })}
                  value={inputBox.text}
                  onChange={(e) => setInputBox({ ...inputBox, text: e.target.value })}
                  type="text"
                  className="py-1 text-center focus:outline bg-light w-28"
                />
              </form>
            </div>
          )}
          {
            collectionNotes.map((note) => {
              const limitedText = note.title.length > 15 ? `${note.title.slice(0, 15)}...` : note.title;
              return (
                <Link href={`${name}/${note._id}`} key={note._id} title={note.title} className="flex flex-col items-center p-2 transition-all duration-150 ease-in-out rounded-lg delay-50 hover:bg-slate-200">
                  <AiFillFileText className="w-24 h-24 text-primary" />
                  <span className="font-medium">{limitedText}</span>
                </Link>
              )
            })
          }
        </div>
      </>
    )
  }
};

export default Page;
