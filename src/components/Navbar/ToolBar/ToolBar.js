import React from 'react';
import './ToolBar.css';
import {Link} from 'react-router-dom';
import HamburgerButton from "../HamburgerButton/HamburgerButton";

const ToolBar = props => (
    <nav className='main-navbar'>
        <ul className='navbar'>
              <li className='nav-hamburger'><HamburgerButton click={props.hamburgerClickHandler} /></li>
              <li className='nav-about'><Link to='/About'>About</Link></li>
              <li className='nav-shop'><Link to='/'>Shop</Link></li>
              <li className='nav-jewelry'><Link to='/Jewelrys'>Jewelry</Link></li>
              <li className='nav-stones'><Link to='/Stones'>Stones</Link></li>
              <li className='nav-cart'><Link to='/Cart'><i className="fas fa-shopping-cart"></i></Link></li>
        </ul>
    </nav>
);

export default ToolBar;