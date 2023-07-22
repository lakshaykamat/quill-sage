"use client"
import { useState, } from "react"
import Navbar from "./navbar-sidebar/Navbar"
import { useUserContext } from "../context/user"
import Sidebar from "./navbar-sidebar/Sidebar"

const NavBarAndSideBar = () => {
  const [isSidebarOpen, setSideBarOpen] = useState(false)
  const { fuser} = useUserContext();

  return (
    <>
      <Navbar userData={fuser} setSideBarOpen={setSideBarOpen} />
      {/* <Sidebar setSideBarOpen={setSideBarOpen} isSidebarOpen={isSidebarOpen} /> */}
    </>
    
  )
}



export default NavBarAndSideBar