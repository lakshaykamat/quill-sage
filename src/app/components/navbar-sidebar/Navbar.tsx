"use client";
import { Dispatch, SetStateAction, useState } from "react";
import { User } from "@/app/types";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  Collection_ICON,
  HOME_ICON,
  NOTE_ICON,
  SETTINGS_ICON,
  USER_ICON,
} from "@/app/assets/Icons";
import { AiOutlineSearch } from "react-icons/ai";

type NavBarProps = {
  userData: User;
  setSideBarOpen: Dispatch<SetStateAction<boolean>>;
};

const Navbar = ({ setSideBarOpen, userData }: NavBarProps) => {
  const router = useRouter();
  const [searchText, setSearchText] = useState("");

  const searchNote = () => {
    if (!searchText) return;
    router.push(`/search/${searchText}`);
  };

  return (
    <>
      <nav className="w-full mb-5 border-b border-gray-400">
        <div className="px-3 py-5 lg:px-5 lg:pl-3">
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
              <span className="self-center ml-3 text-xl font-semibold capitalize text-slate-800 sm:text-3xl whitespace-nowrap">
                snap note
              </span>
              <div className="hidden gap-3 ml-6 md:flex it-ems-center">
                <input
                  value={searchText}
                  onChange={(e) => setSearchText(e.target.value)}
                  type="text"
                  placeholder="Search any note"
                  className="px-4 py-2 transition-all bg-inherit rounded-3xl outline-1 outline outline-gray-700 focus:ring-2 ring-gray-700 ring-offset-2"
                />
                <button onClick={searchNote}>
                  <AiOutlineSearch className="w-6 h-6 ml-4 text-gray-600 m" />
                </button>
              </div>
            </div>
            {
              !userData &&
              <div className="flex gap-2">
                <button className="text-gray-700 border-2 border-blue-400 border-solid hover:text-white bg-inherit hover:bg-blue-400 button-1">Register</button>
                <button className="button-1">Login</button>
              </div>
            }
            {
              userData &&
              <div className="flex items-center gap-10">
                <>
                  <Link href="/" title="Home" className="hidden md:block">
                    {HOME_ICON}
                  </Link>
                  <Link
                    href="/collections"
                    title="Collection"
                    className="hidden md:block"
                  >
                    {Collection_ICON}
                  </Link>
                  <Link
                    href="/settings"
                    title="Settings"
                    className="hidden md:block"
                  >
                    {SETTINGS_ICON}
                  </Link>
                </>

                <Link href={"/profile"}>
                  {userData ? (
                    <div className="rounded-full p-[3px] outline-1 outline outline-gray-600 ">
                      <Image
                        width={40}
                        height={40}
                        className="rounded-full drop-shadow"
                        src={userData.avatar}
                        alt="User avatar"
                      />
                    </div>
                  ) : (
                    USER_ICON
                  )}
                </Link>
              </div>}
          </div>
        </div>
      </nav>
    </>
  );
};
export default Navbar;
