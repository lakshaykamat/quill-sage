import axios from "axios";

export const getNote = async(id:string) => {
    let config = {
        method: 'get',
        maxBodyLength: Infinity,
        url: `http://localhost:8080/api/v1/notes/${id}`,
        withCredentials :true,
        headers: {}
    };

    try {
        const response = await axios.request(config);
        return response.data
    }
    catch (error) {
        console.log(error);
        throw new Error("Failed to Fetch Note")
    }


}