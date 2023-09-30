import React, { Fragment } from 'react'
import NoteCard from '../card/NoteCard'
import './Notes.css'
import { useSelector } from 'react-redux'
import Empty from '../profile/Empty'

const Notes = () => {
  const { notes } = useSelector(state => state.note)
  return (
      notes && notes.length !== 0 ? (
      <Fragment>
        <h1 className='heading'>Download Notes by Code</h1>
        <hr />
        <div className='notes'>
          {notes && notes.map((note) => (
            <NoteCard key={note._id} name={note.name} img={note.img.url} notes={note.notes} />
          ))}
        </div>
      </Fragment>
    ) : (
      <Empty h={"Empty"} p={"Not Notes Yet"} s={false} />
    )
  )
}

export default Notes