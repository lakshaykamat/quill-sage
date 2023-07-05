import { Dispatch, SetStateAction, useState } from "react"
import Navbar from "./navbar-sidebar/Navbar"
import Sidebar from "./navbar-sidebar/Sidebar"


type NavbarAndSidebarProps = {
  setAppState: Dispatch<SetStateAction<string| null>>,
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