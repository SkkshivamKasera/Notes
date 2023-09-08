import React, { Fragment } from 'react'
import NoteCard from '../card/NoteCard'
import './Notes.css'
import { useSelector } from 'react-redux'

const Notes = () => {
  const { notes } = useSelector(state=>state.note)
  return (
    <Fragment>
      <h1 className='heading'>Download Notes by Code</h1>
      <hr />
      <div className='notes'>
        { notes && notes.map((note) => (
          <NoteCard key={note._id} name={note.name} img={note.img.url} notes={note.notes}/>
        )) }
      </div>
    </Fragment>
  )
}

export default Notes