import axios from "axios";


export const getAllFolders = async () => {
    let config = {
        method: 'get',
        maxBodyLength: Infinity,
        url: 'http://localhost:8080/api/v1/folder/',
        withCredentials: true,
        headers: {}
    };

    try {
        const response = await axios.request(config);
        return response.data
    }
    catch (error) {
        console.log(error);
        throw new Error("Failed to Fetch Folders")
    }
}