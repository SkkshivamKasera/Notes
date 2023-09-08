import React from 'react'
import './NoteCard.css'
import { Link } from 'react-router-dom'

const NoteCard = ({name, img, notes}) => {
  console.log(notes)
  return (
    <div className='note_card'>
      <div className='note_card_contant'>
        <img src={img} alt='none'/>
        <div>
            <h5>{name}</h5>
            <span>Download Notes Here</span>
        </div>
        <div>
            <Link target='_blank' to={notes && notes.url}>Pdf Notes</Link>
        </div>
      </div>
    </div>
  )
}

export default NoteCard
