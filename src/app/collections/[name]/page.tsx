"use client"
import { useState, useEffect } from "react";
import { Folder, Note } from "@/app/types";
import { AiFillFileText } from 'react-icons/ai'
import Link from 'next/link'
import { removeEncodingSting } from "@/app/lib/removeEncodingString";
import { getAllFolders } from "@/app/lib/getAllFolders";
import { createNote, getFolderNotes } from "@/app/lib";

const Page = ({ params }: { params: { name: string } }) => {
  const { name } = params; //folder name
  const [show, setShow] = useState(false); //State of Input Box for creating new folder
  const [newText, setNewText] = useState(""); //state for input text for creting new folder
  const [notes, setNotes] = useState<Note[] | null>(null); //state for folder notes
  const [folderDetails,setFolderDetails] = useState<Folder | null>(null) //state for folder details


  useEffect(() => {
    const fetch = async () => {
      //Getting all the folders
      const res:Folder[] = await getAllFolders()
      
      //Finding current folder via name(unique)
      const folder = res.find(folder => folder.name === removeEncodingSting(name));
  
      
      if(folder){
        //setting folder details if found
        setFolderDetails(folder)
        
        //getting all notes of the folder
        const res2 = await getFolderNotes(folder._id)
        setNotes(res2)
      }else{
        throw new Error("Folder not found")
      }
 
    }
    fetch()
  }, [folderDetails,notes,name])


  //Creating a new Note
  async function handle(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if(!folderDetails) throw new Error("Foler Details is null")
    if(!notes) throw new Error("Notes is null")

    //Creating Note with Empty data
    const newNote = await createNote({
      title:newText,
      content:" ",
      author:" ",
      tags:[],
      folderId:folderDetails._id
    })

    //setting new note to note
    setNotes([...notes,newNote]);
    setNewText("");
    setShow(false);
  }
  return (
    <>
    <h1 className="my-2 text-3xl font-bold">{removeEncodingSting(name)}</h1>
    <button
      onClick={()=>setShow(true)}
      className="flex items-center gap-2 px-3 py-2 mt-2 mb-4 rounded-sm bg-button"
    >
      <AiFillFileText className="w-6 h-6" />
      Create New
    </button>
    <div className="flex flex-row flex-wrap items-center justify-start gap-10">
    {show && (
        <div className="flex flex-col items-center p-2 transition-all duration-150 ease-in-out rounded-lg delay-50 hover:bg-slate-200">
          <AiFillFileText className="text-primary w-28 h-28" />
          <form id="files" name="details" onSubmit={handle}>
            <input
              autoFocus
              placeholder="New Folder"
              onBlur={()=>setShow(false)}
              value={newText}
              onChange={(e) => setNewText(e.target.value)}
              type="text"
              className="py-1 text-center focus:outline bg-light w-28"
            />
          </form>
        </div>
      )}
      {
        !notes ? <h1>Loading...</h1> : notes.map((note)=>{
          //const limitedText = note?.title.length > 15 ? `${note.title.slice(0, 15)}...` : note.title;
          return (
            <Link href={`${name}/${note._id}`} key={note._id} title={note.title} className="flex flex-col items-center p-2 transition-all duration-150 ease-in-out rounded-lg delay-50 hover:bg-slate-200">
            <AiFillFileText className="w-24 h-24 text-primary" />
            <span className="font-medium">{note.title}</span>
          </Link>
          )
        })
      }
    </div>
    </>
  )
};

export default Page;
