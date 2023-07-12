import { FaUserCircle, FaStickyNote } from "react-icons/fa"
import { Dispatch, SetStateAction ,useState,useEffect} from "react"
import { User } from "@/app/types"
import { getRandomGreeting } from "@/app/lib/getRandomGreetings"
import Image from "next/image"

type NavBarProps = {
  userData:User
  setSideBarOpen: Dispatch<SetStateAction<boolean>>
}

const Navbar = ({ setSideBarOpen,userData }: NavBarProps) => {
  
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
                  Snap Note
                </span>
              </div>
              <div className="flex items-center gap-2">
                {userData && <span className="hidden text-sm md:block">
                  <span className="font-semibold">{getRandomGreeting()}</span> {userData.username}</span>}
                {
                  userData ? <Image width={24} height={24} className="rounded-full" src={userData.avatar} alt="User avatar" /> : <FaUserCircle className="w-6 h-6 text-gray-800" />
                }
              </div>
            </div>
          </div>
        </nav>
      </>
  
    )
  }
  export default Navbar