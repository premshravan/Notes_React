import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Sidebar from '../../components/Sidebar/Sidebar'
import NotesCard from '../../components/NotesCard/NotesCard'
import { useNotes } from '../../Context/NotesContext'


const Important = () => {
    const {important}=useNotes();
  return (
    <>
      <Navbar />
      <main className="flex gap-6">
        <Sidebar />

        <div className="mt-3 flex flex-wrap gap-2  w-screen">
          {important?.length > 0 ? (
            important.map(({ id, title, text, isPinned }) => (
              //note is destrucred to id,title,text
              <NotesCard
                key={id}
                id={id}
                title={title}
                text={text}
                isPinned={isPinned}
              />
            )) 
          ):(
              <p>No Important Note Are Available</p>
            )}
        </div>
      </main>
    </>
  )
}

export default Important;
