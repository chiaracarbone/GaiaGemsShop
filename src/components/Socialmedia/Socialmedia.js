import React, { Component } from 'react';
import './Socialmedia.css'



export default class Socialmedia extends Component {
  render() {
    return (
      <div className='socialmedia'>
          <ul className='socialmedia-icons'>
              <li className='socialmedia-icon'><a href={'https://www.pinterest.de/chiaracrbn/'} target={'_blank'} className="fab fa-pinterest"><span>Link to Pinterest</span></a></li>
              <li className='socialmedia-icon'><a href={'https://www.instagram.com/gaiagemsjewelry/'} target={'_blank'} className="fab fa-instagram"><span>Link to Instagram</span></a></li>
              <li className='socialmedia-icon'><a href={'https://github.com/chiaracarbone'} target={'_blank'} className="fab fa-github"><span>Link to Github</span></a></li>
              
          </ul>
     </div>
    );
  }
}