import React from 'react';
import { Link } from 'react-router-dom';
import "./Empty.css"

const Empty = ({h, p, s}) => {
  return (
    <div className='empty-container'>
      <h1 className='empty-heading'>{h}</h1>
      <p className='empty-text'>{p}</p>
      {s && <Link to="/courses" className='empty-link'>Browse Courses</Link>}
    </div>
  );
};

export default Empty;