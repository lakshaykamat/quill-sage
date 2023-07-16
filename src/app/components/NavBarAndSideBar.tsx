"use client"
import { useState,useContext } from "react"
import Navbar from "./navbar-sidebar/Navbar"
import Sidebar from "./navbar-sidebar/Sidebar"
import { UserContext, useUserContext } from "../context/user"

const NavBarAndSideBar = () => {
  const [isSidebarOpen, setSideBarOpen] = useState(false)
  const { fuser} = useUserContext();

  return (
    <>
      <Navbar userData={fuser} setSideBarOpen={setSideBarOpen} />
      <Sidebar setSideBarOpen={setSideBarOpen} isSidebarOpen={isSidebarOpen} />
    </>
    
  )
}



export default NavBarAndSideBar