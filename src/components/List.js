import React from 'react';
import './List.css';
import ListItem from './ListItem';

const List = ({ title, data }) => {
  return (
    <div className='list'>
      <div className='l-title'>{title}</div>
      <div className='l-item-wrapper'>
        {data && data.map((d) => <ListItem data={d} />)}
      </div>
    </div>
  );
};

export default List;
