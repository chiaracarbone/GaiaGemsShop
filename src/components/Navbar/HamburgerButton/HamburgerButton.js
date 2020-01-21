import React from 'react';
import './HamburgerButton.css';



const HamburgerButton = props => (
    <button className='hamburger-menu' onClick={props.click}>
        <span className="line1"></span>
        <span className="line2"></span>
        <span className="line3"></span>
    </button>
  );
  
  export default HamburgerButton;