"use client"
import { useState,useContext } from "react"
import Navbar from "./navbar-sidebar/Navbar"
import Sidebar from "./navbar-sidebar/Sidebar"
import { UserContext } from "../context/user"

const NavBarAndSideBar = () => {
  const [isSidebarOpen, setSideBarOpen] = useState(false)
  const { fuser } = useContext(UserContext);
  
  return (
    <>
      <Navbar userData={fuser} setSideBarOpen={setSideBarOpen} />
      <Sidebar isSidebarOpen={isSidebarOpen} />
    </>
    
  )
}



export default NavBarAndSideBar