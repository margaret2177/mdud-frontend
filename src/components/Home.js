import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Home.css';
import Banner from './Banner';
import Details from './Details';
import ChapterList from './ChapterList';
import GenreLinks from './GenreLinks';
import List from './List';

const Home = () => {
  const [datas, setDatas] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchDatas = async () => {
      try {
        setLoading(true);
        const { data } = await axios.get('/api/home');
        setDatas(data);
        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    };
    fetchDatas();
  }, []);
  console.log(datas && datas);
  return (
    <div className='home' style={{ paddingTop: '50px' }}>
      {/* <GenreLinks /> */}
      {!loading && <Banner data={datas} />}
      {loading ? (
        <p style={{ padding: '20px 10%', textAlign: 'center' }}>Loading</p>
      ) : (
        <>
          <List title={'Featured'} data={datas} />
          {/* <List title={"Editor's Choice"} data={datas} /> */}
        </>
      )}
      {/* <Details /> */}
    </div>
  );
};

export default Home;
