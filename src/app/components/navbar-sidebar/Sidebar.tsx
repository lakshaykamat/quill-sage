import { Collection_ICON, FEED_ICON, SETTINGS_ICON } from '@/app/assets/Icons'
import Link from 'next/link'
import { Dispatch, SetStateAction } from 'react'

type SideBarProps = {
    isSidebarOpen: boolean,
    setSideBarOpen:Dispatch<SetStateAction<boolean>>
}

const Sidebar = ({ isSidebarOpen,setSideBarOpen }: SideBarProps) => {
  const navbar_sidebar = [
    {
      id:1,
      url:'/',
      icon: FEED_ICON,
      name:"Feed"
    },
    {
      id:2,
      url:'/collections',    
      icon:Collection_ICON,
      name:"Collections"
    },
    {
      id:3,
      url:"/settings",
      icon:SETTINGS_ICON,
      name:"Settings"
    }
  ]
    return (
      <>
        <aside
          id="logo-sidebar"
          className={`fixed block top-0 left-0 z-40 md:hidden w-[80%] h-screen pt-10 transition-transform bg-primary border-r border-gray-200 md:translate-x-0 dark:bg-gray-800 dark:border-gray-700 ${isSidebarOpen ? " translate-x-0" : "-translate-x-full"}`}
          aria-label="Sidebar"
        >
          <div className="px-3 pb-4 overflow-y-auto bg-primary dark:bg-gray-800">
              <p onClick={()=>setSideBarOpen(false)}>close</p>
            <ul className="space-y-2 font-medium">
              {
                navbar_sidebar.map((item)=>{
                  return <Link onClick={()=>setSideBarOpen(false)} className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700" href={item.url} key={item.id}>
                    {item.icon}
                    <span className="ml-3">{item.name}</span>
                </Link>
                })
              }
            </ul>
          </div>
        </aside>
      </>
    )
  }
export default Sidebar