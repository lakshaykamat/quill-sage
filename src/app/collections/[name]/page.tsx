"use client"
import { useState, useEffect } from "react";
import { Folder, Note } from "@/app/types";
import { AiFillFileText } from 'react-icons/ai'
import { removeEncodingSting } from "@/app/lib/removeEncodingString";
import { getAllFolders } from "@/app/lib/";
import { createNote, getFolderNotes } from "@/app/lib";
import { notFound } from "next/navigation";
import File from "../components/File";

const Page = ({ params }: { params: { name: string } }) => {
  const { name } = params; //folder name

  const [inputBox, setInputBox] = useState({ status: false, text: "" });
  //State of Input Box for creating new folder

  const [collectionNotes, setCollectionNotes] = useState<Note[] | null>(null);
  //state for folder notes
  const [folderDetails, setFolderDetails] = useState<Folder | null | undefined>(null)
  //state for folder details

  const fetchFolders = async () => {
    //Getting all the folders
    const res: Folder[] = await getAllFolders()

    //Finding current folder via name(unique)
    const folder = res.find(folder => folder.name === removeEncodingSting(name));
    if (folder) {
      //setting folder details if found
      setFolderDetails(folder)

      //getting all notes of the folder
      const response = await getFolderNotes(folder._id)
      setCollectionNotes(response)
    } else {
      setFolderDetails(undefined)
    }
  }

  
  useEffect(() => {
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
        <div className="flex-col max-w-6xl gap-1 mx-5 mt-6 lex xl:mx-auto sm:mt-12">
          <div>
            <h2>{removeEncodingSting(name)}</h2>
            <button
              onClick={() => setInputBox({ ...inputBox, status: true })}
              className="flex items-center gap-2 button-1"
            >
              <AiFillFileText className="w-6 h-6" />
              Create New
            </button>
          </div>
          <div className="flex flex-row flex-wrap items-center gap-5 mt-3 md:gap-10">
            {inputBox.status && (
              <div className="flex flex-col items-center p-2 transition-all duration-150 ease-in-out rounded-lg delay-50 hover:bg-slate-200">
                <AiFillFileText className="w-12 h-12 text-slate-600 sm:w-24 sm:h-24" />
                <form id="files" name="details" onSubmit={handleNote}>
                  <input
                    autoFocus
                    placeholder="New Folder"
                    onBlur={() => setInputBox({ ...inputBox, status: false })}
                    value={inputBox.text}
                    onChange={(e) => setInputBox({ ...inputBox, text: e.target.value })}
                    type="text"
                    className="py-1 text-center outline-none focus:border-b-2 bg-inherit w-28"
                  />
                </form>
              </div>
            )}
            {
              collectionNotes.map((note) => <File key={note._id} name={name} noteTitle={note.title} noteid={note._id}/>)
            }
          </div>
        </div>
      </>
    )
  }
};

export default Page;