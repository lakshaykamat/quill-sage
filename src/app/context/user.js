"use client"
import { createContext, useContext } from "react";
import { useQuery } from "@tanstack/react-query"
import API from "../utils/api";
import { useRouter } from "next/navigation";


export const UserContext = createContext(null);

// Making the function which will wrap the whole app using Context Provider
export default function Context ({ children }) {
  const router = useRouter()
  const userQuery = useQuery({
    queryKey: ["current_user"], queryFn: async () => {
      const response = await API.get('/auth/getuser', { withCredentials: true })
      return response.data
    }
  })
  if (userQuery.isError) router.push(`${process.env.NEXT_PUBLIC_SERVER_URL}/auth/google`)

  const current_user = userQuery.data
  return (
    <UserContext.Provider value={{ current_user }}>{children}</UserContext.Provider>
  );
}

// Make useUserContext Hook to easily use our context throughout the application
export function useUserContext () {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useUserContext must be used within a UserContextProvider");
  }
  return context
}