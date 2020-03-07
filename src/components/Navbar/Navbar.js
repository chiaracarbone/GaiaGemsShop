import React, {Component} from 'react';

import Header from '../Header/Header';
import Backdrop from './BackDrop/BackDrop';
import SideDrawer from './HamburgerButton/SideDrawer';

import "./Navbar.css"
class Navbar extends Component {
  state = {
    SideDrawerOpen: false
  };
  hamburgerButtonClickHandler = () => {
    console.log('click')
      this.setState((prevState) => {
        return {SideDrawerOpen: !prevState.SideDrawerOpen};
      });
  };
  backdropClickHandler = () => {
    this.setState({SideDrawerOpen: false});
  };
  
  render() {
    let backdrop;

    if (this.state.SideDrawerOpen){
      backdrop = <Backdrop click={this.backdropClickHandler}/>
    }
    return (
      <div className="navbar-navbar">
          <Header />
          <SideDrawer show={this.state.SideDrawerOpen} hamburgerClickHandler={this.hamburgerButtonClickHandler}/>
         {backdrop}
      </div>
    );
  }
}

export default Navbar;