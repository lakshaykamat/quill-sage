'use client'
import { Dispatch, SetStateAction, useState } from "react"
import { FaUserCircle, FaStickyNote } from "react-icons/fa"
import { MdRssFeed } from "react-icons/md"
import { AppState } from '@/constants/app-state'
import { AiFillTags, AiFillSetting } from "react-icons/ai"
import { BsCollection } from "react-icons/bs"

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
      <SideBar isSidebarOpen={isSidebarOpen} setAppState={setAppState} />
    </>
  )
}
const Navbar = ({ setSideBarOpen }: NavBarProps) => {
  return (
    <>
      <nav className="fixed top-0 z-50 w-full border-b border-button bg-primary dark:bg-gray-800 dark:border-gray-700">
        <div className="px-3 py-3 lg:px-5 lg:pl-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center justify-start">
              <button
                onClick={() => setSideBarOpen((prev) => !prev)}
                data-drawer-target="logo-sidebar"
                data-drawer-toggle="logo-sidebar"
                aria-controls="logo-sidebar"
                type="button"
                className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              >
                <span className="sr-only">Open sidebar</span>
                <svg
                  className="w-6 h-6"
                  aria-hidden="true"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    clipRule="evenodd"
                    fillRule="evenodd"
                    d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
                  />
                </svg>
              </button>
              <FaStickyNote className="w-6 h-6 ml-12 text-gray-800" />
              <span className="self-center ml-3 text-xl font-semibold text-gray-800 sm:text-2xl whitespace-nowrap dark:text-white">
                Quill Sage
              </span>
            </div>
            <div>
              <FaUserCircle className="w-6 h-6 text-gray-800" />
            </div>
          </div>
        </div>
      </nav>
    </>

  )
}

const SideBar = ({ isSidebarOpen, setAppState }: SideBarProps) => {
  return (
    <>
      <aside
        id="logo-sidebar"
        className={`fixed top-0 left-0 z-40 md:w-64 w-[90%] h-screen pt-20 transition-transform bg-primary border-r border-gray-200 md:translate-x-0 dark:bg-gray-800 dark:border-gray-700 ${isSidebarOpen ? " translate-x-0" : "-translate-x-full"}`}
        aria-label="Sidebar"
      >
        <div className="h-full px-3 pb-4 overflow-y-auto bg-primary dark:bg-gray-800">
          <ul className="space-y-2 font-medium">
            <li onClick={() => setAppState(AppState.FEED)}>
              <a
                href="#"
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
              >

                <MdRssFeed className="w-6 h-6 text-gray-800" />
                <span className="ml-3">Feed</span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                <AiFillTags className="w-6 h-6 text-gray-800" />
                <span className="flex-1 ml-3 whitespace-nowrap">Tags</span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                <BsCollection className="w-6 h-6 text-gray-800" />
                <span className="flex-1 ml-3 whitespace-nowrap">Collections</span>
              </a>
            </li>
            <li onClick={() => setAppState(AppState.SETTINGS)}>
              <a
                href="#"
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                <AiFillSetting className="w-6 h-6 text-gray-800" />
                <span className="flex-1 ml-3 whitespace-nowrap">Settings</span>
              </a>
            </li>
          </ul>
        </div>
      </aside>
    </>
  )
}
export default NavBarAndSideBar