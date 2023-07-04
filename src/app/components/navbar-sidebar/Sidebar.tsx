import { MdRssFeed } from "react-icons/md"
import { AppState } from '../../constants/'
import { AiFillTags, AiFillSetting ,AiFillFileAdd} from "react-icons/ai"
import { BsCollection } from "react-icons/bs"
import { Dispatch, SetStateAction } from "react"


type SideBarProps = {
    isSidebarOpen: boolean,
    setAppState: Dispatch<SetStateAction<string>>
}

const Sidebar = ({ isSidebarOpen, setAppState }: SideBarProps) => {
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
              <li onClick={() => setAppState(AppState.COLLECTIONS)}>
                <a
                  href="#"
                  className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  <BsCollection className="w-6 h-6 text-gray-800" />
                  <span className="flex-1 ml-3 whitespace-nowrap">Collections</span>
                </a>
              </li>
              <li onClick={() => setAppState(AppState.NEW_NOTE)}>
                <a
                  href="#"
                  className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  <AiFillFileAdd className="w-6 h-6 text-gray-800" />
                  <span className="flex-1 ml-3 whitespace-nowrap">New Note</span>
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
export default Sidebar