'use client'
import { useState } from "react";
import NavBarAndSideBar from "@/components/NavBarAndSideBar";
import { AppState } from '@/constants/app-state';
import Feed from "@/components/Feed";
import NewNote from "@/components/NewNote";

export default function Home() {
  const [appState, setAppState] = useState<string>(AppState.FEED)
  let content :React.JSX.Element;
  if (appState === AppState.FEED) {
    content = <Feed/>
  } else if (appState === AppState.SETTINGS) {
    content = <NewNote/>
  } else {
    content = <h1>Other</h1>
  }
  return (
    <>
      <NavBarAndSideBar setAppState={setAppState} />
      <div className="p-4 md:ml-64">
        <div className="px-1 py-2 sm:px-2 mt-14">
          {content}
        </div>
      </div>
    </>
  )
}