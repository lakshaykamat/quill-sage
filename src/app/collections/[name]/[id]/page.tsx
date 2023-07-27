"use client"
import Editor from "./components/Editor";
import { useQuery } from '@tanstack/react-query';
import { fetchAllTags, fetchNote } from '../../../../../utils/api';

const Page = ({ params }: { params: { id: string } }) => {
  const { id } = params;

  const fetchTags = useQuery({queryKey: ["fetch_note_tags"], queryFn: () =>  fetchAllTags() }); 
  const fetchNoteData = useQuery({queryKey: ["fetch_note"], queryFn: () =>  fetchNote(id) });

  
  if(fetchTags.isLoading || fetchNoteData.isLoading ) return <h1>Loading...</h1>
  if(fetchTags.isError || fetchNoteData.isError) return <h1>Error :(</h1>

    return (
      <div className='flex flex-col max-w-6xl gap-1 mx-5 mt-6 xl:mx-auto sm:mt-12'>
        <Editor
          tags={fetchNoteData.data.tags.map((name:string, index:number) => ({
            id: index, name
          }))}
          suggestions={fetchTags.data}
          content={fetchNoteData.data.content}
          noteid={id}
          title={fetchNoteData.data.title}
          visibility={fetchNoteData.data.isPrivate} />
          </div>
    )
}
export default Page