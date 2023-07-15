// @ts-ignore-enable


"use client"
import { createContext, useContext,useState,useEffect, Context } from "react";
import { getUser } from "../lib/";
// Creating the user context


export const UserContext = createContext(null);

// Making the function which will wrap the whole app using Context Provider
export default function Context2({ children }) {
  
  const [fuser,setfUser] = useState(null)
  
  useEffect(() => {
    const fetch = async () => {
      const res = await getUser()
      setfUser(res)
    }
    fetch()
  }, [])


  return (
    <UserContext.Provider value={{fuser}}>{children}</UserContext.Provider>
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