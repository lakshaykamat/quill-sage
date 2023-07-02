'use client'
import '../styles/editor.css'
import { useState, useEffect } from 'react'

import { EditorContent, BubbleMenu, Editor, useEditor } from '@tiptap/react'
import Placeholder from '@tiptap/extension-placeholder'
import StarterKit from '@tiptap/starter-kit'

import { AiOutlineBold, AiOutlineClear, AiOutlineCode, AiOutlineItalic, AiOutlineRedo, AiOutlineStrikethrough, AiOutlineUndo } from 'react-icons/ai'
import { TbClearFormatting, TbBlockquote } from 'react-icons/tb'
import { BsCodeSlash, BsFileBreak, BsParagraph } from 'react-icons/bs'
import { LuHeading1, LuHeading2, LuHeading3, LuHeading4, LuHeading5, LuHeading6 } from 'react-icons/lu'
import { MdFormatListBulleted, MdHorizontalRule } from 'react-icons/md'
import { FaListOl } from 'react-icons/fa'

const NewNote = () => {
    const [title, setTitle] = useState('');
    const [isEditable, setIsEditable] = useState(true)
    const editor = useEditor({
        extensions: [
            StarterKit,
            Placeholder.configure({
                placeholder: 'Write something …',
            }),
        ],
    })
    useEffect(() => {
        //* If editable is true then show bubble menu
        if (editor) {
            editor.setEditable(isEditable)
        }
    }, [isEditable, editor])
    return (
        <main className='max-w-full'>
            {/* <div>
                <input type="checkbox" checked={isEditable} onChange={() => setIsEditable(!isEditable)} />
                Editable
            </div> */}

            <MenuBar editor={editor} />
            <input type='text' value={title} onChange={(e) => setTitle(e.target.value)} className='w-full mb-2 text-2xl font-bold outline-none sm:text-3xl md:text-4xl bg-inherit' placeholder="What's The Title" />
            <hr className='' />
            <TextEditor editor={editor} />
        </main>
    )
}


