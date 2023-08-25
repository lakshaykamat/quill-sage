"use client";
import { NotFoundSVG } from "@/app/assets/Illustrations";
import Card from "@/app/components/Card";
import { searchNote } from "@/app/utils/api/notes";
import { useQuery } from "@tanstack/react-query";
import React from "react";

const SearchPage = ({ params }: { params: { key: string } }) => {
  const { key } = params;
  const response = useQuery({
    queryKey: ["searchNote"],
    queryFn: () => {
      return searchNote(key);
    },
  });

  if (response.data) {
    return (
      <main className="flex flex-col items-center justify-center mx-auto max-w-7xl">
        <h3 className="mb-5">Search Results for {key}</h3>
        <div className="grid grid-cols-1 gap-5 mx-5 lg:grid-cols-3 sm:grid-cols-2">
          {response.data.length > 0 ? (
            response.data.map((note) => {
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
            <div className="flex flex-col items-center justify-center px-4 py-8 mx-auto my-6">
              <NotFoundSVG />
            </div>
          )}
        </div>
      </main>
    );
  }

  if (response.isLoading) {
    return <h1>Loading...</h1>;
  }
  if (response.isError) {
    return <h1>Error :/</h1>;
  }
};

export default SearchPage;
