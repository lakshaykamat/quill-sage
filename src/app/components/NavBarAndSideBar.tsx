"use client"
import { useState } from "react"
import Navbar from "./navbar-sidebar/Navbar"
import Sidebar from "./navbar-sidebar/Sidebar"
import { useQuery } from "@tanstack/react-query"
import { redirect  } from "next/navigation";
import API from "../utils/api"
import isAuth from "../isAuth"

const NavBarAndSideBar = () => {
  const [isSidebarOpen, setSideBarOpen] = useState(false)
  const userQuery = useQuery({
    queryKey: ["current_user"], queryFn: async () => {
      const response = await API.get('/auth/getuser', { withCredentials: true })
      return response.data
    },
    refetchInterval:5000
  })
    

  return (
    <>
      <Navbar userData={userQuery.data} setSideBarOpen={setSideBarOpen} />
      <Sidebar setSideBarOpen={setSideBarOpen} isSidebarOpen={isSidebarOpen} />
    </>
    
  )
}



export default isAuth(NavBarAndSideBar)