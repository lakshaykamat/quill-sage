"use client";
import { useQuery } from "@tanstack/react-query";
import React from "react";
import { fetchAllTags } from "../utils/api/tags";
import { fetchNotesOnFeed } from "../utils/api/notes";
import { Note } from "../types";
import Card from "../components/Card";
import Link from "next/link";

const ExplorePage = () => {
  const fetchTags = useQuery({
    queryKey: ["fetch_note_tags"],
    queryFn: () => fetchAllTags(),
  });
  const feedNotesQuery = useQuery({
    queryKey: ["feedNotes"],
    queryFn: () => fetchNotesOnFeed(),
  });
  if (fetchTags.data && feedNotesQuery.data) {
    return (
      <main className="max-w-5xl mx-auto mt-12">
        <h1>Explore</h1>

        {fetchTags.data.map((tag: string) => {
          const notes = feedNotesQuery.data.filter((note) =>
            note.tags.includes(tag)
          );
          return <Section title={tag} notes={notes} />;
        })}
      </main>
    );
  }
  if (fetchTags.isLoading && feedNotesQuery.isLoading)
    return <h2>Loading...</h2>;
};

const Section = ({ title, notes }: { title: string; notes: Note[] }) => {
  if (notes.length <= 0) return;
  return (
    <div>
      <div className="flex justify-between my-6">
        <h3>{title}</h3>
        <Link href={`/explore/${title}`}>View all</Link>
      </div>
      <div className="grid grid-cols-3 gap-5">
        {notes.slice(0,3).map((note) => {
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
export default ExplorePage;
