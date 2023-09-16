"use client";
import { useQuery } from "@tanstack/react-query";
import React from "react";
import { fetchAllTags } from "./utils/api/tags";
import { fetchNotesOnFeed } from "./utils/api/notes";
import { Note } from "./types";
import Card from "./components/Card";
import Link from "next/link";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const MOST_RECENT_NOTES_LIMIT = 6;
const TAG_NOTES_LIMIT = 3;

const ExplorePage = () => {
  const fetchTags = useQuery({
    queryKey: ["fetch_note_tags"],
    queryFn: () => fetchAllTags(),
  });
  const feedNotesQuery = useQuery({
    queryKey: ["feedNotes"],
    queryFn: () => fetchNotesOnFeed(),
  });
  return (
    <main className="max-w-5xl mx-auto my-12">
      <h1 className="mb-12">Explore</h1>
      <div>
        <SectionHeader title={"Most Recent"} url={`/explore`} />
        <div className="grid grid-cols-3 gap-5">
          {fetchTags.data && feedNotesQuery.data ? (
            feedNotesQuery.data
              .slice(0, MOST_RECENT_NOTES_LIMIT)
              .map((note) => {
                return (
                  <Card
                    key={note._id}
                    note_id={note._id}
                    user_id={note.user_id}
                    title={note.title}
                    likes={note.likes}
                    tags={note.tags}
                    content={note.content}
                    date={note.createdAt}
                  />
                );
              })
          ) : (
           <LoadingSkeleton/>
          )}
        </div>
      </div>
      {fetchTags.data && feedNotesQuery.data ? (
        fetchTags.data.map((tag: string,i:number) => {
          const notes = feedNotesQuery.data.filter((note) =>
            note.tags.includes(tag)
          );
          return <Section key={i} title={tag} notes={notes} />;
        })
      ) : (
        <div className="my-6">
          <Skeleton height={50} />
         <LoadingSkeleton/>
        </div>
      )}
    </main>
  );
};

const Section = ({ title, notes }: { title: string; notes: Note[] }) => {
  if (notes.length <= 0) return;
  return (
    <div>
      <SectionHeader title={title} url={`/explore/${title}`} />
      <div className="grid grid-cols-3 gap-5">
        {notes.slice(0, TAG_NOTES_LIMIT).map((note) => {
          return (
            <Card
              key={note._id}
              note_id={note._id}
              user_id={note.user_id}
              title={note.title}
              likes={note.likes}
              tags={note.tags}
              content={note.content}
              date={note.createdAt}
            />
          );
        })}
      </div>
    </div>
  );
};
const SectionHeader = ({ title, url }: { title: string; url: string }) => {
  return (
    <div className="flex items-center justify-between my-6">
      <h3>{title}</h3>
      <Link href={url} className="text-blue-600">
        View all
      </Link>
    </div>
  );
};

const LoadingSkeleton = () => {
  return (
    <>
      <div className="flex gap-5 my-6">
        <Skeleton height={300} width={300} />
        <Skeleton height={300} width={300} />
        <Skeleton height={300} width={300} />
      </div>
    </>
  );
};
export default ExplorePage;
