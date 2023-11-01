"use client"
import { useState } from "react"
import Navbar from "./navbar-sidebar/Navbar"
import Sidebar from "./navbar-sidebar/Sidebar"
import { useQuery } from "@tanstack/react-query"
import { useRouter } from "next/navigation";
import API from "../utils/api"

const NavBarAndSideBar = () => {
  const router = useRouter()
  const [isSidebarOpen, setSideBarOpen] = useState(false)
  const userQuery = useQuery({
    queryKey: ["current_user"], queryFn: async () => {
      const response = await API.get('/auth/getuser', { withCredentials: true })
      return response.data
    },
    refetchInterval:5000
  })
  if(userQuery.error) {
    router.push('http://localhost:3000/login')
  } 
    

  return (
    <>
      <Navbar userData={userQuery.data} setSideBarOpen={setSideBarOpen} />
      <Sidebar setSideBarOpen={setSideBarOpen} isSidebarOpen={isSidebarOpen} />
    </>
    
  )
}



export default NavBarAndSideBar