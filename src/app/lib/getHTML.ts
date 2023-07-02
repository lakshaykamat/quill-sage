import { Editor } from "@tiptap/react";

export const getHTML = (editor: Editor | null) => {
    if(editor){
        console.log(editor.getHTML())
        return editor.getHTML()
    }
    return ''
};