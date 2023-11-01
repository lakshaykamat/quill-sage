import API from "../api";

//Fetch all tags
export const fetchAllTags = async () => {
  const response = await API.get(`/api/v1/notes/tags/all`, {
    withCredentials: true,
  });
  return response.data;
};