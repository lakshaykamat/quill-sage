import axios from "axios";

export const getUser = async() => {
    let config = {
        method: 'get',
        maxBodyLength: Infinity,
        url: 'http://localhost:8080/auth/getuser',
        withCredentials :true,
        headers: {}
    };

    try {
        const response = await axios.request(config);
        return response.data
    }
    catch (error) {
        console.log(error);
        throw new Error("Failed to fetch user")
    }


}