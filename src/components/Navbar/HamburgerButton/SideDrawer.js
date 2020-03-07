import React from 'react';
import "./SideDrawer.css";
import {Link} from "react-router-dom";
import HamburgerButton from "./HamburgerButton";
import CartIcon from '../CartIcon';


const SideDrawer = props => {

    let drawerClass = 'sidedrawer';
    
    if (props.show) {
        drawerClass = 'sidedrawer open'
    };
    return (
    <nav className={drawerClass}>
         <div className='nav-hamburger'><HamburgerButton style={{border: 'none'}} click={props.hamburgerClickHandler} /></div>   
         <ul>
              <li className='about'><Link to='/About' onClick={props.hamburgerClickHandler}>About</Link></li>
              <li className='shop'><Link to='/' onClick={props.hamburgerClickHandler}>Shop</Link></li>
              <li className='jewelry'><Link to='/Jewelrys' onClick={props.hamburgerClickHandler}>Jewelry</Link></li>
              <li className='stones'><Link to='/Stones' onClick={props.hamburgerClickHandler}>Stones</Link></li>
         </ul>
         <CartIcon/>
    </nav>
    );
};

export default SideDrawer;