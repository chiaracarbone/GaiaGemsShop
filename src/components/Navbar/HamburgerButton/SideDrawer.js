import React from 'react';
import "./SideDrawer.css";
import {Link} from "react-router-dom";



const SideDrawer = props => {

    let drawerClass = 'sidedrawer';
    
    if (props.show) {
        drawerClass = 'sidedrawer open'
    };
    return (
    <nav className={drawerClass}>
        <ul>
              <li className='about'><Link to='/About' onClick={props.clickHandler}>About</Link></li>
              <li className='shop'><Link to='/' onClick={props.clickHandler}>Shop</Link></li>
              <li className='jewelry'><Link to='/Jewelrys' onClick={props.clickHandler}>Jewelry</Link></li>
              <li className='stones'><Link to='/Stones' onClick={props.clickHandler}>Stones</Link></li>
              <li className='cart'><Link to='/ShoppingCart' onClick={props.clickHandler}><i className="fas fa-shopping-cart"></i></Link></li>
        </ul>
    </nav>
    );
};

export default SideDrawer;