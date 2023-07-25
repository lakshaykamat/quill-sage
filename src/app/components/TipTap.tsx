import { EditorContent, BubbleMenu, Editor } from '@tiptap/react'
import { AiOutlineBold, AiOutlineItalic, AiOutlineStrikethrough } from 'react-icons/ai'


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
        <div className='max-w-full prose '>
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
export default TextEditor