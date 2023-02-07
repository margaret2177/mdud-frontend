import React from 'react';
import { Link } from 'react-router-dom';
import './ListItem.css';

const ListItem = ({ data }) => {
  return (
    <Link to={`/details/${data.path}`} className='list-item'>
      <div className='li-thumbnail'>
        <img
          style={{ width: '100%', height: '100%' }}
          src={data.itemThumb}
          alt=''
        />
      </div>
      <div className='li-details'>
        <p className='li-title'>{data.title}</p>
        <p className='li-genre'>Genre</p>
      </div>
    </Link>
  );
};

export default ListItem;
