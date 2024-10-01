import React, { Fragment } from "react";
import { Navbar } from "../../components/Navbar/Navbar";
import Sidebar from "../../components/Sidebar/Sidebar";
import { useNotes } from "../../Context/NotesContext";
import NotesCard from "../../components/NotesCard/NotesCard";

const Archive = () => {
  const { archive } = useNotes();

  return (
    <>
      <Navbar />
      <main className="flex gap-6">
        <Sidebar />

        <div className="mt-3 flex flex-wrap gap-2  w-screen">
          {archive?.length > 0 ? (
            archive.map(({ id, title, text, isPinned }) => (
              //note is destrucred to id,title,text
              <NotesCard
                key={id}
                id={id}
                title={title}
                text={text}
                isPinned={isPinned}
              />
            ))
          ) : (
            <p>No Archive Notes Are Available</p>
          )}
        </div>
      </main>
    </>
  );
};

export default Archive;
