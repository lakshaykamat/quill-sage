import axios from "axios";

export const getUser = async () => {
    let config = {
        method: 'get',
        maxBodyLength: Infinity,
        url: `${process.env.NEXT_PUBLIC_SERVER_URL}/auth/getuser`,
        withCredentials: true,
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

export const fetchUser = async (id: string) => {

    let config = {
        method: 'get',
        maxBodyLength: Infinity,
        url: `${process.env.NEXT_PUBLIC_SERVER_URL}/api/v1/user/${id}`,
        withCredentials: true,
        headers: {}
    };
    try {
        const response = await axios.request(config);
        return response.data
    }
    catch (error) {
        console.log(error);
    }
}


export const getNote = async (id: string) => {
    let config = {
        method: 'get',
        maxBodyLength: Infinity,
        url: `${process.env.NEXT_PUBLIC_SERVER_URL}/api/v1/notes/${id}`,
        withCredentials: true,
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


export const getAllFolders = async () => {
    let config = {
        method: 'get',
        maxBodyLength: Infinity,
        url: `${process.env.NEXT_PUBLIC_SERVER_URL}/api/v1/folder/`,
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


export const getAllNotes = async () => {
    let config = {
        method: 'get',
        maxBodyLength: Infinity,
        url: `${process.env.NEXT_PUBLIC_SERVER_URL}/api/v1/notes/public`,
        withCredentials: true,
        headers: {}
    };

    try {
        const response = await axios.request(config);
        return response.data
    }
    catch (error: any) {
        console.log(error.response.data);
        return error.response.data
        throw new Error("Failed to Fetch All Notes")
    }
}

export const getAllUserNotes = async () => {
    let config = {
        method: 'get',
        maxBodyLength: Infinity,
        url: `${process.env.NEXT_PUBLIC_SERVER_URL}/api/v1/notes/private`,
        withCredentials: true,
        headers: {}
    };

    try {
        const response = await axios.request(config);
        return response.data
    }
    catch (error: any) {
        console.log(error.response.data);
        throw new Error("Failed to Fetch All User Notes")
    }
}


export const getAllTags = async () => {
    let config = {
        method: 'get',
        maxBodyLength: Infinity,
        url: `${process.env.NEXT_PUBLIC_SERVER_URL}/api/v1/notes/tags/all`,
        withCredentials: true,
        headers: {}
    };

    try {
        const response = await axios.request(config);
        return response.data
    }
    catch (error: any) {
        console.log(error.response.data);
        throw new Error("Failed to Fetch All Tags")
    }
}


export const fetchUserNotesById = async (userid: string) => {
    let config = {
        method: 'get',
        maxBodyLength: Infinity,
        url: `${process.env.NEXT_PUBLIC_SERVER_URL}/api/v1/notes/user/${userid}`,
        withCredentials: true,
        headers: {}
    };

    try {
        const response = await axios.request(config);
        return response.data
    }
    catch (error: any) {
        console.log(error.response.data);
        return error.response.data
        throw new Error("Failed to Fetch All Notes")
    }
}


export const createFolder = async (name: string) => {
    let data = JSON.stringify({
        "name": name
    });

    let config = {
        method: 'post',
        maxBodyLength: Infinity,
        url: `${process.env.NEXT_PUBLIC_SERVER_URL}/api/v1/folder/`,
        withCredentials: true,
        headers: {
            'Content-Type': 'application/json'
        },
        data: data
    };

    try {
        const response = await axios.request(config);
        return response.data
    }
    catch (error) {
        console.log(error);
        return error
    }

}

export const createNote = async (req: { title: string, content: string, tags: Array<string>, folderId: string }) => {
    let data = JSON.stringify({
        "title": req.title,
        "content": req.content,
        "tags": req.tags,
        "folderId": req.folderId
    });

    let config = {
        method: 'post',
        maxBodyLength: Infinity,
        url: `${process.env.NEXT_PUBLIC_SERVER_URL}/api/v1/notes/`,
        withCredentials: true,
        headers: {
            'Content-Type': 'application/json'
        },
        data: data
    };

    try {
        const response = await axios.request(config);
        return response.data
    }
    catch (error) {
        console.log(error);
        throw new Error("Failed to create note")
    }

}

export const updateNote = async (id: string,input: {title:string,content:string,author:string,tags:string[]},) => {
    let config = {
        method: 'put',
        maxBodyLength: Infinity,
        url: `${process.env.NEXT_PUBLIC_SERVER_URL}/api/v1/notes/${id}`,
        withCredentials: true,
        headers: {
            'Content-Type': 'application/json'
        },
        data: input
    };

    try {
        const response = await axios.request(config);
        console.log(response.data);
        return response.data
    }
    catch (error) {
        console.log(error);
    }

}

export const getFolderNotes = async (id: string) => {

    let config = {
        method: 'get',
        maxBodyLength: Infinity,
        url: `${process.env.NEXT_PUBLIC_SERVER_URL}/api/v1/folder/all/notes/${id}`,
        withCredentials: true,
        headers: {}
    };

    try {
        const response = await axios.request(config);
        return response.data
    }
    catch (error) {
        console.log(error);
    }

}

export const changeVisibilty = async (id: string) => {

    let config = {
        method: 'get',
        maxBodyLength: Infinity,
        url: `${process.env.NEXT_PUBLIC_SERVER_URL}/api/v1/notes/visibility/${id}`,
        withCredentials: true,
        headers: {}
    };

    try {
        const response = await axios.request(config);
        return response.data
    }
    catch (error) {
        console.log(error);
    }

}

export const renameFolder = async (id: string, name: string) => {
    let data = JSON.stringify({
        "name": name
    });

    let config = {
        method: 'put',
        maxBodyLength: Infinity,
        url: `${process.env.NEXT_PUBLIC_SERVER_URL}/api/v1/folder/${id}`,
        headers: {
            'Content-Type': 'application/json'
        },
        withCredentials: true,
        data: data
    };

    try {
        const response = await axios.request(config);
    }
    catch (error) {
        console.log(error);
    }
}

export const deleteFolder = async (id: string) => {
    let config = {
        method: 'delete',
        maxBodyLength: Infinity,
        url: `${process.env.NEXT_PUBLIC_SERVER_URL}/api/v1/folder/${id}`,
        headers: {},
        withCredentials: true,
    };
        try {
            const response = await axios.request(config);
            console.log(response.data)
            return response.data
        }
        catch (error) {
            console.log(error);
            return error
        }

}