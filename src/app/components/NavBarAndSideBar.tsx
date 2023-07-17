"use client"
import { useState } from "react"
import Navbar from "./navbar-sidebar/Navbar"
import Sidebar from "./navbar-sidebar/Sidebar"
import {  useUserContext } from "../context/user"

const NavBarAndSideBar = () => {
  const [isSidebarOpen, setSideBarOpen] = useState(false)
  // const { fuser } = useContext(UserContext);
  const {fuser}  = useUserContext()
  
  return (
    <>
      <Navbar userData={fuser} setSideBarOpen={setSideBarOpen} />
      <Sidebar isSidebarOpen={isSidebarOpen} />
    </>
    
  )
}



export default NavBarAndSideBar