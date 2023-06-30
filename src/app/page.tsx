'use client'
import { useState } from "react";
import Card from "@/components/Card";
import NavBarAndSideBar from "@/components/NavBarAndSideBar";
import { AppState } from '@/constants/app-state';

export default function Home() {
  const [appState, setAppState] = useState(AppState.FEED)
  const notes = [
    {
      title: "Welcome",
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus amet ea quisquam voluptas cum doloribus facere dolores iste, inventore voluptatem.",
      date: "12 July 2014",
      likes: 23,
      author: "Lakshay"
    }
  ]
  let content;
  if (appState === AppState.FEED) {
    content = (
      <>
        <div className="flex flex-col items-center max-w-2xl gap-3 mx-auto">
          <div className="flex justify-between w-full mb-2">
            <h1 className="mb-2 text-3xl font-bold text-start">My Feed</h1>
            <button>Sort By</button>
          </div>
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </>
    )
  } else if (appState === AppState.SETTINGS) {
    content = (<><h1>Settings</h1></>)
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
