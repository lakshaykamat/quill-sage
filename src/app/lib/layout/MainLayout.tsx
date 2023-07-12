import NavBarAndSideBar from "@/app/components/NavBarAndSideBar";
import Context from "@/app/context/user";

export const MainLayout = ({
    children,
  }: {
    children: React.ReactNode
  }) => {
    return (
      <Context>
        <NavBarAndSideBar/>
        <div className="p-4 md:ml-64">
          <main className="px-1 py-2 sm:px-2 mt-14">
            {children}
          </main>
        </div>
    </Context>
    )
}
export default MainLayout