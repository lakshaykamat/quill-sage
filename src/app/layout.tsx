import NavBarAndSideBar from "./components/NavBarAndSideBar";
import Context from "./context/user";
import "./styles/globals.css";
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Snap Note",
  description: "Snap Note Notes application",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  return (
    <html lang="en">
      <body className={`${inter.className} bg-very_light`}>
        <Context>
            <NavBarAndSideBar/>
            <div className="p-4 md:ml-64">
              <main className="px-1 py-2 sm:px-2 mt-14">
                {children}
              </main>
            </div>
        </Context>
      </body>
    </html>
  );
}