const MenuBar = ({ editor }: { editor: Editor | null }) => {
    if (!editor) {
        return null
    }

    return (
        <div className="flex flex-wrap gap-2 mb-6">
            <button
                onClick={() => editor.chain().focus().toggleBold().run()}
                disabled={
                    !editor.can()
                        .chain()
                        .focus()
                        .toggleBold()
                        .run()
                }
                className={`bg-button px-2 py-1 rounded-md ${editor.isActive('bold') && 'bg-primary'} ${!editor.can()
                    .chain()
                    .focus()
                    .toggleItalic()
                    .run() && 'opacity-70'}`}
            >
                <AiOutlineBold className={`w-6 h-6 text-gray-500 ${editor.isActive('bold') && 'text-gray-700'}`} />
            </button>
            <button
                onClick={() => editor.chain().focus().toggleItalic().run()}
                disabled={
                    !editor.can()
                        .chain()
                        .focus()
                        .toggleItalic()
                        .run()
                }
                className={`bg-button px-2 py-1 rounded-md ${editor.isActive('italic') && 'bg-primary'} ${!editor.can()
                    .chain()
                    .focus()
                    .toggleItalic()
                    .run() && 'opacity-70'}`}
            >
                <AiOutlineItalic className={`w-6 h-6 text-gray-500 ${editor.isActive('italic') && 'text-gray-700'}`} />
            </button>
            <button
                onClick={() => editor.chain().focus().toggleStrike().run()}
                disabled={
                    !editor.can()
                        .chain()
                        .focus()
                        .toggleStrike()
                        .run()
                }
                className={`bg-button px-2 py-1 rounded-md ${editor.isActive('strike') && 'bg-primary'} ${!editor.can()
                    .chain()
                    .focus()
                    .toggleItalic()
                    .run() && 'opacity-70'}`}
            >
                <AiOutlineStrikethrough className={`w-6 h-6 text-gray-500 ${editor.isActive('strike') && 'text-gray-700'}`} />
            </button>
            <button
                onClick={() => editor.chain().focus().toggleCode().run()}
                disabled={
                    !editor.can()
                        .chain()
                        .focus()
                        .toggleCode()
                        .run()
                }
                className={`bg-button px-2 py-1 rounded-md ${editor.isActive('code') && 'bg-primary'} ${!editor.can()
                    .chain()
                    .focus()
                    .toggleItalic()
                    .run() && 'opacity-70'}`}
            >
                <AiOutlineCode className={`w-6 h-6 text-gray-500 ${editor.isActive('code') && 'text-gray-700'}`} />
            </button>
            <button className={`bg-button px-2 py-1 rounded-md`} onClick={() => editor.chain().focus().unsetAllMarks().run()}>
                <TbClearFormatting className={`w-6 h-6 text-gray-500`} />
            </button>
            <button className={`bg-button px-2 py-1 rounded-md`} onClick={() => editor.chain().focus().clearNodes().run()}>
                <AiOutlineClear className={`w-6 h-6 text-gray-500`} />
            </button>
            <button
                onClick={() => editor.chain().focus().setParagraph().run()}
                className={`bg-button px-2 py-1 rounded-md ${editor.isActive('paragraph') && 'bg-primary'}`}
            >
                <BsParagraph className={`w-6 h-6 text-gray-500 ${editor.isActive('paragraph') && 'text-gray-700'}`} />
            </button>
            <button
                onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
                className={`bg-button px-2 py-1 rounded-md ${editor.isActive('heading', { level: 1 }) && 'bg-primary'}`}
            >
                <LuHeading1 className={`w-6 h-6 text-gray-500 ${editor.isActive('heading', { level: 1 }) && 'text-gray-700'}`} />
            </button>
            <button
                onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
                className={`bg-button px-2 py-1 rounded-md ${editor.isActive('heading', { level: 2 }) && 'bg-primary'}`}
            >
                <LuHeading2 className={`w-6 h-6 text-gray-500 ${editor.isActive('heading', { level: 2 }) && 'text-gray-700'}`} />
            </button>
            <button
                onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}
                className={`bg-button px-2 py-1 rounded-md ${editor.isActive('heading', { level: 3 }) && 'bg-primary'}`}
            >
                <LuHeading3 className={`w-6 h-6 text-gray-500 ${editor.isActive('heading', { level: 3 }) && 'text-gray-700'}`} />
            </button>
            <button
                onClick={() => editor.chain().focus().toggleHeading({ level: 4 }).run()}
                className={`bg-button px-2 py-1 rounded-md ${editor.isActive('heading', { level: 4 }) && 'bg-primary'}`}
            >
                <LuHeading4 className={`w-6 h-6 text-gray-500 ${editor.isActive('heading', { level: 4 }) && 'text-gray-700'}`} />
            </button>
            <button
                onClick={() => editor.chain().focus().toggleHeading({ level: 5 }).run()}
                className={`bg-button px-2 py-1 rounded-md ${editor.isActive('heading', { level: 5 }) && 'bg-primary'}`}
            >
                <LuHeading5 className={`w-6 h-6 text-gray-500 ${editor.isActive('heading', { level: 5 }) && 'text-gray-700'}`} />
            </button>
            <button
                onClick={() => editor.chain().focus().toggleHeading({ level: 6 }).run()}
                className={`bg-button px-2 py-1 rounded-md ${editor.isActive('heading', { level: 6 }) && 'bg-primary'}`}
            >
                <LuHeading6 className={`w-6 h-6 text-gray-500 ${editor.isActive('heading', { level: 6 }) && 'text-gray-700'}`} />
            </button>
            <button
                onClick={() => editor.chain().focus().toggleBulletList().run()}
                className={`bg-button px-2 py-1 rounded-md ${editor.isActive('bulletList') && 'bg-primary'}`}
            >
                <MdFormatListBulleted className={`w-6 h-6 text-gray-500 ${editor.isActive('bulletList') && 'text-gray-700'}`} />
            </button>
            <button
                onClick={() => editor.chain().focus().toggleOrderedList().run()}
                className={`bg-button px-2 py-1 rounded-md ${editor.isActive('orderedList') && 'bg-primary'}`}
            >
                <FaListOl className={`w-6 h-6 text-gray-500 ${editor.isActive('orderedList') && 'text-gray-700'}`} />
            </button>
            <button
                onClick={() => editor.chain().focus().toggleCodeBlock().run()}
                className={`bg-button px-2 py-1 rounded-md ${editor.isActive('codeBlock') && 'bg-primary'}`}
            >
                <BsCodeSlash className={`w-6 h-6 text-gray-500 ${editor.isActive('codeBlock') && 'text-gray-700'}`} />
            </button>
            <button
                onClick={() => editor.chain().focus().toggleBlockquote().run()}
                className={`bg-button px-2 py-1 rounded-md ${editor.isActive('blockquote') && 'bg-primary'}`}
            >
                <TbBlockquote className={`w-6 h-6 text-gray-500 ${editor.isActive('blockquote') && 'text-gray-700'}`} />
            </button>
            <button className={`bg-button px-2 py-1 rounded-md`} onClick={() => editor.chain().focus().setHorizontalRule().run()}>
                <MdHorizontalRule className={`w-6 h-6 text-gray-500`} />
            </button>
            <button className={`bg-button px-2 py-1 rounded-md`} onClick={() => editor.chain().focus().setHardBreak().run()}>
                <BsFileBreak className={`w-6 h-6 text-gray-500`} />
            </button>
            <button
                onClick={() => editor.chain().focus().undo().run()}
                disabled={
                    !editor.can()
                        .chain()
                        .focus()
                        .undo()
                        .run()
                }
                className={`bg-button px-2 py-1 rounded-md ${!editor.can()
                    .chain()
                    .focus()
                    .toggleItalic()
                    .run() && 'opacity-70'}`}
            >
                <AiOutlineUndo className={`w-6 h-6 text-gray-500`} />
            </button>
            <button
                onClick={() => editor.chain().focus().redo().run()}
                disabled={
                    !editor.can()
                        .chain()
                        .focus()
                        .redo()
                        .run()
                }
                className={`bg-button px-2 py-1 rounded-md ${!editor.can()
                    .chain()
                    .focus()
                    .toggleItalic()
                    .run() && 'opacity-70'}`}
            >
                <AiOutlineRedo className={`w-6 h-6 text-gray-500`} />
            </button>
            {/* <button
          onClick={() => editor.chain().focus().setColor('#958DF1').run()}
          className={editor.isActive('textStyle', { color: '#958DF1' }) ? 'is-active' : ''}
        >
          purple
        </button> */}
        </div>
    )
}

