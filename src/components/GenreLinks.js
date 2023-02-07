import React from 'react';
import './GenreLinks.css';

const GenreLinks = () => {
  return (
    <div className='genre-links'>
      <div className='g-links-container'>
        <span>Romance</span>
        <span>Teen</span>
        <span>Bl</span>
        <span>Fantasy</span>
        <span>Mytery</span>
        <span>Harem</span>
      </div>
      <span className='g-links-btn'>All genres</span>
    </div>
  );
};

export default GenreLinks;
