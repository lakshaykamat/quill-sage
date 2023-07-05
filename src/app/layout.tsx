"use client";
import NavBarAndSideBar from "./components/NavBarAndSideBar";
import "./styles/globals.css";
import { Inter } from "next/font/google";
import { useState, useEffect } from "react";
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
  const [appState, setAppState] = useState<string | null>(null);

  useEffect(() => {
    setAppState(localStorage.getItem("app"));
  }, []);

  useEffect(() => {
    if (appState) {
      localStorage.setItem("app", appState);
    }
  }, [appState]);
  return (
    <html lang="en">
      <head>
        <title>Snap Note</title>
      </head>
      <body className={`${inter.className} bg-very_light`}>
        {!appState ? (
          <h1>Loading...</h1>
        ) : (
          <>
            <NavBarAndSideBar setAppState={setAppState} />
            <div className="p-4 md:ml-64">
              <main className="px-1 py-2 sm:px-2 mt-14">
                {children}
              </main>
            </div>
          </>
        )}
      </body>
    </html>
  );
}
