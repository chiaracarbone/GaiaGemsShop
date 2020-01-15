import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import logo from '../../logo.gif';
import './Header.css';

export default class Header extends Component {
  render() {
    return (
      <nav className='header'>
        <Link to='/'>
          <img src={logo} alt='store' className='navbar-brand' />
        </Link>
      </nav>
    );
  }
}
