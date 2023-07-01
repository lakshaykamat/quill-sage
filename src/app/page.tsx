'use client'
import { useState } from "react";
import NavBarAndSideBar from "@/components/NavBarAndSideBar";
import { AppState } from '@/constants/app-state';
import Feed from "./components/Feed";
import Tiptap from "./components/TipTap";

export default function Home() {
  const [appState, setAppState] = useState(AppState.FEED)
  let content;
  if (appState === AppState.FEED) {
    content = <Feed/>
  } else if (appState === AppState.SETTINGS) {
    content = (<Tiptap/>)
  } else {
    content = (<><h1>Other</h1></>)
  }
  return (
    <>
      <NavBarAndSideBar setAppState={setAppState} />
      <div className="p-4 md:ml-64">
        <div className="p-4 mt-14">
          {content}
        </div>
      </div>
    </>
  )
}