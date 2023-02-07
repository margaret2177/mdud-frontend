import React from 'react';
import './Banner.css';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { Link, Navigate } from 'react-router-dom';
const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const Banner = ({ data }) => {
  const item = data && data.map((d, i) => <div className='banner'>Item 1</div>);
  return (
    <>
      {data && (
        // <div
        //   className='banner'
        //   style={{
        //     background: `url('https://dressupdarling.online/wp-content/uploads/2021/06/New-Project-49.jpg')center/cover no-repeat`,
        //   }}
        // >

        // </div>
        <Carousel
          responsive={responsive}
          infinite={true}
          autoPlay={true}
          autoPlaySpeed={3000}
        >
          {data &&
            data.map((d) => (
              <Link
                to={`/details/${d.path}`}
                className='banner'
                // style={{
                //   background: `url(${d.itemBanner})center/cover no-repeat`,
                // }}
              >
                <img src={d.itemBanner} alt='' />
              </Link>
            ))}
          {/* <Link
            to={`/details/${data && data[0].path}`}
            className='banner'
            style={{
              background: `url(${
                data && data[0].itemBanner
              })center/cover no-repeat`,
            }}
          ></Link>
          <Link
            to={`/details/${data && data[1].path}`}
            className='banner'
            style={{
              background: `url(${
                data && data[1].itemBanner
              })center/cover no-repeat`,
            }}
          ></Link> */}
        </Carousel>
      )}
    </>
  );
};

export default Banner;
