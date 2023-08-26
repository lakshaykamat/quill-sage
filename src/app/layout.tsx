"use client";
import "./styles/globals.css";
import { Inter } from "next/font/google";
import Context from "./context/user.js";
import NavBarAndSideBar from "./components/NavBarAndSideBar";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <html lang="en">
        <head>
          <title>Snap Note</title>
          <link rel="icon" href="/src/app/favicon.ico" sizes="any" />
        </head>
        <body className={`${inter.className} bg-neutral-200`}>
          <Context>
            <NavBarAndSideBar />
            {children}
          </Context>
          <ReactQueryDevtools />
        </body>
      </html>
    </QueryClientProvider>
  );
}
