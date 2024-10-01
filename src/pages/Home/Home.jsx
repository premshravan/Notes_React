import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Sidebar from "../../components/Sidebar/Sidebar";
import { useNotes } from "../../Context/NotesContext";
import NotesCard from "../../components/NotesCard/NotesCard";

const Home = () => {
  const { title, text, notes, archive, important, notesDispatch } = useNotes();

  const onTitleChange = (e) => {
    notesDispatch({
      type: "TITLE",
      payload: e.target.value,
    });
  };
  const onTextChange = (e) => {
    notesDispatch({
      type: "TEXT",
      payload: e.target.value,
    });
  };

  function onAddClick() {
    notesDispatch({
      type: "ADD_NOTE",
    });
    notesDispatch({
      type: "CLEAR_INPUT",
    });
  }

  const pinnedNotes =
    notes?.length > 0 && notes.filter(({ isPinned }) => isPinned);
  const otherNotes =
    notes?.length > 0 && notes.filter(({ isPinned }) => !isPinned);

  console.log(archive);
  console.log(important);

  return (
    <>
      <Navbar />
      <main className="flex gap-6">
        <Sidebar />
        <div>
          <div className="flex flex-col gap-1 mt-2 w-[350px] relative ">
            <input
              value={title}
              onChange={onTitleChange}
              className="border  rounded w-[350px]  bg-amber-50 font-bold capitalize focus:outline-none text-zinc-800 border-neutral-800"
              placeholder="Enter an input"
            />
            <textarea
              value={text}
              onChange={onTextChange}
              className="border h-[100px] w-[350px] rounded bg-amber-50 focus:outline-none border-neutral-800 text-zinc-700 capitalize"
              placeholder="Enter a text"
            />
            <button
              disabled={title.length === 0}
              onClick={onAddClick}
              className="flex absolute bottom-2 right-2 border border-rose-300 rounded-full bg-indigo-800 text-slate-200"
            >
              <span class="material-icons-outlined ">add</span>
            </button>
          </div>

          <h1 className="mt-3 font-bold text-purple-700 ">Notes :</h1>
          {pinnedNotes.length > 0 && (
            <>
              <h3 className="mt-10 font-bold ">Pinned Notes are :</h3>

              <div className="mt-1 flex flex-wrap gap-2 ">
                {pinnedNotes?.length > 0 &&
                  pinnedNotes.map(({ id, title, text, isPinned }) => (
                    //note is destrucred to id,title,text
                    <NotesCard
                      key={id}
                      id={id}
                      title={title}
                      text={text}
                      isPinned={isPinned}
                    />
                  ))}
              </div>
            </>
          )}
          {pinnedNotes.length > 0 && (
            <h3 className="mt-10 font-bold">Other Notes are :</h3>
          )}
          <div className="mt-1 flex flex-wrap gap-2 ">
            {otherNotes?.length > 0 &&
              otherNotes.map(({ id, title, text, isPinned }) => (
                //note is destrucred to id,title,text
                <NotesCard
                  key={id}
                  id={id}
                  title={title}
                  text={text}
                  isPinned={isPinned}
                />
              ))}
          </div>
        </div>
      </main>
    </>
  );
};

export default Home;