function TextEditor({ editor }: { editor: Editor | null }) {
    // const [isEditable, setIsEditable] = useState(true)
    // const [content,setContent] = useState<String| null>('');
    // const editor = useEditor({
    //     extensions: [StarterKit],
    //     content: ``,
    // })
    // useEffect(() => {
    //     //* If editable is true then show bubble menu
    //     if (editor) {
    //         editor.setEditable(isEditable)
    //     }
    // }, [isEditable, editor])

    return (
        <div className='max-w-full prose lg:prose-lg'>
            {/* <div>
                <input type="checkbox" checked={isEditable} onChange={() => setIsEditable(!isEditable)} />
                Editable
            </div> */}
            {editor && <BubbleMenu editor={editor} tippyOptions={{ duration: 100 }}>
                <button
                    onClick={() => editor.chain().focus().toggleBold().run()}
                    className={`bg-white px-2 py-1 mx-1 drop-shadow-md outline outline-1 rounded-md ${editor.isActive('bold') && 'bg-gray-500'} ${!editor.can()
                        .chain()
                        .focus()
                        .toggleItalic()
                        .run() && 'opacity-70'}`}
                >
                    <AiOutlineBold className={`w-6 h-6 text-gray-500 ${editor.isActive('bold') && 'text-white'} `}/>
                </button>
                <button
                    onClick={() => editor.chain().focus().toggleItalic().run()}
                    disabled={
                        !editor.can()
                            .chain()
                            .focus()
                            .toggleItalic()
                            .run()
                    }
                    className={`bg-white px-2 py-1 mx-1 drop-shadow-md outline outline-1 rounded-md ${editor.isActive('italic') && 'bg-gray-500'} ${!editor.can()
                        .chain()
                        .focus()
                        .toggleItalic()
                        .run() && 'opacity-70'}`}
                >
                    <AiOutlineItalic className={`w-6 h-6 text-gray-500 ${editor.isActive('italic') && 'text-white'}`} />
                </button>
                <button
                    onClick={() => editor.chain().focus().toggleStrike().run()}
                    disabled={
                        !editor.can()
                            .chain()
                            .focus()
                            .toggleStrike()
                            .run()
                    }
                    className={`bg-white px-2 py-1 mx-1 drop-shadow-md outline outline-1 rounded-md ${editor.isActive('strike') && 'bg-gray-500'} ${!editor.can()
                        .chain()
                        .focus()
                        .toggleItalic()
                        .run() && 'opacity-70'}`}
                >
                    <AiOutlineStrikethrough className={`w-6 h-6 text-gray-500 ${editor.isActive('strike') && 'text-white'}`} />
                </button>
            </BubbleMenu>}
            <EditorContent editor={editor} />
        </div>
    )
}
export default NewNote