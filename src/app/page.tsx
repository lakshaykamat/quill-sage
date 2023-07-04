'use client'
import { useState } from "react";
import NavBarAndSideBar from "@/components/NavBarAndSideBar";
import { AppState } from './constants/';
import Feed from "@/components/Feed";
import NewNote from "@/components/NewNote";
import Collections from "@/components/Collections";

export default function Home() {
  const [appState, setAppState] = useState<string>(AppState.FEED)
  let content :React.JSX.Element;
  if (appState === AppState.FEED) {
    content = <Feed/>
  } else if (appState === AppState.NEW_NOTE) {
    content = <NewNote/>
  }else if(appState === AppState.COLLECTIONS){
    content = <Collections/>
  }else if(appState === AppState.COLLECTIONS){
    content = <h1>Settings</h1>
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