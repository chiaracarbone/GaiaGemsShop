import React from 'react';
import {Link} from 'react-router-dom'
import './Navbar.css'

import Header from '../Header/Header';

export default function Navbar(props) {
  const mobileWidth = 375

  return <>
    {window.innerWidth <= mobileWidth
      ? <div className={'hamburger-menu'}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      : null
    }

    <nav className='main-navbar'>
      <Header />

      <ul className='flexbox-navbar'>
        <li><Link to='/'>About</Link></li>
        <li><Link to='/'>Shop</Link></li>
        <li><Link to='/'>Jewelry</Link></li>
        <li><Link to='/'>Stones</Link></li>
        <li><Link to='/'><i className="fas fa-shopping-cart"></i></Link></li>

      </ul>
    </nav>
  </>
}

