import { Editor } from "@tiptap/react";

export const getHTML = (editor: Editor | null) => {
    if(editor) return editor.getHTML()
    return ''
};