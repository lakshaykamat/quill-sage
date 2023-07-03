'use client'
import { Dispatch, SetStateAction, useState } from "react"
import Navbar from "./navbar-sidebar/Navbar"
import Sidebar from "./navbar-sidebar/Sidebar"


type NavbarAndSidebarProps = {
  setAppState: Dispatch<SetStateAction<string>>,
}
type NavBarProps = {
  setSideBarOpen: Dispatch<SetStateAction<boolean>>
}
type SideBarProps = {
  isSidebarOpen: boolean,
  setAppState: Dispatch<SetStateAction<string>>
}
const NavBarAndSideBar = ({ setAppState }: NavbarAndSidebarProps) => {
  const [isSidebarOpen, setSideBarOpen] = useState(false)
  return (
    <>
      <Navbar setSideBarOpen={setSideBarOpen} />
      <Sidebar isSidebarOpen={isSidebarOpen} setAppState={setAppState} />
    </>
  )
}



export default NavBarAndSideBar