import { User } from "@/app/types";
import API from "../api";

//Fetch user of note (fetch owner of note)
export const fetchUser = async (userid: string): Promise<User> => {
  const response = await API.get(`/api/v1/user/${userid}`, {
    withCredentials: true,
  });
  return response.data;
};

//Fetch user of details of logged in user
export const userDetails = async (): Promise<User> => {
  const response = await API.get(`/auth/getuser`, {
    withCredentials: true,
  });
  return response.data;
};

//Fetch user of details of logged in user
export const updateUser = async (userid: string, data: { bio: string }) => {
  const response = await API.put(`/api/v1/user/${userid}`, data, {
    withCredentials: true,
  });
  return response.data;
};

//Fetch user notes by user id
export const fetchUserNote = async (userid: string) => {
  const response = await API.get(`/api/v1/notes/user/${userid}`, {
    withCredentials: true,
  });
  return response.data;
};

export const deleteData = async () => {
  const response = await API.get(`/api/v1/user/del/all`, {
    withCredentials: true,
  });
  console.log(response.data)
  return response.data;
};
