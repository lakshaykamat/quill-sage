// Define a function to determine the layout based on the current route
import HomeLayout from "./layout/HomeLayout";
import MainLayout from "./layout/MainLayout";

// AdminLayout.js
export const getLayout = (path:string, childern:React.ReactNode)=> {
    if (path.startsWith('/home')) {
        return <HomeLayout>{childern} </HomeLayout>;
    } else {
        return <MainLayout>{childern} </MainLayout>;
    }
};


