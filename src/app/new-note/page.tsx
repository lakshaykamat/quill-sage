'use client'
import '../styles/editor.css'
import { useState, useEffect } from 'react'

import Placeholder from '@tiptap/extension-placeholder'
import StarterKit from '@tiptap/starter-kit'
import { useEditor } from '@tiptap/react'
import MenuBar from './components/MenuBar'
import TextEditor from './components/TextEditor'

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


export default NewNote