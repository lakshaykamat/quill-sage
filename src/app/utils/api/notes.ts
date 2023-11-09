import { Note } from "@/app/types";
import API from "../api";

export const fetchNotesOnFeed = async (): Promise<Note[]> => {
  const response = await API.get(`/api/v1/notes/public`, {
    withCredentials: true,
  });
  return response.data;
};

//Fetch note details by note id
export const fetchNote = async (noteid: string): Promise<Note> => {
  const response = await API.get(`/api/v1/notes/${noteid}`, {
    withCredentials: true,
  });
  return response.data;
};

//Update note by noteid
export const updateNote = async (noteid: string, data: any) => {
  const response = await API.put(`/api/v1/notes/${noteid}`, data, {
    withCredentials: true,
  });
  return response.data;
};

//Fetch note details by note id
export const searchNote = async (key: string): Promise<Note[]> => {
  const response = await API.get(`/api/v1/notes/search/${key}`, {
    withCredentials: true,
  });
  return response.data;
};

export const createNote = async ({ data }: { data: { title: String, content: String, tags: Array<String>, folderId: String } }) => {
  try {
    const response = await API.post('/api/v1/notes', {...data}, {
      headers: {
        'Content-Type': 'application/json',
      },
      withCredentials: true,
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};