"use client"
import { AiFillFolder, AiFillFolderAdd } from "react-icons/ai";
import { useEffect, useState } from "react";
import FolderCard from "./components/Folder";
import { Folder } from "../types";
import { getAllFolders } from "../lib";
import { createFolder } from "../lib";
import { CreateNoteSVG } from "../assets/Illustrations";

const Collections = () => {
  const [show, setShow] = useState(false); //State of Input Box for creating new folder
  const [newText, setNewText] = useState(""); //state for input text for creting new folder
  const [folders, setFolders] = useState<Folder[] | null>(null);
  
  useEffect(() => {
    const fetch = async () => {
      const res = await getAllFolders()
      setFolders(res)
    }
    fetch()
  }, [])

  async function handle(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if(newText==="") return
    if(!folders) throw new Error("Folder is null")
    const response =  await createFolder(newText)
    
    setNewText("");
    setShow(false);
    if(response?.response?.data?.error) return alert ("Folder name must be unique")
    setFolders([...folders, response]);
  }
  if(!folders){
    return (
      <h1>Loading...</h1>
    )
  }else{
    return (
      <>
        <h1 className="my-2 text-3xl font-bold">My Collections</h1>
        <button
          onClick={()=>setShow(true)}
          className="flex items-center gap-2 px-3 py-2 mt-2 mb-4 rounded-sm focus:outline-double focus:outline-3 focus:outline-primary bg-button"
        >
          <AiFillFolderAdd className="w-6 h-6" />
          Create New
        </button>
  
  
        <div className="flex flex-row flex-wrap items-center gap-5 md:gap-10">
          {show && (
            <div className="flex flex-col items-center p-2 transition-all duration-150 ease-in-out rounded-lg delay-50 hover:bg-slate-200">
              <AiFillFolder className="text-primary w-28 h-28" />
              <form id="folder" name="details" onSubmit={handle}>
                <input
                  autoFocus
                  placeholder="New Folder"
                  onBlur={() => setShow(false)}
                  value={newText}
                  onChange={(e) => setNewText(e.target.value)}
                  type="text"
                  className="py-1 text-center focus:outline-primary bg-light w-28"
                />
              </form>
            </div>
          )}
          {folders.length === 0 ? (
            <div className="flex flex-col items-center justify-center mx-auto mt-12">
              <CreateNoteSVG/>
            <p className="mt-6 font-semibold">Create a new Collection</p>
            </div>
          )
           : folders.map((folder) => {
            return <FolderCard key={folder._id} name={folder.name} />;
          })}
        </div>
      </>
    );
  }

};
export default Collections;
