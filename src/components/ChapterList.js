import React from 'react';
import { Link } from 'react-router-dom';
import './ChapterList.css';

const ChapterList = ({ list, loading }) => {
  console.log(list.length);
  return (
    <div className='chapter-list'>
      {loading ? (
        <span>Loading</span>
      ) : (
        <>
          {' '}
          <div className='chapter-list__header'>
            New chapter coming in 7 days!
          </div>
          {list &&
            list.map((l, index) =>
              index + 1 !== list.length ? (
                <Link
                  to={`chapter/${l.text.split(' ')[4]}`}
                  key={index}
                  className='chapter-list__item'
                >
                  {/* <p className='date'>Date here</p> */}
                  <p className='chapter-number'>{l.text}</p>
                  {/* <p className='age-limit'>age restriction</p> */}
                </Link>
              ) : (
                ''
              )
            )}
        </>
      )}
    </div>
  );
};

export default ChapterList;
