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
      this.setState((prevState) => {
        return {SideDrawerOpen: !prevState.SideDrawerOpen};
      });
  };
  backdropClickHandler = () => {
    this.setState({SideDrawerOpen: false});
  };

  render() {
    let sideDrawer;
    let backdrop;

    if (this.state.SideDrawerOpen){
      sideDrawer =  <SideDrawer />
      backdrop = <Backdrop click={this.backdropClickHandler}/>
    }
    return (
      <div className="navbar-navbar">
          <Header />
          <ToolBar hamburgerClickHandler={this.hamburgerButtonClickHandler} />
          {sideDrawer}
          {backdrop}
      </div>
    );
  }
}

export default Navbar;