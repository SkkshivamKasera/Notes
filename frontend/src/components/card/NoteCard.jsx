import React from 'react'
import './NoteCard.css'
import { Link } from 'react-router-dom'

const NoteCard = ({name, img}) => {
  return (
    <div className='note_card'>
      <div className='note_card_contant'>
        <img src={img} alt='none'/>
        <div>
            <h5>{name}</h5>
            <span>Download Notes Here</span>
        </div>
        <div>
            <Link target='_blank' to={`http://localhost:5000/api/v1/notes/${name}.pdf`}>Pdf Notes</Link>
            <a href='#'>Chapterwise Notes</a>
        </div>
      </div>
    </div>
  )
}

export default NoteCard
