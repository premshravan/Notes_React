import React from "react";
import { useNotes } from "../../Context/NotesContext";
import {
  findNotesInArchive,
  findNotesInDelete,
  findNotesInImportant,
} from "../../utils/findNotesInArchive";

const NotesCard = ({ id, title, text, isPinned }) => {
  const { notesDispatch, archive, important,deleteNotes } = useNotes();

  const isNoteInArchive = findNotesInArchive(archive, id);
  const isNotesInImportant = findNotesInImportant(important, id);
  const isNotesInDelete=findNotesInDelete(deleteNotes,id)


  const onPinClick = (id) => {
    !isPinned
      ? notesDispatch({
          type: "PIN",
          payload: { id },
        })
      : notesDispatch({
          type: "UNPIN",
          payload: { id },
        });
  };

  const onArchiveClick = (id) => {
    !isNoteInArchive
      ? notesDispatch({
          type: "ADD_TO_ARCHIVE",
          payload: { id },
        })
      : notesDispatch({
          type: "REMOVE_FROM_ARCHIVE",
          payload: { id },
        });
  };

  const onImportantClick = (id) => {
    !isNotesInImportant
      ? notesDispatch({
          type: "ADD_TO_IMPORTANT",
          payload: { id },
        })
      : notesDispatch({
          type: "REMOVE_FROM_IMPORTANT",
          payload: { id },
        });
  };

  const onDeleteCLick =(id)=>{
    !isNotesInDelete
    ? notesDispatch ({
      type:"ADD_TO_DELETE",
      payload:{id},
    })
    : notesDispatch ({
      type:"REMOVE_FROM_DELETE",
      payload:{id}
    })
  }

  return (
    <div
      key={id}
      className="border-4 mt-3 bg-fuchsia-200 w-[300px] h-[150px] border-neutral-800 p-1 rounded"
    >
      <div className="flex justify-between border border-blue-500">
        <p>{title}</p>
        <div>
          <button onClick={() => onImportantClick(id)}>
            <span
              className={
                isNotesInImportant
                  ? "material-icons"
                  : "material-icons-outlined"
              }
            >
              grade
            </span>
          </button>

          {!isNoteInArchive && !isNotesInImportant ? (
            <button onClick={() => onPinClick(id)}>
              <span
                className={
                  isPinned ? "material-icons" : "material-icons-outlined"
                }
              >
                push_pin
              </span>
            </button>
          ) : (
            <></>
          )}
        </div>
      </div>
      <div className="flex mt-3">
        <p>{text}</p>
        <div className="ml-auto">
          <button onClick={() => onArchiveClick(id)}>
            <span
              className={
                isNoteInArchive ? "material-icons" : "material-icons-outlined"
              }
            >
              archive
            </span>
          </button>
          <button onClick={()=>onDeleteCLick(id)}>
            <span className="material-icons-outlined">delete</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default NotesCard;
