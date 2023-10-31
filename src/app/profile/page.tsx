"use client";
import { useQuery } from "@tanstack/react-query";
import { fetchUserNote, updateUser, userDetails } from "../utils/api/user";
import { Note } from "../types";
import { FormEvent, useState } from "react";
import Header from "./components/Header";
import { ProfileCard } from "./components/ProfileCards";
import { NotFoundSVG } from "../assets/Illustrations";
import Card from "../components/Card";

const ProfilePage = () => {
  const [inputBox, setInputBox] = useState({ status: false, text: "" });
  const user_details = useQuery({
    queryKey: ["fetch_user"],
    queryFn: () => userDetails(),
  });
  const user_notes = useQuery({
    queryKey: ["fetch_user_notes"],
    queryFn: () => user_details.data && fetchUserNote(user_details.data._id),
    enabled: user_details.isSuccess,
  });

  if (user_details.isLoading) return <h1>Loading...</h1>;
  if (user_details.isError) return <h1>Error</h1>;

  async function editBio(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!user_details.data) return;
    setInputBox({ ...inputBox, status: false });
    await updateUser(user_details.data._id, { bio: inputBox.text });
    user_details.refetch();
  }

  return (
    <div className="max-w-6xl mx-auto">
      <Header
        avatar={user_details.data.avatar}
        bio={user_details.data.bio}
        editBio={editBio}
        inputBox={inputBox}
        setInputBox={setInputBox}
        username={user_details.data.username}
      />

      {user_notes.isLoading ? (
        <h1>Loading</h1>
      ) : (
        user_notes.data.length === 0 ? <NotFoundSVG/>
          :
          <div className="grid grid-cols-3 gap-5 mb-12">
            {user_notes.data.map((note: Note) => {
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
      )}
    </div>
  );
};

export default ProfilePage;
