import React, { createContext, useContext, useReducer } from "react";
import notesReducer from "../reducers/notesReducer";

const NotesContext = createContext();

const NotesProvider = ({ children }) => {
  const initialState = {
    title: "",
    text: "",
    notes: [],
    archive:[],
    important:[],
    deleteNotes:[]
  };

  const [{ title, text, notes,archive,important,deleteNotes }, notesDispatch] = useReducer(
    notesReducer,
    initialState
  );

  return (
    <NotesContext.Provider value={{ title, text, notes,archive,important,deleteNotes, notesDispatch }}>
      {children}
    </NotesContext.Provider>
  );
};
const useNotes = () => useContext(NotesContext);

export { NotesProvider, useNotes };
