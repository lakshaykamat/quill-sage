"use client"
import { useState } from "react"
import Navbar from "./navbar-sidebar/Navbar"
import Sidebar from "./navbar-sidebar/Sidebar"
import { useUserContext } from "../context/user"

const NavBarAndSideBar = () => {
  const [isSidebarOpen, setSideBarOpen] = useState(false)
  const { user } = useUserContext();
  console.log(user)
  
  return (
    <>
      <Navbar user={user} setSideBarOpen={setSideBarOpen} />
      <Sidebar isSidebarOpen={isSidebarOpen} />
    </>
    
  )
}



export default NavBarAndSideBar