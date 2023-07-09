import axios from "axios";

export const getAllNotes = async()=>{
  let config = {
    method: 'get',
    maxBodyLength: Infinity,
    url: 'http://localhost:8080/api/v1/notes/',
    withCredentials :true,
    headers: {}
  };
  
    try {
      const response = await axios.request(config);
      return response.data
    }
    catch (error:any) {
      console.log(error.response.data);
      return error.response.data
      //throw new Error("Failed to Fetch All Notes")
    }
}
