"use client"
import { AiFillFolder, AiFillFolderAdd } from "react-icons/ai";
import { useState } from "react";
import FolderCard from "./components/Folder";
import { Folder } from "../types";
import { my_folders } from "../data";

const Collections = () => {
  const [show, setShow] = useState(false);
  const [newText, setNewText] = useState("");
  const [folders, setFolders] = useState<Folder[]>(my_folders);

  function createFolder(): void {
    setShow(true);
  }
  function handle(e: React.FormEvent<HTMLFormElement>): void {
    e.preventDefault();
    console.log("Submited:" + newText);
    const newFolder = {
      id: 6,
      name: newText,
      notes:[]
    };
    setFolders([...folders, newFolder ]);
    setNewText("");
    setShow(false);
  }
  return (
    <>
    <h1 className="my-2 text-3xl font-bold">My Collections</h1>
    <button
      onClick={createFolder}
      className="flex items-center gap-2 px-3 py-2 mt-2 mb-4 rounded-sm bg-button"
    >
      <AiFillFolderAdd className="w-6 h-6" />
      Create New
    </button>

    <div className="flex flex-row flex-wrap items-center justify-start gap-10">
      {show && (
        <div className="flex flex-col items-center p-2 transition-all duration-150 ease-in-out rounded-lg delay-50 hover:bg-slate-200">
          <AiFillFolder className="text-primary w-28 h-28" />
          <form id="folder" name="details" onSubmit={handle}>
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
      {folders.map((folder) => {
        return <FolderCard key={folder.id} id={folder.id} name={folder.name} />;
      })}
    </div>
    </>
  );
};
export default Collections;
