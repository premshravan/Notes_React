import { v4 as uuid } from "uuid";

const NotesReducer = (state, { type, payload }) => {
  switch (type) {
    case "TITLE":
      return {
        ...state,
        title: payload,
      };
    case "TEXT":
      return {
        ...state,
        text: payload,
      };
    case "ADD_NOTE":
      return {
        ...state,
        notes: [
          ...state.notes,
          { text: state.text, title: state.title, id: uuid(), isPinned: false },
        ],
      };
    case "CLEAR_INPUT":
      return {
        ...state,
        text: "",
        title: "",
      };
    case "PIN":
      return {
        ...state,
        notes: state.notes.map((note) =>
          note.id === payload.id ? { ...note, isPinned: true } : note
        ),
      };
    case "UNPIN":
      return {
        ...state,
        notes: state.notes.map((note) =>
          note.id === payload.id ? { ...note, isPinned: false } : note
        ),
      };
    case "ADD_TO_ARCHIVE":
      return {
        ...state,
        archive: [
          ...state.archive,
          state.notes.find(({ id }) => id === payload.id),
        ],
        notes: state.notes.filter(({ id }) => id !== payload.id),
      };
    case "REMOVE_FROM_ARCHIVE":
      return {
        ...state,
        notes: [
          ...state.notes,
          state.archive.find(({ id }) => id === payload.id),
        ],
        archive: state.archive.filter(({ id }) => id !== payload.id),
      };
    case "ADD_TO_IMPORTANT":
      return {
        ...state,
        important: [
          ...state.important,
          state.notes.find(({ id }) => id === payload.id),
        ],
        notes: state.notes.filter(({ id }) => id !== payload.id),
      };
    case "REMOVE_FROM_IMPORTANT":
      return {
        ...state,
        notes :[...state.notes,state.important.find(({id})=>id===payload.id),
        ],
        important:state.important.filter(({id})=>id!==payload.id)
      }
      case "ADD_TO_DELETE":
        return {
          ...state,
          deleteNotes:[...state.deleteNotes,state.notes.find(({id})=>id===payload.id)],
          notes:state.notes.filter(({id})=>id!==payload.id)
        }
      
    default:
      return state;
  }
};

export default NotesReducer;
