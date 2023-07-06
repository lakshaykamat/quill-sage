"use client";
import "../styles/editor.css";
import { useState, useEffect } from "react";

import { MdSave } from "react-icons/md";
import { BsLockFill, BsUnlockFill } from "react-icons/bs";
import Placeholder from "@tiptap/extension-placeholder";
import StarterKit from "@tiptap/starter-kit";
import { useEditor } from "@tiptap/react";
import MenuBar from "./components/MenuBar";
import TipTap from "./components/TipTap";
import Tags from "./components/Tags";


const TextEditor = () => {
  // console.log(props.content === undefined ? `` : props.content,props.title === undefined ? "": props.title)
  const [title, setTitle] = useState("");
  const [isEditable, setIsEditable] = useState(true);


  const editor = useEditor({
    extensions: [
      StarterKit,
      Placeholder.configure({
        placeholder: "Write something …",
      }),
    ],
    content: ``,
  });


  useEffect(() => {
    //* If editable is true then show bubble menu
    if (editor) {
      editor.setEditable(isEditable);
    }
  }, [isEditable, editor]);

  return (
    <main className="max-w-full">
      <button className="mb-4 mr-4" onClick={() => setIsEditable(!isEditable)}>
        {!isEditable ? (
          <BsLockFill title="Lock" className="w-6 h-6 text-gray-500" />
        ) : (
          <BsUnlockFill title="Unlock" className="w-6 h-6" />
        )}
      </button>
      <button title="Save" className="mr-4">
        <MdSave className="w-6 h-6" />
      </button>

      {!isEditable ? (
        <h1
          className={`w-full mb-2 text-2xl font-bold outline-none sm:text-3xl md:text-4xl bg-inherit ${!title && "text-gray-400"
            }`}
        >
          {!title ? "Your Title" : title}
        </h1>
      ) : (
        <>
          <MenuBar editor={editor} />
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full mb-2 text-2xl font-bold outline-none sm:text-3xl md:text-4xl bg-inherit"
            placeholder="What's The Title"
          />
          <Tags tags={[]} suggestions={[
            { id: 1, name: "Apples" },
            { id: 2, name: "Pears" },
            { id: 3, name: "Bananas" },
            { id: 4, name: "Mangos" },
            { id: 5, name: "Lemons" },
            { id: 6, name: "Apricots" },
          ]} />
        </>
      )}
      <hr />
      <TipTap editor={editor} />
    </main>
  );
};

export default TextEditor;