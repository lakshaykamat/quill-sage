import { Folder } from "@/app/types";
import API from "../api";

//Fetch all folders of user
export const fetchAllFolders = async (): Promise<Folder[]> => {
    const response = await API.get("/api/v1/folder", { withCredentials: true });
    return response.data;
  };
  
  
  //Fetch all folders of user
  export const creteFolder = async (name: string) => {
    const response = await API.post('/api/v1/folder', { name }, { withCredentials: true })
    return response.data;
  };