import React, { Component } from 'react';
import testImage from './Pictures/001.jpg';
import image2 from './Pictures/002.jpg';
import image3 from './Pictures/003.jpg';
import image4 from './Pictures/004.jpg';
import './Jewelry.css';

export default class Jewelry extends Component {
  render() {
    return (
      <div className='jewelry-class'>
        <img alt='necklace' src={testImage}/>
        <img alt='necklace' src={image2}/>
        <img alt='necklace' src={image3}/>
        <img alt='necklace' src={image4}/>
     </div>
    );
  }
}
