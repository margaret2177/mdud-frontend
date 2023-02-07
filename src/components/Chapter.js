import axios from 'axios';
import React, { useEffect, useState } from 'react';
import ComicViewer from 'react-comic-viewer';
import { useParams, useNavigate } from 'react-router-dom';
import './Chapter.css';

const Chapter = () => {
  const navigate = useNavigate();
  const { url, chap } = useParams();
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchItem = async () => {
      const { data } = await axios.get(`/api/${url}/chapter/${chap}`);
      setItems(data);
    };
    fetchItem();
  }, [url, chap]);

  return (
    <div className='chapter'>
      <ComicViewer pages={items} initialIsExpansion={true} />
      <div className='chapter-navigation-container'>
        <div className='home-btn' onClick={() => navigate(`/details/${url}`)}>
          <h1>Home</h1>
        </div>
        <div className='chapter-btn'>
          {' '}
          {items && items.length > 1 && (
            <p onClick={() => navigate(`/chapter/${chap - 1}`)}>
              <span>icon</span> Previous
            </p>
          )}
          {items && chap < items.length && (
            <p onClick={() => navigate(`/chapter/${Number(chap) + 1}`)}>
              Next <span>icon</span>
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Chapter;
