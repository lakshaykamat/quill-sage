"use client"
import { AiFillFolder, AiFillFolderAdd } from "react-icons/ai";
import { useEffect, useState } from "react";
import FolderCard from "./components/Folder";
import { Folder } from "../types";
import { getAllFolders } from "../lib";
import { CreateNoteSVG } from "../assets/Illustrations";
import api, { fetchAllFolders } from "../../../utils/api";
import { AxiosResponse, all } from "axios";
import { useQuery } from "@tanstack/react-query";

const Collections = () => {

  const [InputBox, setInputBox] = useState({ status: false, text: "" }); //state for input text for creting ne  const [show, setShow] = useState(false); w folder
  //const [folders, setFolders] = useState<Folder[] | null>(null);
  const allFolders = useQuery({queryKey:["all_folders"],queryFn:()=>{
    return fetchAllFolders()
  }})
  if(allFolders.isLoading) return <h1>Loading...</h1>
  if(allFolders.isError) return <h1>Error: Something went wrong</h1>
  // useEffect(() => {
  //   const controller = new AbortController();
  //   const fetch = async () => {
  //     try{
  //       const response = await api.get('/folder',{signal: controller.signal,withCredentials: true})
  //       setFolders(response.data)
  //     }catch(error){
  //       console.log(error)
  //     }
  //   }
  //   fetch()
  //   return () => {
  //     console.log(`Aborting`)
  //     controller.abort()
  //   }
  // }, [])

  async function handle(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (InputBox.text === "") return
    if (!allFolders.data) throw new Error("Folder is null")
    try {
      await api.post('/api/v1/folder',{name:InputBox.text},{withCredentials:true})
      allFolders.refetch()
      setInputBox({ status: false, text: "" })
      //setFolders([...folders, response.data]);
    } catch (error) {
      console.log(`Error ${error}`)
    }
    
  }

    return (
      <div className="flex flex-col max-w-6xl gap-1 mx-5 mt-6 xl:mx-auto sm:mt-12">
        <div>
          <h3>My Collections</h3>
          <button
            onClick={() => setInputBox({ ...InputBox, status: true })}
            className="flex items-center gap-2 button-1"
          >
            <AiFillFolderAdd className="sm:h-6 sm:w-6" />
            New Collection
          </button>
        </div>


        <div className="flex flex-row flex-wrap items-center gap-5 mt-3 md:gap-10">
          {InputBox.status && (
            <div className="flex flex-col items-center p-2 transition-all duration-150 ease-in-out rounded-lg delay-50 hover:bg-slate-200">
              <AiFillFolder className="w-12 h-12 text-slate-600 sm:w-24 sm:h-24" />
              <form id="folder" name="details" onSubmit={handle}>
                <input
                  autoFocus
                  placeholder="New Folder"
                  onBlur={() => setInputBox({ status: false, text: "" })}
                  value={InputBox.text}
                  onChange={(e) => setInputBox({ ...InputBox, text: e.target.value })}
                  type="text"
                  className="py-1 text-center outline-none focus:border-b-2 bg-inherit w-28"
                />
              </form>
            </div>
          )}
          {
            allFolders.data.length === 0 ?
              !InputBox.status &&
              <div className="flex flex-col items-center justify-center mx-auto mt-12">
                <CreateNoteSVG />
                <p className="mt-6">Create a new Collection</p>
              </div>
              : allFolders.data.map((folder:Folder) => {
                return <FolderCard key={folder._id} id={folder._id} name={folder.name} />;
              })
          }
        </div>
      </div>
    );
  }
export default Collections;
