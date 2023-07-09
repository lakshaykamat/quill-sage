import Link from 'next/link'
import { Collection, Feed, Settings } from "@/app/assets/SidebarIcons"

type SideBarProps = {
    isSidebarOpen: boolean,
}

const Sidebar = ({ isSidebarOpen }: SideBarProps) => {
  const navbar_sidebar = [
    {
      id:1,
      url:'/',
      icon: Feed
    },
    {
      id:2,
      url:'collections',    
      icon:Collection
    },
    {
      id:3,
      url:"settings",
      icon:Settings
    }
  ]
    return (
      <>
        <aside
          id="logo-sidebar"
          className={`fixed top-0 left-0 z-40 md:w-64 w-[90%] h-screen pt-20 transition-transform bg-primary border-r border-gray-200 md:translate-x-0 dark:bg-gray-800 dark:border-gray-700 ${isSidebarOpen ? " translate-x-0" : "-translate-x-full"}`}
          aria-label="Sidebar"
        >
          <div className="h-full px-3 pb-4 overflow-y-auto bg-primary dark:bg-gray-800">
            <ul className="space-y-2 font-medium">
              {
                navbar_sidebar.map((item)=>{
                  return <Link className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700" href={item.url} key={item.id}>
                    {item.icon}
                    <span className="ml-3">{item.url}</span>
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