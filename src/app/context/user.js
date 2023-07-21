// @ts-ignore-enable


"use client"
import { createContext, useContext,useState,useEffect } from "react";
import { getUser } from "../lib/";
import { useRouter } from 'next/navigation'
// Creating the user context


export const UserContext = createContext(null);

// Making the function which will wrap the whole app using Context Provider
export default function Context2({ children }) {
  
  const [current_user,setCurrent_user] = useState(null)
  
  useEffect(() => {
    const fetch = async () => {
      const res = await getUser()
      setCurrent_user(res)
    }
    fetch()
  }, [])


  return (
    <UserContext.Provider value={{current_user}}>{children}</UserContext.Provider>
  );
}

// Make useUserContext Hook to easily use our context throughout the application
export function useUserContext(){
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useUserContext must be used within a UserContextProvider");
  }
  return context
}