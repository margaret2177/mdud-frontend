import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <div className='header'>
      <Link to={`/`} className='header__left'>
        <p className='hl-icon'>
          <i className='fa-solid fa-paw'></i>
        </p>
        <p className='hl-brand'>READS</p>
      </Link>
      {/* <div className='header__center'>
        <span>Home</span>
        <span>Genre</span>
      </div> */}
      {/* <div className='header__right'>
        <div className='header-search-container' style={{ flex: 1 }}>
          <form action=''>
            <input type='text' />
          </form>
          <span className='search-icon'>
            <i className='fa-solid fa-magnifying-glass'></i>
          </span>
        </div>
        <span className='login-singup'>Login/Signup</span>
      </div> */}
    </div>
  );
};

export default Header;
