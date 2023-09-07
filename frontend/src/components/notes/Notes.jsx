import React, { Fragment, useEffect } from 'react'
import NoteCard from '../card/NoteCard'
import './Notes.css'
import { useDispatch, useSelector } from 'react-redux'
import { getAllNotes } from '../../actions/courseAction'

const Notes = () => {
  const dispatch = useDispatch()
  const { notes } = useSelector(state=>state.note)

  return (
    <Fragment>
      <h1 className='heading'>Download Notes by Code</h1>
      <hr />
      <div className='notes'>
        { notes && notes.map((note) => (
          <NoteCard key={note._id} name={note.name} img={note.img.url}/>
        )) }
      </div>
    </Fragment>
  )
}

export default Notes
