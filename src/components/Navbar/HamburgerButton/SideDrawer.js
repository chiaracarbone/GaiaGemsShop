import React from 'react';
import "./SideDrawer.css";
import {Link} from "react-router-dom";

const SideDrawer = props => {
    let drawerClass = 'sidedrawer';
    if (props.show) {
        drawerClass = 'sidedrawer open'
    }

    return (
    <nav className={drawerClass}>
        <ul>
              <li className='about'><Link to='/About'>About</Link></li>
              <li className='shop'><Link to='/'>Shop</Link></li>
              <li className='jewelry'><Link to='/Jewelry'>Jewelry</Link></li>
              <li className='stones'><Link to='/Stones'>Stones</Link></li>
              <li className='cart'><Link to='/ShoppingCart'><i className="fas fa-shopping-cart"></i></Link></li>
        </ul>
    </nav>
    );
};

export default SideDrawer;