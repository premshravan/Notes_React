export const findNotesInArchive = (archive, id) => {
    return archive.some((note) => note.id === id);
  };


  export const findNotesInImportant =(important,id)=>{
    return important.some(note=> note.id===id)
}

export const findNotesInDelete =(deleteNotes,id)=>{
  return deleteNotes.some(note =>note.id===id)
}