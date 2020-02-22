import React, {Component} from 'react';

import Header from '../Header/Header';
import Backdrop from './BackDrop/BackDrop';
import ToolBar from './ToolBar/ToolBar';
import SideDrawer from './HamburgerButton/SideDrawer';

import "./Navbar.css"
class Navbar extends Component {
  state = {
    SideDrawerOpen:false
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
          <SideDrawer show={this.state.SideDrawerOpen} clickHandler={this.hamburgerButtonClickHandler}/>
          <ToolBar hamburgerClickHandler={this.hamburgerButtonClickHandler} />
          {backdrop}
      </div>
    );
  }
}

export default Navbar;