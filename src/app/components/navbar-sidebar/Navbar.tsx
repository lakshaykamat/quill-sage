import { Dispatch, SetStateAction, } from "react"
import { User } from "@/app/types"
import Image from "next/image"
import Link from "next/link"
import { Collection_ICON, HOME_ICON, NOTE_ICON, SETTINGS_ICON, USER_ICON } from "@/app/assets/Icons"

type NavBarProps = {
  userData: User
  setSideBarOpen: Dispatch<SetStateAction<boolean>>
}

const Navbar = ({ setSideBarOpen, userData }: NavBarProps) => {

  return (
    <>
      <nav className="w-full mb-5 border-b border-gray-500">
        <div className="px-3 py-3 lg:px-5 lg:pl-3">
          <div className="flex items-center justify-around">
            <div className="flex items-center justify-start">
              <button
                onClick={() => setSideBarOpen(true)}
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
              {NOTE_ICON}
              <span className="self-center ml-3 text-xl font-semibold capitalize text-slate-800 sm:text-2xl whitespace-nowrap">
                snap note
              </span>
              <div className="hidden gap-3 ml-6 md:flex it-ems-center">
                <input type="text" placeholder="Search any note" className="px-3 py-1 transition-all bg-inherit rounded-2xl outline-1 outline outline-gray-700 focus:ring-2 ring-gray-700 ring-offset-2" />
              </div>
            </div>

            <div className="flex items-center gap-5">
              {/* {userData && <span className="hidden text-sm md:block">
                <span className="font-semibold">{getRandomGreeting()}</span> {userData.username}</span>} */}
              <Link href="/" className="hidden md:block">
                {HOME_ICON}
              </Link>
              <Link href="/collections" className="hidden md:block">
                {Collection_ICON}
              </Link>
              <Link href={'/profile'}>
                {
                  userData ? <Image width={30} height={30} className="rounded-full" src={userData.avatar} alt="User avatar" /> : USER_ICON
                }
              </Link>
              <Link href="/settings" className="hidden md:block">
                {SETTINGS_ICON}
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </>

  )
}
export default Navbar