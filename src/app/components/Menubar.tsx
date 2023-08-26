import {
  AiOutlineBold,
  AiOutlineClear,
  AiOutlineCode,
  AiOutlineItalic,
  AiOutlineRedo,
  AiOutlineStrikethrough,
  AiOutlineUndo,
} from "react-icons/ai";
import { TbClearFormatting, TbBlockquote } from "react-icons/tb";
import { BsCodeSlash, BsFileBreak, BsParagraph } from "react-icons/bs";
import {
  LuHeading1,
  LuHeading2,
  LuHeading3,
  LuHeading4,
  LuHeading5,
  LuHeading6,
} from "react-icons/lu";
import { MdFormatListBulleted, MdHorizontalRule } from "react-icons/md";
import { FaListOl } from "react-icons/fa";
import { Editor } from "@tiptap/react";

const MenuBar = ({ editor }: { editor: Editor | null }) => {
  if (!editor) {
    return null;
  }

  return (

    <div className="mb-6">
      <div className="flex flex-wrap gap-2 mb-2 ">
        <button
          onClick={() => editor.chain().focus().toggleBold().run()}
          disabled={!editor.can().chain().focus().toggleBold().run()}
          className={`px-4 py-2 rounded ${
            editor.isActive("bold") ? "bg-accent" : "bg-blue-200"
          } ${
            !editor.can().chain().focus().toggleItalic().run() && "opacity-70"
          }`}
        >
          <AiOutlineBold
            className={`w-8 h-8 ${editor.isActive("bold") && "text-slate-200"}`}
          />
        </button>
        <button
          onClick={() => editor.chain().focus().toggleItalic().run()}
          disabled={!editor.can().chain().focus().toggleItalic().run()}
          className={`px-4 py-2 rounded ${
            editor.isActive("italic") ? "bg-accent" : "bg-blue-200"
          } ${
            !editor.can().chain().focus().toggleItalic().run() && "opacity-70"
          }`}
        >
          <AiOutlineItalic
            className={`w-8 h-8 ${
              editor.isActive("italic") && "text-slate-200"
            }`}
          />
        </button>
        <button
          onClick={() => editor.chain().focus().toggleStrike().run()}
          disabled={!editor.can().chain().focus().toggleStrike().run()}
          className={` px-4 py-2 rounded ${
            editor.isActive("strike") ? "bg-accent" : "bg-blue-200"
          } ${
            !editor.can().chain().focus().toggleItalic().run() && "opacity-70"
          }`}
        >
          <AiOutlineStrikethrough
            className={`w-6 h-6  ${
              editor.isActive("strike") && "text-slate-200"
            }`}
          />
        </button>
        <button
          onClick={() => editor.chain().focus().toggleCode().run()}
          disabled={!editor.can().chain().focus().toggleCode().run()}
          className={` px-4 py-2 rounded ${
            editor.isActive("code") ? "bg-accent" : "bg-blue-200"
          } ${
            !editor.can().chain().focus().toggleItalic().run() && "opacity-70"
          }`}
        >
          <AiOutlineCode
            className={`w-6 h-6  ${
              editor.isActive("code") && "text-slate-200"
            }`}
          />
        </button>
        <button
          onClick={() => editor.chain().focus().setParagraph().run()}
          className={` px-4 py-2 rounded ${
            editor.isActive("paragraph") ? "bg-accent" : "bg-blue-200"
          }`}
        >
          <BsParagraph
            className={`w-6 h-6  ${
              editor.isActive("paragraph") && "text-slate-200"
            }`}
          />
        </button>
        <button
          onClick={() =>
            editor.chain().focus().toggleHeading({ level: 1 }).run()
          }
          className={` px-4 py-2 rounded ${
            editor.isActive("heading", { level: 1 })
              ? "bg-accent"
              : "bg-blue-200"
          }`}
        >
          <LuHeading1
            className={`w-6 h-6  ${
              editor.isActive("heading", { level: 1 }) && "text-slate-200"
            }`}
          />
        </button>
        <button
          onClick={() =>
            editor.chain().focus().toggleHeading({ level: 2 }).run()
          }
          className={` px-4 py-2 rounded ${
            editor.isActive("heading", { level: 2 })
              ? "bg-accent"
              : "bg-blue-200"
          }`}
        >
          <LuHeading2
            className={`w-6 h-6  ${
              editor.isActive("heading", { level: 2 }) && "text-slate-200"
            }`}
          />
        </button>
        <button
          onClick={() =>
            editor.chain().focus().toggleHeading({ level: 3 }).run()
          }
          className={` px-4 py-2 rounded ${
            editor.isActive("heading", { level: 3 })
              ? "bg-accent"
              : "bg-blue-200"
          }`}
        >
          <LuHeading3
            className={`w-6 h-6  ${
              editor.isActive("heading", { level: 3 }) && "text-slate-200"
            }`}
          />
        </button>
        <button
          onClick={() =>
            editor.chain().focus().toggleHeading({ level: 4 }).run()
          }
          className={` px-4 py-2 rounded ${
            editor.isActive("heading", { level: 4 })
              ? "bg-accent"
              : "bg-blue-200"
          }`}
        >
          <LuHeading4
            className={`w-6 h-6  ${
              editor.isActive("heading", { level: 4 }) && "text-slate-200"
            }`}
          />
        </button>
        <button
          onClick={() =>
            editor.chain().focus().toggleHeading({ level: 5 }).run()
          }
          className={` px-4 py-2 rounded ${
            editor.isActive("heading", { level: 5 })
              ? "bg-accent"
              : "bg-blue-200"
          }`}
        >
          <LuHeading5
            className={`w-6 h-6  ${
              editor.isActive("heading", { level: 5 }) && "text-slate-200"
            }`}
          />
        </button>
        <button
          onClick={() =>
            editor.chain().focus().toggleHeading({ level: 6 }).run()
          }
          className={` px-4 py-2 rounded ${
            editor.isActive("heading", { level: 6 })
              ? "bg-accent"
              : "bg-blue-200"
          }`}
        >
          <LuHeading6
            className={`w-6 h-6  ${
              editor.isActive("heading", { level: 6 }) && "text-slate-200"
            }`}
          />
        </button>
        <button
          onClick={() => editor.chain().focus().toggleBulletList().run()}
          className={` px-4 py-2 rounded ${
            editor.isActive("bulletList") ? "bg-accent" : "bg-blue-200"
          }`}
        >
          <MdFormatListBulleted
            className={`w-6 h-6  ${
              editor.isActive("bulletList") && "text-slate-200"
            }`}
          />
        </button>
        <button
          onClick={() => editor.chain().focus().toggleOrderedList().run()}
          className={` px-4 py-2 rounded ${
            editor.isActive("orderedList") ? "bg-accent" : "bg-blue-200"
          }`}
        >
          <FaListOl
            className={`w-6 h-6  ${
              editor.isActive("orderedList") && "text-slate-200"
            }`}
          />
        </button>
        <button
          onClick={() => editor.chain().focus().toggleCodeBlock().run()}
          className={` px-4 py-2 rounded ${
            editor.isActive("codeBlock") ? "bg-accent" : "bg-blue-200"
          }`}
        >
          <BsCodeSlash
            className={`w-6 h-6  ${
              editor.isActive("codeBlock") && "text-slate-200"
            }`}
          />
        </button>
        <button
          onClick={() => editor.chain().focus().toggleBlockquote().run()}
          className={` px-4 py-2 rounded ${
            editor.isActive("blockquote") ? "bg-accent" : "bg-blue-200"
          }`}
        >
          <TbBlockquote
            className={`w-6 h-6  ${
              editor.isActive("blockquote") && "text-slate-200"
            }`}
          />
        </button>
      </div>
      <div className="flex flex-wrap gap-2">
        <button
          className={` px-4 py-2 rounded`}
          onClick={() => editor.chain().focus().unsetAllMarks().run()}
        >
          <TbClearFormatting className={`w-6 h-6`} />
        </button>
        <button
          className={` px-4 py-2 rounded`}
          onClick={() => editor.chain().focus().clearNodes().run()}
        >
          <AiOutlineClear className={`w-6 h-6 `} />
        </button>
        <button
          className={` px-4 py-2 rounded`}
          onClick={() => editor.chain().focus().setHorizontalRule().run()}
        >
          <MdHorizontalRule className={`w-6 h-6 `} />
        </button>
        <button
          className={` px-4 py-2 rounded`}
          onClick={() => editor.chain().focus().setHardBreak().run()}
        >
          <BsFileBreak className={`w-6 h-6 `} />
        </button>
        <button
          onClick={() => editor.chain().focus().undo().run()}
          disabled={!editor.can().chain().focus().undo().run()}
          className={` px-4 py-2 rounded ${
            !editor.can().chain().focus().toggleItalic().run() && "opacity-70"
          }`}
        >
          <AiOutlineUndo className={`w-6 h-6 `} />
        </button>
        <button
          onClick={() => editor.chain().focus().redo().run()}
          disabled={!editor.can().chain().focus().redo().run()}
          className={` px-4 py-2 rounded ${
            !editor.can().chain().focus().toggleItalic().run() && "opacity-70"
          }`}
        >
          <AiOutlineRedo className={`w-6 h-6 `} />
        </button>
        {/* <button
          onClick={() => editor.chain().focus().setColor('#958DF1').run()}
          className={editor.isActive('textStyle', { color: '#958DF1' }) ? 'is-active' : ''}
        >
          purple
        </button> */}
      </div>
      </div>
  );
};

export default MenuBar;
