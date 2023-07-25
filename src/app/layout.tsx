"use client"
import "./styles/globals.css";
import { Inter } from "next/font/google";
import Context from './context/user.js'
import NavBarAndSideBar from "./components/NavBarAndSideBar";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
const inter = Inter({ subsets: ["latin"] });


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const queryClient = new QueryClient()
  return (
    <QueryClientProvider client={queryClient}>
      <html lang="en">
        <head>
          <title>Snap Note</title>
          <link rel="icon" href="/src/app/favicon.ico" sizes="any" />
          <meta aria-description=""></meta>
        </head>
        <body className={`${inter.className}`}>
          <Context>
            <NavBarAndSideBar />
            {/* <div className="p-4 md:ml-64"> */}
            {/* <main className="px-1 py-2 sm:px-2 mt-14"> */}
            {children}
            {/* </main> */}
            {/* </div> */}
          </Context>
      <ReactQueryDevtools/>
        </body>
      </html>
    </QueryClientProvider>
  );
}
