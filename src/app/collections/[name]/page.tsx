"use client"
import { useState, useEffect } from "react";
import { my_folders } from "@/app/data";
import { Note } from "@/app/types";
import { AiFillFileText } from 'react-icons/ai'
import Link from 'next/link'
import { removeEncodingSting } from "@/app/lib/removeEncodingString";

const Page = ({ params }: { params: { name: string } }) => {
  const { name } = params;
  const [data, setData] = useState<Note[]>([]);

  useEffect(() => {
    my_folders.filter((folder) => {
      folder.name === removeEncodingSting(name) && setData(folder.notes)
    });
  });
  return (
    <>
    <h1 className="my-2 text-3xl font-bold">{removeEncodingSting(name)}</h1>
    <div className="flex flex-row flex-wrap items-center justify-start gap-10">
      {
        !data ?
        <h1>Loading Files...</h1>
        :
        data.map((note)=>{
          const limitedText = note.title.length > 15 ? `${note.title.slice(0, 15)}...` : note.title;
          return (
            <Link href={`${name}/${note.id}`} key={note.id} title={note.title} className="flex flex-col items-center p-2 transition-all duration-150 ease-in-out rounded-lg delay-50 hover:bg-slate-200">
            <AiFillFileText className="w-24 h-24 text-primary" />
            <span className="font-medium">{limitedText}</span>
          </Link>
          )
        })
      }
    </div>
    </>
  )
};

export default Page;
