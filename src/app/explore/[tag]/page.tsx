"use client";
import Card from "@/app/components/Card";
import { fetchNotesOnFeed } from "@/app/utils/api/notes";
import { useQuery } from "@tanstack/react-query";
import React from "react";

const ExploreTag = ({ params }: { params: { tag: string } }) => {
  const { tag } = params;
  const feedNotesQuery = useQuery({
    queryKey: ["feedNotes"],
    queryFn: () => fetchNotesOnFeed(),
  });
  if (feedNotesQuery.isLoading) return <h1>Loading...</h1>;
  if (feedNotesQuery.data) {
    return (
      <main className="max-w-5xl mx-auto mt-12">
        <h1>{tag}</h1>
        <div className="grid grid-cols-1 gap-5 mt-5 lg:grid-cols-3 sm:grid-cols-2">
          {feedNotesQuery.data
            .filter((note) => note.tags.includes(tag))
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
            })}
        </div>
      </main>
    );
  }
};

export default ExploreTag;
