"use client";
import { AiFillFolder, AiFillFolderAdd } from "react-icons/ai";
import { useState } from "react";
import FolderCard from "./components/Folder";
import { Folder } from "../types";
import { createFolder, getAllFolders } from "../lib";
import { CreateNoteSVG } from "../assets/Illustrations";
import { fetchAllFolders } from "../utils/api/folder";
import { useQuery } from "@tanstack/react-query";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const Collections = () => {
  const [InputBox, setInputBox] = useState({ status: false, text: "" });
  const allFolders = useQuery({
    queryKey: ["all_folders"],
    queryFn: () => fetchAllFolders(),
  });

  if (allFolders.isError) return <h1>Error: Something went wrong</h1>;

  async function handle(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (InputBox.text === "") return;
    if (!allFolders.data) throw new Error("Folder is null");
    try {
      await createFolder(InputBox.text);
      allFolders.refetch();
      setInputBox({ status: false, text: "" });
    } catch (error) {
      console.log(`Error ${error}`);
    }
  }
  return (
    <div className="flex flex-col max-w-6xl gap-1 mx-5 mt-6 xl:mx-auto sm:mt-12">
      <div>
        <h2>My Collections</h2>
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
                onChange={(e) =>
                  setInputBox({ ...InputBox, text: e.target.value })
                }
                type="text"
                className="py-1 text-center outline-none focus:border-b-2 bg-inherit w-28"
              />
            </form>
          </div>
        )}
        {allFolders.isLoading ? (
          <LoadingSkeleton />
        ) : allFolders.data.length === 0 ? (
          !InputBox.status && <ZeroFolder />
        ) : (
          allFolders.data.map((folder: Folder) => {
            return (
              <FolderCard key={folder._id} id={folder._id} name={folder.name} />
            );
          })
        )}
      </div>
    </div>
  );
};

const LoadingSkeleton = () => {
  return (
    <>
      <Skeleton height={100} width={100} />
      <Skeleton height={100} width={100} />
      <Skeleton height={100} width={100} />
      <Skeleton height={100} width={100} />
      <Skeleton height={100} width={100} />
      <Skeleton height={100} width={100} />
    </>
  );
};
const ZeroFolder = () => {
  return (
    <div className="flex flex-col items-center justify-center mx-auto mt-12">
      <CreateNoteSVG />
      <p className="mt-6">Create a new Collection</p>
    </div>
  );
};
export default Collections;
