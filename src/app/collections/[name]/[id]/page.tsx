"use client";
import { my_folders } from "@/app/data";
import { Note } from "@/app/types";
import { useState, useEffect } from "react";

const Page = ({ params }: { params: { id: number; name: string } }) => {
  const { id, name } = params;
  const [data, setData] = useState<Note[]>([]);

  useEffect(() => {
    const a = my_folders.filter((folder) => {
      if (folder.name === name && folder.id === parseInt(id.toString())) {
        console.log(folder.notes);
        setData(folder.notes);
        // return folder.notes
      }
    });
  });
  return data.length > 0 && JSON.stringify(data)
};

export default Page;
